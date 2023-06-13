import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {  FaEnvelope, FaChair, FaDollarSign, FaUsers } from 'react-icons/fa'; 
import useSelectClass from '../../../Hooks/useSelectClass';

const MyEnrolledClass = () => {
  const [cart] = useSelectClass();
  
  // console.log(cart);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1 second
  }, []);

  return (
    <div>
        <h1 className='text-center font-bold text-3xl mb-5 font-serif'>My Enrolled Classes</h1>
        <div className="card-container grid md:grid-cols-3">
      {cart.map((enrolledClass) =>
        enrolledClass.payment === true ? (
          <div
            key={enrolledClass._id}
            className="card w-72 bg-white rounded-lg shadow-md mb-4"
            data-aos="fade-up" // Apply fade-up animation to the card
          >
            <figure>
              <img
                src={enrolledClass.classImg}
                alt="Class"
                className="w-full h-40 object-cover rounded-t-lg"
              />
            </figure>
            <div className="p-4">
              <h2 className="text-lg font-bold">{enrolledClass.name}</h2>
            
              <p className="flex items-center text-gray-500 mb-2">
                <FaEnvelope className="mr-2" /> Email: {enrolledClass.email}
              </p>
              <p className="flex items-center text-gray-500 mb-2">
                <FaChair className="mr-2" /> Seats: {enrolledClass.seats}
              </p>
              <p className="flex items-center text-gray-500 mb-2">
                <FaDollarSign className="mr-2" /> Price: ${enrolledClass.price}
              </p>
            
              <p className="flex items-center text-gray-500 mb-2">
                <FaUsers className="mr-2" /> Enrolled Students: {enrolledClass.enrolledStudent}
              </p>
              <div className="flex justify-end">
                
              </div>
            </div>
          </div>
        ) : null
      )}
    </div>
    </div>
  );
};

export default MyEnrolledClass;
