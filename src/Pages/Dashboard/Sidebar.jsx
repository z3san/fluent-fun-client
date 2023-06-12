import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AiOutlineBars } from 'react-icons/ai';
import useRole from '../../Hooks/useRole';
import { Fade } from 'react-awesome-reveal';
import { FaArrowLeft, FaHome, FaUsers, FaCog, FaPlus, FaChalkboardTeacher, FaListAlt, FaCheckSquare } from 'react-icons/fa';

const Sidebar = () => {
  const [isActive, setActive] = useState(false);
  const { data } = useRole();

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  const admin = (
    <>
      <Fade cascade direction="right">
        <h1 className='text-center'>Admin Panel</h1>
        <Link to='/'>
          <FaArrowLeft className='text-white' />
        </Link>
        <div className='divider'></div>
        <li>
          <NavLink
            to="/dashboard/manageUsers"
            className={({ isActive }) => (isActive ? 'text-white' : 'default')}
          >
            <FaUsers className='icon' />
            Manage Users
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/manageClasses"
            className={({ isActive }) => (isActive ? 'text-white' : 'default')}
          >
            <FaCog className='icon' />
            Manage Classes
          </NavLink>
        </li>
      </Fade>
    </>
  );

  const instructor = (
    <>
      <Fade cascade direction="right">
        <h1 className='text-center'>Instructors Panel</h1>
        <div className='divider'></div>
        <li>
          <NavLink
            to="/dashboard/addaclass"
            className={({ isActive }) => (isActive ? 'text-white' : 'default')}
          >
            <FaPlus className='icon' />
            Add A Class
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/myclass"
            className={({ isActive }) => (isActive ? 'text-white' : 'default')}
          >
            <FaChalkboardTeacher className='icon' />
            My Classes
          </NavLink>
        </li>
      </Fade>
    </>
  );

  const student = (
    <>
      <Fade cascade direction="right">
        <h1 className='text-center'>Students Dashboard</h1>
        <div className='divider'></div>
        <li>
          <NavLink
            to="/dashboard/myselectedclass"
            className={({ isActive }) => (isActive ? 'text-white' : 'default')}
          >
            <FaListAlt className='icon' />
            Selected Classes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/myenrolledclass"
            className={({ isActive }) => (isActive ? 'text-white' : 'default')}
          >
            <FaCheckSquare className='icon' />
            Enrolled Classes
          </NavLink>
        </li>
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
        <div>
          <Link className='flex items-center text-white gap-3 justify-center' to='/'>
            <FaHome className='icon' />
            Back To Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
