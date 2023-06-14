import React from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ImageGallery = () => {
  AOS.init();

  const imageVariants = {
    hover: {
      scale: 1.1,
    },
  };

  return (
    <div className="image-gallery">
      <h2 className="text-3xl text-center font-bold my-10 font-serif">Cultural Activities</h2>
      <div className="grid md:grid-cols-3 rounded-lg gap-4 h-3/4" >
        <motion.div
          className="image-item"
          data-aos="zoom-in"
          whileHover="hover"
          variants={imageVariants}
        >
          <img
            src="https://d2ostr1nawkjr.cloudfront.net/app/uploads/2022/11/26035227/engaging-students-in-schoolwide-cultural-events-OPT.jpg"
            alt="Image 1"
            className="w-full h-full rounded-lg object-cover"
          />
        </motion.div>
        <motion.div
          className="image-item"
          data-aos="zoom-in"
          whileHover="hover"
          variants={imageVariants}
        >
          <img
            src="https://wp-blog.fl4k.com/wp-content/uploads/2017/04/Multicultural-Activities-.jpg"
            alt="Image 2"
            className="w-full h-full rounded-lg object-cover"
          />
        </motion.div>
        <motion.div
          className="image-item"
          data-aos="zoom-in"
          whileHover="hover"
          variants={imageVariants}
        >
          <img
            src="https://blog.hope-education.co.uk/wp-content/uploads/2021/02/Hope-outdoor-activity-ideas-header-min.jpg"
            alt="Image 3"
            className="w-full h-full rounded-lg object-cover"
          />
        </motion.div>
        <motion.div
          className="image-item"
          data-aos="zoom-in"
          whileHover="hover"
          variants={imageVariants}
        >
          <img
            src="https://res.cloudinary.com/mommy-nearest/image/upload/c_fill,h_450,w_800/cisjxeo7wrraxoanzyoi.jpg"
            alt="Image 4"
            className="w-full h-full rounded-lg object-cover"
          />
        </motion.div>
        <motion.div
          className="image-item"
          data-aos="zoom-in"
          whileHover="hover"
          variants={imageVariants}
        >
          <img
            src="https://blog.hope-education.co.uk/wp-content/uploads/2021/02/Hope-outdoor-activity-ideas-header-min.jpg"
            alt="Image 5"
            className="w-full h-full rounded-lg object-cover"
          />
        </motion.div>
        <motion.div
          className="image-item"
          data-aos="zoom-in"
          whileHover="hover"
          variants={imageVariants}
        >
          <img
            src="https://lorenaylennox.com/wp-content/uploads/2021/06/9-Outdoor-Language-Learning-Ideas-for-Bilingual-Kids-2.jpg"
            alt="Image 6"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ImageGallery;
