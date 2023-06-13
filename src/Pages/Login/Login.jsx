import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import SocialLogin from "../SocialLogin/SocialLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { signIn } = useContext(AuthContext);
  const { handleSubmit, register, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    // console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        Swal.fire({
          title: "User Login Successful",
          showClass: {
            popup: "animate_animated animate_fadeInDOwn ",
          },
          hideClass: {
            popup: "animate_animated animate_fadeOutUp",
          },
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
        // Handle login error here
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
   <div>
      <Helmet>
        <title>FluentFun | Sign In</title>
      </Helmet>


     <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="w-full max-w-md">
        <form
          name="login-form"
          className="bg-white rounded-lg shadow-lg px-8 py-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="text-3xl text-center mb-6 text-blue-800">Sign In</h2>
          <div className="form-item mb-4">
            <input
              {...register("email", {
                required: "Please enter your email",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please enter a valid email",
                },
              })}
              className="border border-gray-300 rounded px-3 py-2 w-full"
              placeholder="Email"
            />
            <p className="text-red-500">
              {errors.email && errors.email.message}
            </p>
          </div>
          <div className="form-item mb-4">
            <div className="relative">
              <input
                {...register("password", {
                  required: "Please enter your password",
                })}
                type={showPassword ? "text" : "password"}
                className="border border-gray-300 rounded px-3 py-2 w-full"
                placeholder="Password"
              />
              {showPassword ? (
                <FaEyeSlash
                  className="absolute right-3 top-2/4 transform -translate-y-2/4 cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <FaEye
                  className="absolute right-3 top-2/4 transform -translate-y-2/4 cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              )}
            </div>
            <p className="text-red-500">
              {errors.password && errors.password.message}
            </p>
          </div>
          <div className="form-item">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white rounded px-4 py-2"
            >
              Sign In
            </button>
            <p className="text-red-500 text-center">{error}</p>
          </div>
          <div className="text-center">
            <p>
              New here?{" "}
              <Link to="/register" className="text-blue-500 hover:text-blue-800">
                Create an account
              </Link>
            </p>
            <SocialLogin />
          </div>
        </form>
      </div>
    </div>
   </div>
  );
};

export default Login;
