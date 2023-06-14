import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FiUser, FiDollarSign, FiUserPlus } from 'react-icons/fi';

const TopClassesSection = () => {
  const [topClasses, setTopClasses] = useState([]);

  useEffect(() => {
    axios
      .get('https://fluentfun-server.vercel.app/sortClasses')
      .then((response) => {
        setTopClasses(response.data);
        AOS.init({ duration: 1000 });
      })
      .catch((error) => {
        console.error('Error retrieving sorted classes:', error);
      });
  }, []);

  return (
    <div>
      <h2 className="text-3xl text-center font-bold my-10 font-serif">Popular Classes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {topClasses.map((classItem) => (
          <div
            key={classItem._id}
            className="border border-gray-200 rounded-lg p-4 bg-white shadow-lg"
            data-aos="zoom-in"
          >
            <img
              src={classItem.classImg}
              alt={classItem.name}
              className="w-full sm:h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{classItem.name}</h3>
            <div className="flex items-center mb-2">
              <FiUser className="mr-1" />
              <p>Instructor: {classItem.instructorName}</p>
            </div>
            <div className="flex items-center mb-2">
              <FiUserPlus
               className="mr-1" />
              <p>Enrolled Students: {classItem.enrolledStudent}</p>
            </div>
            <div className="flex items-center">
              <FiDollarSign className="mr-1" />
              <p>Price: ${classItem.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopClassesSection;
