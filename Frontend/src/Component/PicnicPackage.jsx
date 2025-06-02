import React from "react";
import picnicImg from "../assets/exp1.jpg";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const FeaturedPicnic = () => (
  <section className="relative my-20">
    <div
      className="h-[400px] bg-center bg-cover bg-fixed"
      style={{ backgroundImage: `url(${picnicImg})` }}
    >
      <div className="h-full w-full bg-black/40 flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
          Narayani Picnic Cruise
        </h2>
        <p className="text-white text-lg md:text-xl mt-4 max-w-2xl mx-auto">
          Enjoy a floating picnic with friends and family—bring your food, sail
          the Narayani, and savor stunning views.
        </p>

        <Link
          to="/package"
          className="mt-8 inline-flex border-2 border-white hover:border-cyan-700 items-center gap-2 bg-cyan-700 text-white px-6 py-3 rounded-full hover:bg-white hover:text-cyan-700 transition"
        >
          Book Picnic Cruise <FiArrowRight className="text-xl" />
        </Link>
      </div>
    </div>
  </section>
);

export default FeaturedPicnic;
