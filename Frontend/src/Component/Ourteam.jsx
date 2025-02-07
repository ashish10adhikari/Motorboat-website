import React from "react";
import experience from "../assets/experience.jpg";

const Ourteam = () => {
  return (
    <div className="text-center p-10">
      <h4 className="text-lg text-blue-600 font-semibold uppercase">
        Meet our team
      </h4>
      <div className="p-10 flex flex-row justify-center gap-5">
        <div className="w-1/4 p-4 text-center flex flex-col items-center shadow-lg rounded-xl">
          <img src={experience} alt="" className="rounded-full w-40 h-40" />
          <hr className="mt-5 border w-40 border-gray-500"/>
          <h2 className="pt-5 font-bold text-lg">CEO</h2>
          <h1 className="pt-2 pb-5 font-bold text-xl">Vijay Chandra Adhikari</h1>
        </div>
        <div className="w-1/4 p-4 text-center flex flex-col items-center shadow-lg rounded-xl">
          <img src={experience} alt="" className="rounded-full w-40 h-40" />
          <hr className="mt-5 border w-40 border-gray-500"/>
          <h2 className="pt-5 font-bold text-lg">CEO</h2>
          <h1 className="pt-2 pb-5 font-bold text-xl">Vijay Chandra Adhikari</h1>
        </div>
        <div className="w-1/4 p-4 text-center flex flex-col items-center shadow-lg rounded-xl">
          <img src={experience} alt="" className="rounded-full w-40 h-40" />
          <hr className="mt-5 border w-40 border-gray-500"/>
          <h2 className="pt-5 font-bold text-lg">CEO</h2>
          <h1 className="pt-2 pb-5 font-bold text-xl">Vijay Chandra Adhikari</h1>
        </div>
      </div>
    </div>
  );
};

export default Ourteam;
