import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { FaCircle, FaDollarSign, FaMoneyBill } from 'react-icons/fa';
import { MdAttachMoney, MdEmail, MdPeople, MdPerson, MdPersonPinCircle } from 'react-icons/md';
import useRole from '../../Hooks/useRole';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';

const ApprovedClasses = () => {
  const [classData, setClassData] = useState([]);
  const {user} = useContext(AuthContext)
 const {data} = useRole()
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/approvedClasses');
      setClassData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelect = (data) => {
    if (user && user.email) {
      const cartItem = {
        classId: data._id,
        name: data.name,
        classImg: data.classImg,
        price: data.price,
        seats: data.seats,
        email: user.email,
        payment: false,
      };
  
      axios.post("http://localhost:5000/classesCarts", cartItem)
        .then((response) => {
          console.log(response.data);
          if (response.data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Class successfully added to your Class Page",
              showConfirmButton: false,
              timer: 1500,
            });
          } else if (response.data.message) {
            Swal.fire({
              position: "center",
              icon: "error",
              title: "Class already added",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      Swal.fire({
        title: "Please login to select the class.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  
  
  

  return (
    <>
    <div className="  md:p-20">
      <h1 className="text-3xl font-serif font-bold mb-4">Our Classes</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {classData.map((classObj) => (
          <div key={classObj._id} className="card shadow-lg flex flex-col justify-between">
            <img src={classObj.classImg} alt={classObj.name} className="w-full h-32 object-cover mb-4" />
            <div className="card-body">
              <h2 className="text-xl font-bold ">
                <FaCircle className="inline text-green-500 mr-2" /> {classObj.name}
              </h2>
              <p className="">
                <MdPerson className="inline text-blue-500 mr-2" /> Instructor: {classObj.instructorName}
              </p>
              <p className="">
                <MdEmail className="inline text-blue-500 mr-2" /> Email: {classObj.email}
              </p>
              <p className="">
                <MdPeople className="inline text-blue-500 mr-2" /> Available seats: {classObj.seats}
              </p>
              <p className="">
                <MdPeople className="inline text-blue-400 mr-2" /> Enrolled Student: {classObj.enrolledStudent}
              </p>
            </div>
            <div className="flex justify-between items-center p-4">
              <p className="mb-2">
                <FaDollarSign className="inline text-blue-500 mr-2" /> Price: ${classObj.price}
              </p>
             { data.role === 'student' && <button className="btn btn-sm bg-blue-500 text-white hover:bg-blue-700" onClick={() => handleSelect(classObj)}>
                Select
              </button> }
             { data.role === 'admin' && <button disabled className="btn btn-sm btn-accent">Select</button> }
             { data.role === 'instructor' && <button disabled className="btn btn-sm btn-accent">
                Select</button> }
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default ApprovedClasses;
