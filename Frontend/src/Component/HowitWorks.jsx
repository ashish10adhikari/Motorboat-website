import React from "react";
import { IoTicketOutline } from "react-icons/io5";
import { FaAnchor } from "react-icons/fa";
import { BsEmojiSunglasses } from "react-icons/bs";

const HowitWorks = () => {
  return (
    <div className="text-center bg-white my-4 py-4">
      <div className="flex justify-center items-center flex-col mb-4">
        <h4 className="text-lg text-cyan-700 font-semibold uppercase">
          How it works
        </h4>
        <h2 className="text-4xl font-bold text-slate-800 pb-2">
          Follow three easy steps to your perfect river adventure.
        </h2>
      </div>

      <div className="flex justify-center items-center gap-28">
        <div className="flex justify-center items-center flex-col">
          <div className="w-28 h-28 border-2 border-cyan-700 rounded-full flex items-center justify-center">
            <IoTicketOutline className="text-5xl text-cyan-700" />
          </div>

          <h1 className="text-2xl font-bold mb-1 font-secondary text-gray-700">
            BOOK ONLINE
          </h1>
          <p className="text-gray-700 max-w-[250px]">
            Choose a package and book right here.
          </p>
        </div>

        <div className="flex justify-center items-center flex-col">
          <div className="w-28 h-28 border-2 border-cyan-700 rounded-full flex items-center justify-center">
            <FaAnchor className="text-5xl text-cyan-700" />
          </div>

          <h1 className="text-2xl font-bold mb-1 font-secondary text-gray-700">
            ALL ABROAD
          </h1>
          <p className="text-gray-700 max-w-[250px]">
            All set to sail—just hop in and wait for captain.
          </p>
        </div>

        <div className="flex justify-center items-center flex-col">
          <div className="w-28 h-28 border-2 border-cyan-700 rounded-full flex items-center justify-center">
            <BsEmojiSunglasses className="text-5xl text-cyan-700" />
          </div>

          <h1 className="text-2xl font-bold mb-1 font-secondary text-gray-700">
            READY FOR RIDE
          </h1>
          <p className="text-gray-700 max-w-[250px]">
            Glide through the Narayani River and enjoy the ride.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowitWorks;
