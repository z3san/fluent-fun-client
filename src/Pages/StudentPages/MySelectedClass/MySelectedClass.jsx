import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../../Providers/AuthProviders';
import useSelectClass from '../../../Hooks/useSelectClass';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MySelectedClass = () => {

    const [cart, refetch] = useSelectClass()
     console.log(cart);
    
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://fluentfun-server.vercel.app/classesCarts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  

  return (
    <div>
       <h1 className="text-3xl font-bold mb-6 text-center">My Selected Classes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cart.map((classObj) => (
         classObj.payment === false &&  <div key={classObj._id} className="card shadow-lg">
         <img src={classObj.classImg} alt="" className="w-full h-40 object-cover" />
         <div className="card-body">
           <h3 className="text-xl font-bold">{classObj.name}</h3>
          
           <p className="text-gray-500">Price: {classObj.price}</p>
           <p className="text-gray-500">Seats: {classObj.seats}</p>
           <div className="flex justify-between mt-4">
           <Link to={`/dashboard/payment/${classObj._id}`}>  <button className="btn btn-sm bg-yellow-500 hover:bg-yellow-600">Pay</button></Link>
             <button className="btn btn-sm bg-gray-300" onClick={() => handleDelete(classObj)}>
               Delete
             </button>
           </div>
         </div>
       </div>
        ))}
      </div> 
    </div>
  );
};

export default MySelectedClass;
