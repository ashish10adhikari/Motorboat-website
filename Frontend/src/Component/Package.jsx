import React from "react";
import PackageSlider from "./PackageSlider";
import { useNavigate } from "react-router-dom";
import background from "../assets/background1.png";

const Package = () => {
  const navigate = useNavigate();

  return (
    <div
      className="m-auto flex items-center justify-center flex-col min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="text-center bg-white">
        <h4 className="text-lg text-cyan-700 font-semibold uppercase">
          Our Packages
        </h4>
        <h2 className="text-4xl font-bold text-slate-800 pb-2">
          Exciting <span className="text-cyan-700 uppercase">Experiences</span>{" "}
          at Unmatched Prices
        </h2>
      </div>
      <div className="flex justify-center items-start bg-white">
        <div className="flex flex-col items-start justify-start ml-32 m-auto">
          <p className=" text-lg text-gray-700 font-serif">
            Ready to set sail? Browse our packages below and find the perfect
            trip for your next river adventure.
          </p>
          <ul className="text-gray-600 mt-4 list-decimal list-inside ">
            <li>Experienced crew and guides</li>
            <li>Customizable packages for all age groups</li>
            <li>Transparent pricing — no hidden costs</li>
          </ul>
          <div className="flex justify-center items-center w-full pt-5">
            <button
              onClick={() => navigate("/package")}
              className="bg-cyan-700 p-3 border-2 text-white border-white hover:bg-white hover:text-cyan-700 hover:border-cyan-700 hover:scale-105 transition-all duration-500"
            >
              View All Packages
            </button>
          </div>
        </div>

        <div className="px-12 w-2xl text-center">
          <PackageSlider />
        </div>
      </div>
    </div>
  );
};

export default Package;
