import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { TbLanguage } from "react-icons/tb";
import { AuthContext } from "../../Providers/AuthProviders";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  const navOptions = (
    <>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-300" : "default")}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-300" : "default")}
          to="/instructors"
        >
          Instructors
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-300" : "default")}
          to="/classes"
        >
          Classes
        </NavLink>
      </li>
      {
        user && <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-300" : "default")}
          to="/dashboard"
        >
          Dashboard
        </NavLink>
      </li>
      }
      {user && (
        <img
          title={user?.displayName}
          src={`${user?.photoURL}`}
          className="w-10 h-10 rounded-full"
          alt=""
        />
      )}
      {user ? (
        <button className="btn btn-sm mx-2" onClick={handleLogOut}>
          Logout
        </button> 
      ) : (
        <Link to="/login">
          <button className="btn  btn-sm ">Login</button>
        </Link> 
      )}
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

          <Link to="/" className="flex items-center gap-2 normal-case text-xl">
            {" "}
            <TbLanguage className="text-2xl" /> FluentFun
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navOptions}</ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
