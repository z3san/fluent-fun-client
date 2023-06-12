import React, { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


import Typewriter from 'typewriter-effect';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Banner = () => {
  

  return (
<>

    <div className='hero'>
        
    <Carousel autoPlay
      infiniteLoop
      showArrows={false}
      showThumbs={false}
      showStatus={false}>
      <div>
      
        <img src="https://i.ibb.co/w0C3mSM/Cover-photo-5.jpg" />
      </div>
     
      <div>
        <img src="https://www.smartparents.sg/sites/default/files/image-9256254-1f20f1a64dc3d0e6ead9339a8f4a6d08-info-6-ways-to-raise-a-bilingual-kid7_3.jpg" />
      </div>
      <div>
        <img src="https://static1.ara.cat/clip/d3959273-edb3-4a1c-a4e6-545ee292b190_16-9-aspect-ratio_default_0.jpg" />
      </div>
      <div>
        <img src="https://www.sophia.ac.jp/assets/uploads/2022/11/%E5%A4%96%E5%9B%BD%E8%AA%9E%E5%AD%A6%E9%83%A8_%E3%83%88%E3%82%99%E3%82%A4%E3%83%84%E8%AA%9E%E5%AD%A6%E7%A7%91_pc.jpg" />
      </div>
      <div>
        <img src="https://www.uis.edu/sites/default/files/styles/min_1400/public/2021-10/edl-hero1.jpg?itok=tvofC7vV" />
      </div>
    </Carousel>
    </div>
      
    





</>


  );
};

export default Banner;
<div className="hero-content text-center text-neutral-content">

</div>