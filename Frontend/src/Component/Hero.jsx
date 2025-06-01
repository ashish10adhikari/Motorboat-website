import React from "react";
import hero from "../assets/bg.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import herobg from '../assets/herobg.png';

const Hero = () => {

  const navigate = useNavigate();
  return (
    <div
      style={{ backgroundImage: `url(${hero})` }}
      className="bg-cover bg-center h-[75vh] flex flex-col items-center justify-center text-white font-bold relative"
    >
      <div className="text-center top-50 left-40">
        <h2 className="text-2xl">WELCOME TO</h2>
        <h1 className="text-5xl font-secondary">Aayushma River Adventure</h1>
        <div className="gap-5 flex justify-start mt-5">
          <button onClick={()=>navigate('/package')} className="bg-cyan-700 p-3 border-2 text-white border-white hover:bg-white hover:text-cyan-700 hover:border-cyan-700 hover:scale-105 transition-all duration-500">
            View Packages
          </button>
          <button onClick={()=>navigate('/package')} className="text-white p-3 border-2 border-white hover:border-cyan-700 hover:scale-105 transition-all duration-500 flex justify-center items-center gap-2">
            Book Now <FaArrowRightLong />
          </button>
        </div>
      </div>
      <img src={herobg} alt="" className="absolute bottom-[-25px]"/>
    </div>
  );
};

export default Hero;
