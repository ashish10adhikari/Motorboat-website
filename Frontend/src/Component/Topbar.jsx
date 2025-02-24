import React from "react";
import logo from "../assets/logo.png";

const Topbar = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-5 w-full">
      <img src={logo} alt="Logo" className="md:w-44 md:h-20 w-20 h-10" />
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold font-primary text-slate-800">
        Aayushma River Adventure
      </h1>
      <h2 className="text-gray-600 text-sm font-medium flex justify-center md:justify-start md:pt-5 md:pl-2">
        Conquering the waves
      </h2>
    </div>
  );
};

export default Topbar;
