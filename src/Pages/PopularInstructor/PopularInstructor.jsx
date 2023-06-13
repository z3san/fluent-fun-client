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
      <h1 className="text-center text-5xl mb-5 mt-5 font-serif ">Popular Instructors</h1>
      <div className="grid grid-cols-3 gap-4">
        {instructors.slice(0, 6).map((instructor) => (
          <motion.div
            key={instructor.id}
            className="bg-white p-4 rounded-lg shadow-md relative overflow-hidden"
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
          >
            <img src={instructor.photoURL} alt={instructor.name} className="w-full h-96 object-cover rounded-lg mb-4" />
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="text-white text-lg font-bold">{instructor.name}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructor;
