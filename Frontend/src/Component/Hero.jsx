import React from "react";
import hero from "../assets/bg.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
const Hero = () => {
  return (
    <div
      style={{ backgroundImage: `url(${hero})` }}
      className="bg-cover bg-center h-[75vh] flex flex-col items-center justify-center text-white font-bold"
    >
      <div className="text-center top-50 left-40">
        <h2 className="text-2xl">WELCOME TO</h2>
        <h1 className="text-5xl font-secondary">Aayushma River Adventure</h1>
        <div className="gap-5 flex justify-start mt-5">
          <button className="bg-cyan-700 p-3 border-2 text-white border-white hover:bg-white hover:text-cyan-700 hover:border-cyan-700 hover:scale-105 transition-all duration-500">
            View Packages
          </button>
          <button className="text-white p-3 border-2 border-white hover:border-cyan-700 hover:scale-105 transition-all duration-500 flex justify-center items-center gap-2">
            Book Now <FaArrowRightLong />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
