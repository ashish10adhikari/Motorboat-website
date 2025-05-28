import React from "react";
import safety from "../assets/safety.jpg";
import bg from "../assets/bg.jpg";
import PackageSlider from "./PackageSlider";

const Package = () => {
  return (
    <div
      className="py-6 px-5 bg-gray-100"
      // style={{
      //   backgroundImage: `url(${bg})`,
      //   backgroundAttachment: "fixed",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      <div className="text-center mb-12">
        <h4 className="text-lg text-blue-600 font-semibold uppercase">
          Our Packages
        </h4>
        <h2 className="text-4xl font-bold ">
          Exciting Experiences at Unmatched Prices
        </h2>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-8 px-12 w-1/2 text-center">
       <PackageSlider/>
      </div>
    </div>
  );
};

export default Package;
