

import { FaCircle } from 'react-icons/fa';
import { MdPendingActions } from 'react-icons/md';

import useInstructorClass from '../../../Hooks/useInstructorClass';

const MyClass = () => {
  const [data] = useInstructorClass();
  console.log(data);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-4">Manage Classes</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.map((classObj) => (
              <div key={classObj._id} className="bg-white p-4 shadow-md rounded-lg">
                <img src={classObj.classImg} alt={classObj.name} className="w-full h-32 object-cover mb-4" />
                <h2 className="text-xl font-bold mb-2">{classObj.name}</h2>
                <p className="mb-2">Instructor: {classObj.instructorName}</p>
                <p className="mb-2">Email: {classObj.email}</p>
                <p className="mb-2">Available seats: {classObj.seats}</p>
                <p className="mb-2">Enrolled Student: {classObj.enrolledStudent}</p>
                <p className="mb-2 flex items-center">
                  Status:
                  {classObj.status === 'denied' && (
                    <>
                      <FaCircle className="text-red-500 ml-2 mr-1" />
                      Denied
                    </>
                  )}
                  {classObj.status === 'approved' && (
                    <>
                      <FaCircle className="text-green-500 ml-2 mr-1" />
                      Approved
                    </>
                  )}
                  {classObj.status === 'pending' && (
                    <>
                      <MdPendingActions className="text-yellow-500 ml-2 mr-1 text-xl" />
                      Pending
                    </>
                  )}
                </p>
               
               <p className="mb-2">Price: ${classObj.price}</p>
                <button className=' btn bg-blue-500 flex flex-1 text-white hover:bg-blue-700 btn-sm'>Update</button>
               </div>
              
            ))}
          </div>
        </div>
        <div className="md:col-span-1">
          <h2 className="text-3xl text-center font-bold mb-2">Feedback Section</h2>
          <div>
            {data.map((classObj) => (
              <div key={classObj?._id} className="bg-white p-5 mb-10 text-center shadow-md rounded-lg">
                {classObj?.feedback && (
                  <div>
                    <p>
                      <span className="font-bold">Class Name:</span> {classObj?.name}
                    </p>
                    <p>
                      <span className="font-bold">Feedback: </span> {classObj?.feedback}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyClass;
