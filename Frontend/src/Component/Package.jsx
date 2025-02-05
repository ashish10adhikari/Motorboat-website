import React from "react";
import safety from "../assets/safety.jpg";
import bg from "../assets/bg.jpg";

const Package = () => {
  return (
    <div className="py-16 px-5 bg-gray-100" style={{
      backgroundImage: `url(${bg})`,
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      <div className="text-center mb-12">
        <h4 className="text-lg text-white font-semibold uppercase">
          Our Packages
        </h4>
        <h2 className="text-4xl font-bold text-white">
          Exciting Experiences at Unmatched Prices
        </h2>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-8 px-12 w-full text-center ">
        <div className="p-5 shadow-lg rounded-lg w-full md:w-1/3 bg-white">
          <img
            src={safety}
            alt="Short Package"
            className="h-64 w-full rounded-md object-cover"
          />
          <hr className="border-1 mt-5 mx-10 border-gray-400" />
          <h2 className="text-2xl font-bold text-slate-800 mt-4 text-center">
            Short Package
          </h2>
          <h3 className="p-5 text-center text-3xl font-bold">Rs 250.</h3>
          <p className="text-gray-700 mt-2 pb-5">
            Enjoy a relaxing day on the river with our most popular package. You
            will take you on a scenic tour of the Narayani River, where you can
            enjoy the beauty of the surrounding.
          </p>
        </div>

        <div className="p-5 shadow-lg rounded-lg w-full md:w-1/3 bg-white">
          <img
            src={safety}
            alt="Long Package"
            className="h-64 w-full rounded-md object-cover"
          />
          <hr className="border-1 mt-5 mx-10 border-gray-400" />
          <h2 className="text-2xl font-bold text-slate-800 mt-4 text-center">
            Long Package
          </h2>
          <h3 className="p-5 text-center text-3xl font-bold">Rs 500.</h3>
          <p className="text-gray-700 mt-2 pb-5">
            Experience the thrill of white-water rafting with our adrenaline
            pumping package. Where you'll navigate through rapids and enjoy the
            rush of the water.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Package;
