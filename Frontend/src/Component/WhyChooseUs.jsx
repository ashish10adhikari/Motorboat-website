import React from "react";
import { RiShieldStarLine } from "react-icons/ri";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCompass, FaWheelchair } from "react-icons/fa";
import { IoBoatOutline } from "react-icons/io5";


const WhyChooseUs = () => {
  return (
    <div className=" py-4 px-5">
      <div className="text-center mb-8">
        <h4 className="text-lg text-cyan-700 font-semibold uppercase">
          Why Choose Us
        </h4>
        <h2 className="text-4xl font-bold text-slate-800">
          Set Sail with Confidence
        </h2>
      </div>

      <div className="flex flex-wrap justify-center items-center text-gray-700 gap-5">
        {/* Feature 1 */}
        <div className="w-full sm:w-[48%] lg:w-[18%]">
          <div className=" p-6 text-center flex justify-center items-center flex-col ">
            <RiShieldStarLine className="text-cyan-700 text-5xl mb-4" />
            <h3 className="text-2xl mb-1 font-secondary font-bold">
              Safety First
            </h3>
            <p className="text-cyan-700">Top priority on all trips.</p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="w-full sm:w-[48%] lg:w-[18%]">
          <div className=" p-6 text-center flex justify-center items-center flex-col">
            <AiOutlineLike className="text-cyan-700 text-5xl mb-4" />
            <h3 className="text-2xl font-bold mb-1 font-secondary ">
              Trusted Service
            </h3>
            <p className="text-cyan-700">Proven reliability on every ride. </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="w-full sm:w-[48%] lg:w-[18%]">
          <div className=" p-6 text-center flex justify-center items-center flex-col">
            <FaRegCompass className="text-cyan-700 text-5xl mb-4" />
            <h3 className="text-2xl font-bold mb-1 font-secondary">
              Experienced Crew
            </h3>
            <p className="text-cyan-700">Professional and knowledgable.</p>
          </div>
         
        </div>

        {/* Feature 4 */}
        <div className="w-full sm:w-[48%] lg:w-[18%]" >
          <div className=" p-6 text-center flex justify-center items-center flex-col">
            <IoBoatOutline className="text-cyan-700 text-5xl mb-4" />
            <h3 className="text-2xl font-bold mb-1 font-secondary">
              Luxurious Boats
            </h3>
            <p className="text-cyan-700">Modern, well-maintained fleets.</p>
          </div>
        </div>

        {/* Feature 5 */}
        <div className="w-full sm:w-[48%] lg:w-[18%]" >
          <div className=" p-6 text-center flex justify-center items-center flex-col">
            <FaWheelchair className="text-cyan-700 text-5xl mb-4" />
            <h3 className="text-2xl font-bold mb-1 font-secondary">
              Fully Accessible
            </h3>
            <p className="text-cyan-700">Wheelchair friendly.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
