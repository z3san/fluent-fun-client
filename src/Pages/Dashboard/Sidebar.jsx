import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineBars } from 'react-icons/ai';
import useRole from '../../Hooks/useRole';

const Sidebar = () => {
  const [isActive, setActive] = useState(false);
  const {data} = useRole()

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  const admin = (
    <>
      <li>
        <NavLink
          to="/dashboard/manageUsers"
          className={({ isActive }) => (isActive ? 'text-white' : 'default')}
        >
          Manage Users
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/manageClasses"
          className={({ isActive }) => (isActive ? 'text-white' : 'default')}
        >
          Manage Classes
        </NavLink>
      </li>
    </>
  );

  const instructor = (
    <>
      <li>
        <NavLink
          to="/dashboard/addaclass"
          className={({ isActive }) => (isActive ? 'text-white' : 'default')}
        >
          Add A Class
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/myclass"
          className={({ isActive }) => (isActive ? 'text-white' : 'default')}
        >
          My Classes
        </NavLink>
      </li>
    </>
  );

  const student = (
    <>
      <li>
        <NavLink
          to="/dashboard/myselectedclass"
          className={({ isActive }) => (isActive ? 'text-white' : 'default')}
        >
          Add A Class
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/myenrolledclass"
          className={({ isActive }) => (isActive ? 'text-white' : 'default')}
        >
          My Classes
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold"></div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
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
          {data.role === 'instructor' &&  instructor}
          { data.role === 'student' && student }
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
