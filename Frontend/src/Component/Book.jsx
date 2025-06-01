import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Book = () => {
  return (
    <button className="flex rounded-md items-center gap-2 bg-cyan-700 p-3 border-2 text-white border-white hover:bg-white hover:text-cyan-700 hover:border-cyan-700 hover:scale-105 transition-all duration-500 fixed bottom-10 right-10 z-100">
      Book Now <FiArrowUpRight className="text-2xl"/>
    </button>
  );
};

export default Book;
