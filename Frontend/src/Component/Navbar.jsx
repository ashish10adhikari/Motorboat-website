import React from "react";
import { NavLink } from "react-router-dom";
import Topbar from "./Topbar";

const Navbar = () => {
  return (
    <>
      <Topbar/>

      <div className=" w-full bg-slate-800 text-white text-center py-2 sticky top-30 z-50">
        <ul className="flex justify-center gap-2 h-12 items-center">
          <span className="border-1 h-6"></span>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "bg-cyan-700 font-secondary font-bold p-5 transition-all ease-in-out duration-500 "
                : "hover:bg-cyan-700 font-secondary font-bold p-5 transition-all ease-in-out duration-500"
            }
          >
            HOME
          </NavLink>
          <span className="border-1 h-6"></span>
          <NavLink
            to="/package"
            className={({ isActive }) =>
              isActive
                ? "bg-cyan-700 font-secondary font-bold p-5 transition-all ease-in-out duration-500 "
                : "hover:bg-cyan-700 font-secondary font-bold p-5 transition-all ease-in-out duration-500"
            }
          >
            PACKAGE
          </NavLink>
          <span className="border-1 h-6"></span>
          <NavLink
            to="/ourboats"
            className={({ isActive }) =>
              isActive
                ? "bg-cyan-700 font-secondary font-bold p-5 transition-all ease-in-out duration-500 "
                : "hover:bg-cyan-700 font-secondary font-bold p-5 transition-all ease-in-out duration-500"
            }
          >
            OUR BOATS
          </NavLink>
          <span className="border-1 h-6"></span>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive
                ? "bg-cyan-700 font-secondary font-bold p-5 transition-all ease-in-out duration-500 "
                : "hover:bg-cyan-700 font-secondary font-bold p-5 transition-all ease-in-out duration-500"
            }
          >
            GALLERY
          </NavLink>
          <span className="border-1 h-6"></span>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "bg-cyan-700 font-secondary font-bold p-5 transition-all ease-in-out duration-500 "
                : "hover:bg-cyan-700 font-secondary font-bold p-5 transition-all ease-in-out duration-500"
            }
          >
            ABOUT US
          </NavLink>
          <span className="border-1 h-6"></span>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "bg-cyan-700 font-secondary font-bold p-5 transition-all ease-in-out duration-500 "
                : "hover:bg-cyan-700 font-secondary font-bold p-5 transition-all ease-in-out duration-500"
            }
          >
            CONTACT US
          </NavLink>
          <span className="border-1 h-6"></span>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
