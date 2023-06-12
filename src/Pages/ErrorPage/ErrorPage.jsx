import Lottie from "lottie-react";
import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import errorPage from '../../assets/errorPage.json'
import { FaArrowRight } from "react-icons/fa";


const ErrorPage = () => {
  const { error, status } = useRouteError()
  return (
    <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
     
    <Lottie className="w-96" animationData={errorPage} loop={true} />
        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-extrabold text-5xl text-red-300'>
            <span className="animate-pulse">{status} Error </span>
           
          </h2>
          <p className='text-2xl font-semibold md:text-3xl text-red-900 mb-8'>
            {error?.message}
          </p>
          <Link to='/' className='btn'>
            Back to home <FaArrowRight className="ml-2"/>
          </Link>
          
        </div>
      </div>
    </section>
  )
}

export default ErrorPage