import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineBars } from 'react-icons/ai';
import useRole from '../../Hooks/useRole';
import { Fade } from 'react-awesome-reveal';
import {  FaHome, FaUsers, FaCog, FaPlus, FaChalkboardTeacher, FaListAlt, FaCheckSquare, FaHistory } from 'react-icons/fa';
import { AuthContext } from '../../Providers/AuthProviders';
import { GrUserAdmin } from "react-icons/gr";
const Sidebar = () => {
  const [isActive, setActive] = useState(false);
  const { data } = useRole();
  const {user} = useContext(AuthContext)

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  const admin = (
    <>
      <Fade cascade direction="right">
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-center'>Admin Panel</h1>
          <p className='flex items-center gap-2'><GrUserAdmin className='text-red-500'/> {user.displayName}</p>
          
        </div>
        <div className='divider'></div>
     <ul className='mx-auto ml-12 my-5 flex flex-col gap-5'>
     <li>
          <NavLink
            to="/dashboard/manageUsers"
            className={({ isActive }) => (isActive ? 'text-white' : 'default')}
          >
           <div className='flex items-center gap-2'>
           <FaUsers className='icon' />
            <span>Manage Users</span>
           </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/manageClasses"
            className={({ isActive }) => (isActive ? 'text-white' : 'default')}
          >
           <div className='flex items-center gap-2'>
           <FaCog className='icon' />
            <span>Manage Classes</span>
           </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'text-white' : 'default')}
          >
            <div className='flex items-center gap-2'>
            <FaHome className='icon' />
            <span>Back to Home</span>
            </div>
          </NavLink>
        </li>
     </ul>
      </Fade>
    </>
  );

  const instructor = (
    <>
      <Fade cascade direction="right">
        <div className='flex flex-col justify-center  items-center'>
          <h1 className='text-center'>Instructors Panel</h1>
          <p>Welcome {user.displayName}!</p>
        </div>
        <div className='divider'></div>
        <ul className='mx-auto ml-12 my-5 flex flex-col gap-5'>
        <li>
          <NavLink
            to="/dashboard/addaclass"
            className={({ isActive }) => (isActive ? 'text-white' : 'default')}
          >
         <div className='flex items-center gap-2'>
         <FaPlus className='icon' />
            <span>Add A Class</span>
         </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/myclass"
            className={({ isActive }) => (isActive ? 'text-white' : 'default')}
          >
           <div className='flex items-center gap-2'>
           <FaChalkboardTeacher className='icon' />
            <span>My Classes</span>
           </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'text-white' : 'default')}
          >
            <div className='flex items-center gap-2'>
            <FaHome className='icon' />
            <span>Back to Home</span>
            </div>
          </NavLink>
        </li>
        </ul>
      </Fade>
    </>
  );

  const student = (
    <>
      <Fade cascade direction="right">
        <div className='flex flex-col items-center'>
          <h1 className='text-center font-bold'>Students Dashboard</h1>
          <p className='mt-5'>Welcome {user.displayName}!</p>
        </div>
        <div className='divider'></div>
       <ul className='mx-auto ml-12 my-5 flex flex-col gap-5'>
       <li>
          <NavLink
            to="/dashboard/myselectedclass"
            className={({ isActive }) => (isActive ? 'text-white' : 'default')}
          >
            <div className='flex items-center gap-2'>
            <FaListAlt className='icon' />
            <span>Selected Classes</span>
            </div>
        
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/myenrolledclass"
            className={({ isActive }) => (isActive ? 'text-white' : 'default')}
          >
             <div className='flex items-center gap-2'>    <FaCheckSquare className='icon' />
            <span>Enrolled Classes</span></div>
        
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/paymentHistory"
            className={({ isActive }) => (isActive ? 'text-white' : 'default')}
          >
              <div className='flex items-center gap-2'> 
            <FaHistory className='icon' />
            <span>Payment History</span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'text-white' : 'default')}
          >
            <div className='flex items-center gap-2'>
            <FaHome className='icon' />
            <span>Back to Home</span>
            </div>
          </NavLink>
        </li>
       </ul>
      </Fade>
    </>
  );

  return (
    <>
      {/* Small Screen Navbar */}
      <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
        <div>
          <div className='block cursor-pointer p-4 font-bold'></div>
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
        >
          <AiOutlineBars className='h-5 w-5' />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-blue-200 md:bg-blue-300 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive ? '-translate-x-full' : 'md:translate-x-0'
        } transition duration-200 ease-in-out`}
      >
        <ul>
          {data.role === 'admin' && admin}
          {data.role === 'instructor' && instructor}
          {data.role === 'student' && student}
        </ul>
       
      </div>
    </>
  );
};

export default Sidebar;
