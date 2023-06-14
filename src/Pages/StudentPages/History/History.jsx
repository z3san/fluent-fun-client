import React, { useEffect } from 'react';
import useSelectClass from '../../../Hooks/useSelectClass';
import { FaDollarSign, FaCalendarAlt, FaUser, FaEnvelope, FaUsers, FaBarcode, FaBook } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const History = () => {
  const [cart] = useSelectClass();

  // Sort the cart by payment date in descending order
  const sortedCart = [...cart].sort((a, b) => new Date(b.date) - new Date(a.date));

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="overflow-x-auto">
      <h1 className="text-center font-bold text-3xl mb-5" data-aos="fade-up">Payment History</h1>
      <table className="w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-3 px-4 text-center" data-aos="fade-up" data-aos-delay="100">
              <FaCalendarAlt className="mr-2 inline-block align-middle" />
              Date
            </th>
            <th className="py-3 px-4" data-aos="fade-up" data-aos-delay="200">
              <FaBook className="mr-2 inline-block align-middle" />
              Selected Course
            </th>
            <th className="py-3 px-4 text-center" data-aos="fade-up" data-aos-delay="300">
              <FaDollarSign className="mr-2 inline-block align-middle" />
              Price
            </th>
            <th className="py-3 px-4 text-center" data-aos="fade-up" data-aos-delay="400">
              <FaEnvelope className="mr-2 inline-block align-middle" />
              Email
            </th>
            <th className="py-3 px-4 text-center" data-aos="fade-up" data-aos-delay="500">
              <FaBarcode className="mr-2 inline-block align-middle" />
              Transaction ID
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedCart && sortedCart.length > 0 ? (
            sortedCart.map((item, index) => (
              <tr
                key={item._id}
                className="border-b border-gray-200"
                data-aos="fade-up"
                data-aos-delay={600 + index * 100}
              >
                <td className="py-3 px-4 text-center">{item.date}</td>
                <td className="py-3 px-4 text-center">{item.name}</td>
                <td className="py-3 px-4 text-center"> {item.price}</td>
                <td className="py-3 px-4 text-center">{item.email}</td>
                <td className="py-3 px-4 text-center">{item.transactionId}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center py-3">
                No payment history found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default History;
