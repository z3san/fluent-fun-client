import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { TbLanguage } from "react-icons/tb";

const Navbar = () => {
     const navOptions = (
        <>
          <li><NavLink className={({ isActive }) => (isActive ? 'text-blue-300' : 'default')}  to="/">Home</NavLink></li>
          <li><NavLink className={({ isActive }) => (isActive ? 'text-blue-300' : 'default')}  to="/instructors">Instructors</NavLink></li>
          <li><NavLink className={({ isActive }) => (isActive ? 'text-blue-300' : 'default')}  to="/classes">Classes</NavLink></li>
          <li><NavLink className={({ isActive }) => (isActive ? 'text-blue-300' : 'default')}  to="/dashboard">Dashboard</NavLink></li>
          
        </>
      );
          

    return (
        <>
        <div className="navbar fixed z-10 bg-gray-700 bg-opacity-20 text-white max-w-screen-xl">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 text-black shadow bg-base-100 rounded-box w-52"
              >
                  {navOptions}
              </ul>
            </div>

            <Link to='/'  className="flex items-center gap-2 normal-case text-xl"> <TbLanguage className='text-2xl'/> FluentFun</Link>
          </div>
        
          <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
  
                  {navOptions}
            </ul>
          </div>
            <Link to='/login' className="btn btn-sm">Login</Link>
          </div>
        </div>
      </>
    );
};

export default Navbar;