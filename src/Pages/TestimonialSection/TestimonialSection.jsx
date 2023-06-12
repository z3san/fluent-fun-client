import React from 'react';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import 'daisyui/dist/full.css'; // Import Daisy UI

const TestimonialSection = () => {
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
    // Add more testimonials as needed
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Testimonials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded shadow">
              <p className="text-gray-600 mb-4">{testimonial.testimonial}</p>
              <div className="flex items-center">
                <div className="ml-2">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
