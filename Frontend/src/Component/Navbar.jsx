import React from "react";
import { NavLink } from "react-router-dom";
import Topbar from "./Topbar";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check on mount
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Topbar />

      <div
        className={`w-full text-white text-center py-2 sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-800/70 backdrop-blur-md shadow-md border-b border-slate-600/30"
            : " bg-slate-800 " 
        }`}
      >
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