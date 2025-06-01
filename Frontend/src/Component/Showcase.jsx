import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faPeopleGroup,
//   faStar,
//   faTag,
// } from "@fortawesome/free-solid-svg-icons";
// import React from "react";
import { useNavigate } from "react-router-dom";
import { FaAnchor } from "react-icons/fa";
import exp1 from '../assets/exp1.jpg';
import exp2 from '../assets/exp2.jpg';
import exp3 from '../assets/experience.jpg';
import exp4 from '../assets/comfort.jpg';



const Showcase = () => {
  const navigate = useNavigate();
  return (
    // <div className="grid grid-cols-3 p-10">
    //   <div className="col-span-2 px-24 py-10">
    //     <h1 className="text-3xl font-bold font-sans text-slate-800">
    //       Aayushma River Adventure - The Narayani Experience.
    //     </h1>
    //     <p className=" text-lg pt-5 text-gray-700 font-serif">
    //       Experience the beauty of the Narayani River with Aayushma River
    //       Adventure. We offer a variety of river cruises that are perfect for
    //       any occasion. Whether you're looking for a relaxing day on the water
    //       or an exciting adventure, we have the perfect cruise for you.
    //     </p>
    //   </div>
    //   <ul className="col-span-1 justify-center items-center flex flex-col gap-5 text-xl bg-slate-800 text-white p-10">
    //     <li>
    //       <FontAwesomeIcon icon={faPeopleGroup} /> Family Friendly
    //     </li>
    //     <li>
    //       <FontAwesomeIcon icon={faStar} /> Top Rated
    //     </li>
    //     <li>
    //       <FontAwesomeIcon icon={faTag} /> Group Discounts
    //     </li>
    //     <button onClick={()=> navigate('/contact')} className="bg-cyan-700 p-3 border-2 border-white hover:bg-white hover:text-cyan-700 hover:border-cyan-700 hover:scale-105 transition-all duration-500">Contact us</button>
    //   </ul>
    // </div>

    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="px-14 flex justify-center items-center flex-col">
        <FaAnchor className="text-7xl text-cyan-700 my-5"/>
        <h1 className="text-3xl font-bold font-sans text-slate-800 uppercase">
          Aayushma River Adventure - <span className="uppercase text-cyan-700">The Narayani Experience.</span>
        </h1>

        <p className=" text-lg pt-5 text-gray-700 font-serif text-center px-10">
          Experience the beauty of the <span className="uppercase text-cyan-700">Narayani River</span> with Aayushma River
          Adventure. We offer a variety of river cruises that are perfect for
          any occasion. Whether you're looking for a relaxing day on the water
          or an exciting adventure, we have the perfect cruise for you.
        </p>
      </div>
      <div className=" mx-28 px-20 pt-5 flex justify-center items-center gap-5">
        <img src={exp1} alt="" className="w-1/4 h-[500px] object-cover"/>
        <img src={exp2} alt="" className="w-1/4 h-[500px] object-cover"/>
        <img src={exp3} alt="" className="w-1/4 h-[500px] object-cover"/>
        <img src={exp4} alt="" className="w-1/4 h-[500px] object-cover"/>
      </div>

    </div>
  );
};

export default Showcase;
