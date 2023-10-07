import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        // toast.success("Successfully logout");
        // toast.warning("s");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="navbar py-3 px-0">
      <div className="md:navbar-start  w-full flex justify-between items-center">
        <div className="flex gap-2 md:gap-2 lg:gap-5 items-center">
          <div>
            <h1 className="text-lg md:text-xl lg:text-2xl text-primary-color font-semibold ">
              EventChamp
            </h1>
          </div>
        </div>

        <div className="dropdown ">
          <label
            tabIndex={0}
            className="btn btn-ghost md:hidden  focus:text-primary-color"
          >
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
            className="menu menu-compact dropdown-content -left-14 mt-3 p-2 shadow bg-base-100 rounded-box w-24 mr-10 z-40"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-end hidden md:flex ">
        <ul className="flex gap-6 items-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-primary-color underline font-semibold text-lg"
                  : "font-semibold text-lg"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-primary-color underline font-semibold text-lg"
                  : "font-semibold text-lg"
              }
            >
              Contact
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/signup"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-primary-color underline font-semibold text-lg"
                  : "font-semibold text-lg"
              }
            >
              Sign up
            </NavLink>
          </li>
          <li onClick={handleLogout}>logout</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
