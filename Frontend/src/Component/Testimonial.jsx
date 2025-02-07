import React from "react";
import bg from "../assets/bg2.jpg";
import experience2 from "../assets/experience.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Testimonial = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
       
      }}
      className="py-16 px-10 min-h-screen justify-center items-center flex"
    >
      <div className=" flex flex-row gap-5">
        <div className=" flex flex-row w-1/3 bg-white p-5 gap-5 rounded-xl">
          <img src={experience2} alt="" className="rounded-full w-32 h-32" />
          <div>
            <h2 className="text-xl font-bold">Ashish Adhikari</h2>
            <div className="text-amber-500 pt-3">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <p className="font-semibold font-sans pt-2">
              "This is the best ride in Narayani river."
            </p>
          </div>
        </div>
        <div className=" flex flex-row w-1/3 bg-white p-5 gap-5 rounded-xl">
          <img src={experience2} alt="" className="rounded-full w-32 h-32" />
          <div>
            <h2 className="text-xl font-bold">Ashish Adhikari</h2>
            <div className="text-amber-500 pt-3">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <p className="font-semibold font-sans pt-2">
              "This is the best ride in Narayani river."
            </p>
          </div>
        </div>
        <div className=" flex flex-row w-1/3 bg-white p-5 gap-5 rounded-xl">
          <img src={experience2} alt="" className="rounded-full w-32 h-32" />
          <div>
            <h2 className="text-xl font-bold">Ashish Adhikari</h2>
            <div className="text-amber-500 pt-3">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <p className="font-semibold font-sans pt-2">
              "This is the best ride in Narayani river."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
