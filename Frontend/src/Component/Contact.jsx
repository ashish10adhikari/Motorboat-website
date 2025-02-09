import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div>
      <div className="w-full text-center text-3xl bg-black text-white p-10 font-bold">
        Contact Us
      </div>
      <div className="p-10 flex flex-col md:flex-row items-center">
        <div className="w-1/2 text-center p-10 flex flex-col items-start space-y-2">
          <h1 className="font-secondary font-bold text-3xl text-left">
            Aayushma Motorboat Company Pvt Ltd.
          </h1>
          <p className="flex items-center pl-5">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-cyan-700" />
            aayushmamotorboat123@gmail.com
          </p>
          <p className="flex items-center pl-5">
            <FontAwesomeIcon icon={faLocationDot} className="mr-2 text-cyan-700" /> Bharatpur,
            Narayani River, Gate-1
          </p>
          <p className="flex items-center pl-5">
            <FontAwesomeIcon icon={faPhone} className="mr-2 text-cyan-700" /> +977 0123456789
          </p>
          <p className="flex items-center pl-5">
            <FontAwesomeIcon icon={faFacebook} className="mr-2 text-cyan-700" /> Aayushma
            Motorboat
          </p>
          <h2 className="font-bold mt-4 text-2xl font-secondary">Operating Hours</h2>
          <p>We are open daily (weather permitting) from 9am until 5pm.</p>
        </div>

        <div className="w-1/2 p-10 text-center">
          <h3 className="p-5 font-bold uppercase text-xl">Reach Us Out</h3>
          <form
            action=""
            className="bg-sky-100 p-10 rounded-xl gap-5 flex flex-col border-2 border-white shadow-sm shadow-cyan-100"
          >
            <div className="gap-4 flex">
              <input
                type="text"
                placeholder="Enter Name"
                name="name"
                className="w-1/2 p-3 border-1 border-gray-500 rounded-md bg-white"
              />
              <input
                type="email"
                placeholder="Enter Email"
                name="email"
                className="w-1/2 p-3 border-1 border-gray-500 rounded-md bg-white"
              />
            </div>
            <div className="gap-4 flex">
              <input
                type="text"
                placeholder="Enter Address"
                name="address"
                className="w-1/2 p-3 border-1 border-gray-500 rounded-md bg-white"
              />
              <input
                type="number"
                name="phone"
                placeholder="Enter Phone"
                className="w-1/2 p-3 border-1 border-gray-500 rounded-md bg-white"
              />
            </div>
            <textarea
              name="message"
              rows={10}
              cols={10}
              className="w-full p-3 border border-gray-500 bg-white"
              placeholder="Enter your message"
            ></textarea>
            <button className="bg-cyan-700 p-3 border-2 border-white hover:bg-white hover:text-cyan-700 hover:border-cyan-700 hover:scale-105 transition-all duration-300 text-white uppercase select-none">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
