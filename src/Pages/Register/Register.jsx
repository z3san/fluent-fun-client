import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Helmet } from 'react-helmet-async';

const Register = () => {
  const [error, setError] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    // console.log(data);

    const { name, email, password, photoURL } = data;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);

        updateUserProfile(name, photoURL)
          .then(() => {
            const saveUser = { name, email, photoURL, role: 'student' };
            fetch('https://fluentfun-server.vercel.app/users', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(saveUser)
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  reset();
                  Swal.fire({
                    title: 'User Registration Successful',
                    showClass: {
                      popup: 'animate_animated animate_fadeInDOwn '
                    },
                    hideClass: {
                      popup: 'animate_animated animate_fadeOutUp'
                    }
                  });
                  navigate(from, { replace: true });
                }
              });
          })
          .catch((error) => {
            setError(error.message)
            console.log(error.message)});
      })
      .catch((error) => {
        setError(error.message)
        console.log(error)});
  };

  return (
    <>
      <Helmet>
        <title>FluentFun | Register</title>
      </Helmet>


    
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="w-full max-w-md">
        <form
          name="register-form"
          className="bg-white rounded-lg shadow-lg px-8 py-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="text-3xl text-center mb-6 text-blue-800">Register</h2>
          <div className="form-item mb-4">
            <input
              {...register('name', {
                required: 'Please enter your name'
              })}
              className="border border-gray-300 rounded px-3 py-2 w-full"
              placeholder="Name"
            />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          </div>
          <div className="form-item mb-4">
            <input
              {...register('email', {
                required: 'Please enter your email',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Please enter a valid email'
                }
              })}
              className="border border-gray-300 rounded px-3 py-2 w-full"
              placeholder="Email"
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>
          <div className="form-item mb-4">
            <input
              {...register('photoURL', {
                required: 'Please enter your photo URL'
              })}
              className="border border-gray-300 rounded px-3 py-2 w-full"
              placeholder="Photo URL"
            />
            {errors.photoURL && <p className="text-red-500">{errors.photoURL.message}</p>}
          </div>
          <div className="form-item mb-4">
            <input
              {...register('password', {
                required: 'Please enter your password',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters'
                },
                pattern: {
                  value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*]).*$/,
                  message:
                    'Password must contain at least one uppercase letter, lowercase letter, number, and special character'
                }
              })}
              type="password"
              className="border border-gray-300 rounded px-3 py-2 w-full"
              placeholder="Password"
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>
          <div className="form-item mb-4">
            <input
              {...register('confirmPassword', {
                required: 'Please confirm your password',
                validate: (value) =>
                  value === getValues('password') || 'Passwords do not match'
              })}
              type="password"
              className="border border-gray-300 rounded px-3 py-2 w-full"
              placeholder="Confirm Password"
            />
            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword.message}</p>
            )}
          </div>
          <div className="form-item">
            <p className='text-center text-red-500'>{error}</p>
            <button type="submit" className="w-full bg-blue-500 text-white rounded px-4 py-2">
              Register
            </button>
          </div>
          <p className="text-center">Already have an account?</p>
          <Link to="/login" className="block text-blue-500 hover:text-blue-800 text-center">
            Login Here
          </Link>
          <SocialLogin />
        </form>
      </div>
    </div>
    </>
  );
};

export default Register;
