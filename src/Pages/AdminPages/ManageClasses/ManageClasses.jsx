import React from 'react';

const ManageClasses = () => {
    return (
        <div>
            Manage Classes
        </div>
    );
};

export default ManageClasses;

// import React, { useEffect, useState } from 'react';

// const ManageClasses = () => {
//   const [classes, setClasses] = useState([]);

//   useEffect(() => {
//     fetchClasses();
//   }, []);

//   const fetchClasses = async () => {
//     try {
//       const response = await fetch('/data.json'); // Fetch data from JSON file
//       const data = await response.json();
//       setClasses(data);
//     } catch (error) {
//       console.error('Error fetching classes:', error);
//     }
//   };

//   const handleApprove = async (classId) => {
//     try {
//       // Implement the logic to update the status to 'approved' in the JSON data
//       // You can use the classId to identify the class in the JSON data array
//       // After updating the JSON data, you can call fetchClasses() to refresh the classes
//       fetchClasses();
//     } catch (error) {
//       console.error('Error approving class:', error);
//     }
//   };

//   const handleDeny = async (classId) => {
//     try {
//       // Implement the logic to update the status to 'denied' in the JSON data
//       // You can use the classId to identify the class in the JSON data array
//       // After updating the JSON data, you can call fetchClasses() to refresh the classes
//       fetchClasses();
//     } catch (error) {
//       console.error('Error denying class:', error);
//     }
//   };

//   const handleSendFeedback = (classId) => {
//     // Implement the logic to open the modal and handle sending feedback
//   };

//   return (
//     <div className="bg-white shadow-md rounded-md p-4 flex flex-col justify-between">
//       <div>
//         <img
//           src={image}
//           alt={className}
//           className="w-full h-40 object-cover mb-4 rounded-md"
//         />
//         <h2 className="text-lg font-semibold mb-2">{className}</h2>
//         <p className="mb-2">
//           <span className="font-semibold">Instructor:</span> {instructorName}
//         </p>
//         <p className="mb-2">
//           <span className="font-semibold">Instructor Email:</span> {instructorEmail}
//         </p>
//         <p className="mb-2">
//           <span className="font-semibold">Available Seats:</span> {availableSeats}
//         </p>
//         <p className="mb-2">
//           <span className="font-semibold">Price:</span> ${price}
//         </p>
//         <p className="mb-2">
//           <span className="font-semibold">Status:</span> {status}
//         </p>
//       </div>
//       <div className="mt-4">
//         {status === 'pending' && (
//           <div>
//             <button
//               className="btn btn-primary mr-2"
//               onClick={() => onApprove(classData.id)}
//             >
//               Approve
//             </button>
//             <button className="btn btn-error" onClick={() => onDeny(classData.id)}>
//               Deny
//             </button>
//           </div>
//         )}
//         {status === 'approved' && (
//           <button className="btn" onClick={() => onSendFeedback(classData.id)}>
//             Send Feedback
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ManageClasses;
