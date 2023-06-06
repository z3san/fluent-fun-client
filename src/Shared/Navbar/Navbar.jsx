import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const navOptions = (
    <>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? 'text-blue-300' : 'default')}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? 'text-blue-300' : 'default')}
          to="/instructors"
        >
          Instructors
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? 'text-blue-300' : 'default')}
          to="/classes"
        >
          Classes
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? 'text-blue-300' : 'default')}
          to="/dashboard"
        >
          Dashboard
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar fixed z-10 bg-gray-700 bg-opacity-20 text-white max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown relative">
            <button
              tabIndex={0}
              className="btn btn-ghost lg:hidden focus:outline-none"
              onClick={handleDropdownToggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 transform transition-transform duration-300 ${
                  isDropdownOpen ? 'rotate-90' : 'rotate-0'
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul
              className={`menu menu-compact dropdown-content mt-3 p-2 text-black shadow bg-base-100 rounded-box w-52 transform transition-opacity duration-300 ${
                isDropdownOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-95'
              }`}
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">FluentFun</a>
        </div>

        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navOptions}</ul>
          </div>
          <a className="btn btn-sm">Login</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
