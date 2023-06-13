import React from 'react';
import useSelectClass from '../../../Hooks/useSelectClass';
import { FaDollarSign, FaCalendarAlt, FaUser, FaEnvelope, FaUsers, FaBarcode, FaBook } from 'react-icons/fa';

const History = () => {
  const [cart] = useSelectClass();

  // Sort the cart by payment date in descending order
  const sortedCart = [...cart].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="overflow-x-auto">
      <h1 className="text-center font-bold text-3xl mb-5">Payment History</h1>
      <table className="w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-3 px-4 text-center">
              <FaCalendarAlt className="mr-2 inline-block align-middle" />
              Date
            </th>
            <th className="py-3 px-4">
              <FaBook className="mr-2 inline-block align-middle" />
              Selected Course
            </th>
            <th className="py-3 px-4 text-center">
              <FaDollarSign className="mr-2 inline-block align-middle" />
              Price
            </th>
            <th className="py-3 px-4 text-center">
              <FaEnvelope className="mr-2 inline-block align-middle" />
              Email
            </th>
            <th className="py-3 px-4 text-center">
              <FaUsers className="mr-2 inline-block align-middle" />
              Enrolled Students
            </th>
            <th className="py-3 px-4 text-center">
              <FaBarcode className="mr-2 inline-block align-middle" />
              Transaction ID
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedCart && sortedCart.length > 0 ? (
            sortedCart.map((item) => (
              <tr key={item._id} className="border-b border-gray-200">
                <td className="py-3 px-4 text-center">{item.date}</td>
                <td className="py-3 px-4 text-center">{item.name}</td>
                <td className="py-3 px-4 text-center"> {item.price}</td>
                <td className="py-3 px-4 text-center">{item.email}</td>
                <td className="py-3 px-4 text-center">{item.enrolledStudent}</td>
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
