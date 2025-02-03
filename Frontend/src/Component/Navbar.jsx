import React from "react";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4">
      <div className="grid grid-cols-1 md:grid-cols-3 col-span-3 md:flex-wrap">
        <div className="col-span-2 flex justify-center md:justify-end items-center md:py-5 md:pr-2">
          <img src={logo} alt="Logo" className="md:w-40 md:h-20 w-20 h-10"/>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold font-primary text-slate-800">
            Aayushma Motorboat  
          </h1>
        </div>
        <h2 className="text-gray-600 text-sm font-medium col-span-1 flex items-center justify-center md:justify-start md:pt-5">
          Conquering the waves
        </h2>
      </div>
      <div className="grid col-span-1">
        <ul className="flex justify-center gap-5 md:p-5 items-center">
          <li>
            <FontAwesomeIcon icon={faFacebook} style={{ color: "#1742ee" }} />
          </li>
          <li>
            <FontAwesomeIcon icon={faPhone} />
          </li>
          <li>
            <FontAwesomeIcon icon={faTiktok} style={{ color: "#080a0d" }} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
