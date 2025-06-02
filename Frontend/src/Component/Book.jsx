import React from "react";
import { TfiArrowCircleRight } from "react-icons/tfi";

const Book = () => {
  return (
    <button className="flex text-2xl rounded-md items-center gap-2 bg-cyan-700 p-3 border-2 text-white border-white hover:bg-white hover:text-cyan-700 hover:border-cyan-700 hover:scale-105 transition-all duration-500 fixed bottom-10 right-10 z-100 rounded-l-full rounded-tr-full">
      <TfiArrowCircleRight className="text-5xl " /> Book Now
    </button>
  );
};

export default Book;
