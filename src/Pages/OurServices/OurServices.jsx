import { RiGroupLine, RiChat1Line, RiBook2Line, RiCalendarEventLine } from 'react-icons/ri';
import { Zoom } from 'react-awesome-reveal';

const OurServices = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <Zoom cascade damping={0.2} duration={800}>
            <div className="group flex flex-col items-center bg-white rounded-lg overflow-hidden shadow-lg hover:bg-blue-100 transition duration-300 ease-in-out">
              <div className="p-4 bg-blue-300 rounded-full text-white text-4xl">
                <RiGroupLine />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-800">Group Classes</h3>
            </div>
            <div className="group flex flex-col items-center bg-white rounded-lg overflow-hidden shadow-lg hover:bg-blue-100 transition duration-300 ease-in-out">
              <div className="p-4 bg-blue-400 rounded-full text-white text-4xl">
                <RiChat1Line />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-800">Conversation Clubs</h3>
            </div>
            <div className="group flex flex-col items-center bg-white rounded-lg overflow-hidden shadow-lg hover:bg-blue-100 transition duration-300 ease-in-out">
              <div className="p-4 bg-blue-500 rounded-full text-white text-4xl">
                <RiBook2Line />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-800">Language Workshops</h3>
            </div>
            <div className="group flex flex-col items-center bg-white rounded-lg overflow-hidden shadow-lg hover:bg-blue-100 transition duration-300 ease-in-out">
              <div className="p-4 bg-blue-500 rounded-full text-white text-4xl">
                <RiCalendarEventLine />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-800">Cultural Events</h3>
            </div>
          </Zoom>
        </div>
      </div>
    </section>
  );
}

export default OurServices;
