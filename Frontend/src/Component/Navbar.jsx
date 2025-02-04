import React from "react";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div className="grid grid-cols-1 md:grid-cols-3 col-span-3 md:flex-wrap">
          <div className="col-span-2 flex justify-center md:justify-end items-center md:py-5 md:pr-2">
            <img src={logo} alt="Logo" className="md:w-44 md:h-20 w-20 h-10" />
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold font-primary text-slate-800 whitespace-nowrap">
              Aayushma Motorboat
            </h1>
          </div>
          <h2 className="text-gray-600 text-sm font-medium col-span-1 flex items-center justify-center md:justify-start md:pt-5">
            Conquering the waves
          </h2>
        </div>
        <div className="grid col-span-1">
          <div className="flex justify-center items-center gap-1 py-2">
            <FontAwesomeIcon icon={faPhone} className="text-gray-600"/>
          <span className="text-gray-600 text-sm font-medium"><strong className="pr-2">Phone:</strong>+977 9800000000</span>
          </div>
          
        </div>
      </div>
      <div className=" w-full bg-slate-800 text-white text-center py-2">
        <ul className="flex justify-center gap-5 h-14 items-center">
          <span className="border-1 h-6"></span>
          <a
            href="#"
            className="hover:bg-cyan-700 font-secondary font-bold py-5 px-6 transition-all ease-in-out duration-300"
          >
            HOME
          </a>
          <span className="border-1 h-6"></span>
          <a
            href="#"
            className="hover:bg-cyan-700 font-secondary font-bold py-5 px-6 transition-all ease-in-out duration-300"
          >
            PACKAGE
          </a>
          <span className="border-1 h-6"></span>
          <a
            href="#"
            className="hover:bg-cyan-700 font-secondary font-bold py-5 px-6 transition-all ease-in-out duration-300"
          >
            OUR BOATS
          </a>
          <span className="border-1 h-6"></span>
          <a
            href="#"
            className="hover:bg-cyan-700 font-secondary font-bold py-5 px-6 transition-all ease-in-out duration-300"
          >
            GALLERY
          </a>
          <span className="border-1 h-6"></span>
          <a
            href="#"
            className="hover:bg-cyan-700 font-secondary font-bold py-5 px-6 transition-all ease-in-out duration-300"
          >
            ABOUT US
          </a>
          <span className="border-1 h-6"></span>
          <a
            href="#"
            className="hover:bg-cyan-700 font-secondary font-bold py-5 px-6 transition-all ease-in-out duration-300"
          >
            CONTACT US
          </a>
          <span className="border-1 h-6"></span>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
