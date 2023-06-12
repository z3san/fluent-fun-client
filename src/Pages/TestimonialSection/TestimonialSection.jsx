import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const TestimonialSection = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
    });
  }, []);

  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      position: 'Language Learner',
      testimonial:
        'I have been studying Spanish at this language school for six months, and I am amazed at my progress. The instructors are incredibly knowledgeable and supportive. The interactive lessons and cultural immersion activities have made my learning experience enjoyable and effective. I highly recommend this school to anyone looking to learn a foreign language!',
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'Former Student',
      testimonial:
        'I attended the French language course at this school, and I couldn\'t be happier with my experience. The teachers were patient and skilled at adapting the lessons to different learning styles. The school\'s resources, such as online exercises and conversation practice sessions, were incredibly helpful in improving my language skills. Thanks to this school, I gained the confidence to communicate fluently in French!',
    },
    {
      id: 3,
      name: 'Michael Johnson',
      position: 'Business Professional',
      testimonial:
        'I decided to learn Mandarin Chinese for business purposes, and this language school exceeded my expectations. The curriculum is well-structured, and the teachers are experienced in teaching Chinese as a second language. The school also provides opportunities for practical application through business role-plays and case studies. I can now confidently negotiate and communicate with my Chinese partners. I highly recommend this language school to all professionals!',
    },
    {
      id: 4,
      name: 'Emily Thompson',
      position: 'Travel Enthusiast',
      testimonial:
        'I had always wanted to learn Italian, and enrolling in this language school was the best decision I made. The classes are interactive and engaging, and the teachers are passionate about teaching. The school organizes cultural events and language immersion trips to Italy, which helped me practice my language skills in a real-life setting. Thanks to this school, I can now explore Italy confidently and interact with locals. Grazie mille!',
    },
    // Add more testimonials as needed
  ];

  return (
    <section className="py-10">
      <div className="container bg-blue-300 rounded-lg py-4 mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Testimonials</h2>
        <Carousel 
          showArrows={false}
          showStatus={false}
          showIndicators={true}
          infiniteLoop
          showThumbs={false}
          autoPlay

        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col items-center justify-center bg-blue-100 p-6 rounded shadow"
              data-aos="fade-up"
            >
              <div className="testimonial-container">
                <div className="testimonial-text">
                  <p className="text-gray-600 mb-4 italic text-center text-lg max-w-full">
                    {testimonial.testimonial}
                  </p>
                </div>
                <div className="testimonial-info">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialSection;
