import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

import axios from "axios";

import { Helmet } from "react-helmet-async";
import UseAuth from "../../../Hooks/UseAuthentication";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ data }) => {
  const stripe = useStripe();
  const { price, classId, seats, enrolledStudent, _id } = data;
  const { user } = UseAuth();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const navigate = useNavigate()
  useEffect(() => {
    if (price > 0) {
      axios
        .post("https://fluentfun-server.vercel.app/create-payment-intent", { price })
        .then((res) => {
          //   console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, []);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      //   console.log("[error]", error);
      setCardError(error.message);
    } else {
      setCardError("");
      //   console.log("[PaymentMethod]", paymentMethod);
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "unknown",
            email: user?.email || "anonymous",
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError);
    }

    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      // save payment information
      const payment = {
        transactionId: paymentIntent.id,
        date: new Date(),
        seats: seats - 1,
        enrolledStudent: enrolledStudent + 1,
        payment: true,
      };

      axios
        .put(`https://fluentfun-server.vercel.app/payments/${_id}`, payment)
        .then((res) => {
          if (res.data.modifiedCount > 0) {
            const update = {
              enrolledStudent: enrolledStudent + 1,
              seats: seats - 1,
            };
            axios
              .put(`https://fluentfun-server.vercel.app/classUpdates/${classId}`, update)
              .then((res) => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                  // display confirm sweet alert
                  Swal.fire("Payment successful!", "You are enrolled", "success");
                   navigate("/dashboard/myenrolledclass");
                  setProcessing(true);
                }
              });
          }
        });
    }
  
  };

  return (
    <>
      <Helmet>
        <title>FluentFun | Checkout</title>
      </Helmet>
      <form className="w-2/3 m-8" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-warning btn-sm"
          type="submit"
          disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
      </form>
      {cardError && <p className="text-error ml-8">{cardError.message}</p>}
      {transactionId && (
        <p className="text-green-600 ml-8">
          Transaction complete with transactionId : <span className="text-red-500">{transactionId}</span>
        </p>
      )}
    </>
  );
};

export default CheckoutForm;