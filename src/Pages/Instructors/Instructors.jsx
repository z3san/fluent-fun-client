import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MdPerson, MdEmail } from 'react-icons/md';
import { Helmet } from 'react-helmet-async';

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    axios
      .get('https://fluentfun-server.vercel.app/instructors')
      .then((response) => setInstructors(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
<Helmet>
  <title>FluentFun | Instructors</title>
</Helmet>

      <div className="md:py-20">
        <h1 className="text-center font-serif text-5xl mb-5">Our Instructors</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {instructors.map((instructor) => (
            <div key={instructor._id} className="card shadow-lg">
              {instructor.photoURL && (
                <img src={instructor.photoURL} alt="Instructor" className="w-full h-96 object-cover" />
              )}
              <div className="card-body">
                <h3 className="text-xl font-bold flex items-center">
                  <MdPerson className="text-blue-500 mr-2" /> {instructor.name}
                </h3>
                <p className="text-gray-600 flex items-center">
                  <MdEmail className="text-blue-500 mr-2" /> {instructor.email}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Instructors;
