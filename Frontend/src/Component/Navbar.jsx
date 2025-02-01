import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div>
      <div className="flex items-center p-5">
        <div className="flex items-center justify-center">
          <img src={logo} alt="Logo" className="w-40 h-20"/>
          <h1 className="text-2xl font-bold">Aayushma Motorboat</h1>
        </div>
        <h2>Challenge the nature</h2>
      </div>
    </div>
  );
};

export default Navbar;
