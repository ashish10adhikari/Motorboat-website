import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPeopleGroup,
  faStar,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useNavigate } from "react-router-dom";


const Showcase = () => {

  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-3 p-10">
      <div className="col-span-2 p-10">
        <h1 className="text-3xl font-bold font-sans text-slate-800">
          Aayushma River Adventure - The Narayani Experience.
        </h1>
        <p className=" text-lg pt-5 text-gray-700 font-serif">
          Experience the beauty of the Narayani River with Aayushma River
          Adventure. We offer a variety of river cruises that are perfect for
          any occasion. Whether you're looking for a relaxing day on the water
          or an exciting adventure, we have the perfect cruise for you.
        </p>
      </div>
      <ul className="col-span-1 justify-center items-center flex flex-col gap-5 text-xl bg-slate-800 text-white p-10">
        <li>
          <FontAwesomeIcon icon={faPeopleGroup} /> Family Friendly
        </li>
        <li>
          <FontAwesomeIcon icon={faStar} /> Top Rated
        </li>
        <li>
          <FontAwesomeIcon icon={faTag} /> Group Discounts
        </li>
        <button onClick={()=> navigate('/contact')} className="bg-cyan-700 p-3 border-2 border-white hover:bg-white hover:text-cyan-700 hover:border-cyan-700 hover:scale-105 transition-all duration-500">Contact us</button>
      </ul>
    </div>
  );
};

export default Showcase;
