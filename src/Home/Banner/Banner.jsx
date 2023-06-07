import React, { useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation in milliseconds
      delay: 200, // Delay before the animation starts in milliseconds
      easing: 'ease-in-out', // Easing function for the animation
      once: true, // Whether the animation should only happen once on scroll
      offset: 100 // Offset (in pixels) from the original trigger point
    });
  }, []);

  return (
    <div className="hero min-h-screen" style={{backgroundImage: "url(https://plus.unsplash.com/premium_photo-1661876481462-a1ef663b8524?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1058&q=80)"}}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <div className='text-5xl animate-pulse'>
            <Typewriter
              options={{
                strings: ['Hello!', 'hola!', 'こんにちは', 'Bonjour', 'مرحبًا'],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 50
              }}
            />
          </div>
          <p className="text-3xl mb-5" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500" data-aos-easing="ease-out-back">
            Language Immersion Adventure: Unlocking the World Through Words!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
