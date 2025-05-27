import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RiShieldStarLine } from "react-icons/ri";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCompass } from "react-icons/fa";
import { IoBoatOutline } from "react-icons/io5";
import {
  faShieldAlt,
  faAnchor,
  faCompass,
} from "@fortawesome/free-solid-svg-icons";
import comfort from "../assets/comfort.jpg";
import safety from "../assets/safety.jpg";
import experience from "../assets/experience.jpg";

const WhyChooseUs = () => {
  return (
    <div className=" py-12 px-5">
      <div className="text-center mb-8">
        <h4 className="text-lg text-blue-600 font-semibold uppercase">
          Why Choose Us
        </h4>
        <h2 className="text-4xl font-bold text-slate-800">
          Set Sail with Confidence
        </h2>
      </div>

      <div className="flex flex-wrap justify-center items-center text-gray-700 gap-5">
        {/* Feature 1 */}
        <div className="w-full sm:w-[48%] lg:w-[22%]">
          <div className=" p-6 text-center flex justify-center items-center flex-col ">
            <RiShieldStarLine className="text-cyan-700 text-5xl mb-4" />
            <h3 className="text-2xl mb-1 font-secondary font-bold">
              Safety First
            </h3>
            <p className="text-cyan-700">Top priority on all trips.</p>
          </div>
          {/* <div className="overflow-hidden">
            <img
              src={safety}
              alt=""
              className="h-96 w-full object-cover transition-transform transform hover:scale-105 ease-in-out duration-500 "
            />
          </div> */}
        </div>

        {/* Feature 2 */}
        <div className="w-full sm:w-[48%] lg:w-[22%]">
          <div className=" p-6 text-center flex justify-center items-center flex-col">
            <AiOutlineLike className="text-cyan-700 text-5xl mb-4" />
            <h3 className="text-2xl font-bold mb-1 font-secondary ">
              Trusted Service
            </h3>
            <p className="text-cyan-700">Proven reliability on every ride. </p>
          </div>
          {/* <div className="overflow-hidden">
            <img
              src={comfort}
              alt=""
              className="h-96 w-full object-cover transition-transform transform hover:scale-105 ease-in-out duration-500 "
            />
          </div> */}
        </div>

        {/* Feature 3 */}
        <div className="w-full sm:w-[48%] lg:w-[22%]">
          <div className=" p-6 text-center flex justify-center items-center flex-col">
            <FaRegCompass className="text-cyan-700 text-5xl mb-4" />
            <h3 className="text-2xl font-bold mb-1 font-secondary">
              Experienced Crew
            </h3>
            <p className="text-cyan-700">Professional and knowledgable.</p>
          </div>
          {/* <div className="overflow-hidden">
            <img
              src={experience}
              alt=""
              className="h-96 w-full object-cover transition-transform transform hover:scale-105 ease-in-out duration-500 "
            />
          </div> */}
        </div>

        {/* Feature 4 */}
        <div className="w-full sm:w-[48%] lg:w-[22%]" >
          <div className=" p-6 text-center flex justify-center items-center flex-col">
            <IoBoatOutline className="text-cyan-700 text-5xl mb-4" />
            <h3 className="text-2xl font-bold mb-1 font-secondary">
              Luxurious Boats
            </h3>
            <p className="text-cyan-700">Modern, well-maintained fleets.</p>
          </div>
          {/* <div className="overflow-hidden">
            <img
              src={experience}
              alt=""
              className="h-96 w-full object-cover transition-transform transform hover:scale-105 ease-in-out duration-500 "
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
