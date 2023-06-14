import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Banner = () => {
  return (
    <AwesomeSlider bullets={false} >
      <div className='w-full' data-src="https://i.ibb.co/mS6sNdz/Cover-photo-5.jpg" />
      <div data-src="https://i.ibb.co/0MzmzM9/6489dc6cec9176334b5e5832.png" />
      <div data-src="https://i.ibb.co/HY9Prwv/6489e1939d9a36014bf75ee8.jpg" />
      <div data-src="https://i.ibb.co/9WppWCQ/6489e34aec9176334b5edc55.png" />
    </AwesomeSlider>
  );
};

export default Banner;
