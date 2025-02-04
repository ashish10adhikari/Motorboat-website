import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    <div className=" py-16 px-5">
      <div className="text-center mb-12">
        <h4 className="text-lg text-blue-600 font-semibold uppercase">
          Why Choose Us
        </h4>
        <h2 className="text-4xl font-bold text-slate-800">
          Set Sail with Confidence
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div>
          <div className=" shadow-lg p-6 text-center bg-slate-800 hover:bg-cyan-700">
            <FontAwesomeIcon
              icon={faShieldAlt}
              className="text-white text-5xl mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2 text-white">
              Safety First
            </h3>
            <p className="text-gray-300">
              Our boats meet the highest safety standards for a secure journey.
            </p>
          </div>
          <div className="overflow-hidden">
            <img
              src={safety}
              alt=""
              className="h-96 w-full object-cover transition-transform transform hover:scale-105 ease-in-out duration-500 "
            />
          </div>
        </div>

        {/* Feature 2 */}
        <div className="overflow-hidden">
          <div className=" shadow-lg p-6 text-center bg-slate-800 hover:bg-cyan-700">
            <FontAwesomeIcon
              icon={faAnchor}
              className="text-white text-5xl mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2 text-white">
              Luxurious Comfort
            </h3>
            <p className="text-gray-300">
              Enjoy spacious, comfortable seating and luxurious amenities.
            </p>
          </div>
          <div className="overflow-hidden">
            <img
              src={comfort}
              alt=""
              className="h-96 w-full object-cover transition-transform transform hover:scale-105 ease-in-out duration-500 "
            />
          </div>
        </div>

        {/* Feature 3 */}
        <div className="overflow-hidden">
          <div className=" shadow-lg p-6 text-center bg-slate-800 hover:bg-cyan-700">
            <FontAwesomeIcon
              icon={faCompass}
              className="text-white text-5xl mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2 text-white">
              Experienced Crew
            </h3>
            <p className="text-gray-300">
              Our expert crew ensures a smooth sail and memorable journey.
            </p>
          </div>
          <div className="overflow-hidden">
            <img
              src={experience}
              alt=""
              className="h-96 w-full object-cover transition-transform transform hover:scale-105 ease-in-out duration-500 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
