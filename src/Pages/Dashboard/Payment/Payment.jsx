import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import CheckoutForm from "./CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
  const data = useLoaderData();
  console.log(data);
  const price = parseFloat(data.price);
  return (
    <div>
      <Helmet>
        <title>Fluent Fun | Payments</title>
      </Helmet>
      <h1 className="text-center">payment</h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm price={price} />
      </Elements>
    </div>
  );
};

export default Payment;