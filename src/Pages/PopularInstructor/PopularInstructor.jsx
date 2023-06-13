import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const PopularInstructor = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    axios
      .get("https://fluentfun-server.vercel.app/instructors")
      .then((response) => {
        setInstructors(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const cardVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1 },
  };

  return (
    <div>
      <h1 className="text-center md:text-3xl lg:text-5xl font-serif mb-5 mt-5">Popular Instructors</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {instructors.slice(0, 6).map((instructor) => (
          <motion.div
            key={instructor._id}
            className="bg-white p-4 rounded-lg shadow-md relative overflow-hidden"
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
          >
            <img
              src={instructor.photoURL}
              alt={instructor.name}
              className="w-full h-48 md:h-96 object-cover rounded-lg mb-4"
            />
            <div className="absolute bottom-0 left-0 bg-gray-100 text-black w-full py-2 px-4 transition-colors duration-300">
              {instructor.name}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructor;
