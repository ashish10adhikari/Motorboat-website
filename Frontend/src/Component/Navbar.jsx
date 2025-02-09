import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center p-5">
        <img src={logo} alt="Logo" className="md:w-44 md:h-20 w-20 h-10" />
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold font-primary text-slate-800">
          Aayushma River Adventure
        </h1>
        <h2 className="text-gray-600 text-sm font-medium flex justify-center md:justify-start md:pt-5 md:pl-2">
          Conquering the waves
        </h2>
      </div>

      <div className=" w-full bg-slate-800 text-white text-center py-2">
        <ul className="flex justify-center gap-5 h-14 items-center">
          <span className="border-1 h-6"></span>
          <Link to='/'>
            <li className="hover:bg-cyan-700 font-secondary font-bold p-5 transition-all ease-in-out duration-500">
              HOME
            </li>
          </Link>
          <span className="border-1 h-6"></span>
          <Link to='/package'>
            <li className="hover:bg-cyan-700 font-secondary font-bold p-5 transition-all ease-in-out duration-500">
              PACKAGE
            </li>
          </Link>
          <span className="border-1 h-6"></span>
          <Link to='/ourboats'>
            <li className="hover:bg-cyan-700 font-secondary font-bold p-5 transition-all ease-in-out duration-500">
              OUR BOATS
            </li>
          </Link>
          <span className="border-1 h-6"></span>
          <Link to='/gallery'>
            <li className="hover:bg-cyan-700 font-secondary font-bold p-5 transition-all ease-in-out duration-500">
              GALLERY
            </li>
          </Link>
          <span className="border-1 h-6"></span>
          <Link to='/about'>
            <li className="hover:bg-cyan-700 font-secondary font-bold p-5 transition-all ease-in-out duration-500">
              ABOUT US
            </li>
          </Link>
          <span className="border-1 h-6"></span>
          <Link to='/contact'>
            <li className="hover:bg-cyan-700 font-secondary font-bold p-5 transition-all ease-in-out duration-500">
              CONTACT US
            </li>
          </Link>
          <span className="border-1 h-6"></span>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
