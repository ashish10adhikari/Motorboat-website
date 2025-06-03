import React from "react";
import { PiPhoneCallLight } from "react-icons/pi";
import { TfiLocationPin, TfiEmail } from "react-icons/tfi";

const ContactForm = () => {
  return (
    <div>
      <div className="w-full min-h-72 flex justify-center items-center text-5xl bg-black text-white p-10 font-bold font-secondary">
        CONTACT US
      </div>
      <div className="flex justify-center items-center gap-2 p-6 bg-gray-100 flex-wrap">
        {[
          {
            icon: <PiPhoneCallLight className="text-6xl text-cyan-700 mb-4" />,
            title: "CALL US",
            text: "We're available during business hours.\n Feel free to give us a call.",
            link: "tel:123456789",
            linkText: "123456789",
          },
          {
            icon: <TfiEmail className="text-6xl text-cyan-700 mb-4" />,
            title: "EMAIL US",
            text: "For general inquiries & questions,\n contact us via email.",
            link: "mailto:aayushmariver@gmail.com",
            linkText: "aayushmariver@gmail.com",
          },
          {
            icon: <TfiLocationPin className="text-6xl text-cyan-700 mb-4" />,
            title: "FIND US",
            text: "Narayanghat City\nNarayani River, Gate 1",
            link: "https://www.google.com/maps/place/Ayushma+Motorboat+Station/@27.6997757,84.4197356,17z/data=!3m1!4b1!4m6!3m5!1s0x3994fbc1ed4ddca7:0x289c1bb28da049e0!8m2!3d27.6997757!4d84.4223105!16s%2Fg%2F11fp8l990r?entry=ttu",
            linkText: "View on Maps",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-between shadow-2xl bg-white p-10 min-h-[300px] min-w-[400px] text-center "
          >
            {item.icon}
            <h1 className="text-xl font-bold mb-2 text-gray-800">
              {item.title}
            </h1>
            <p className="text-gray-700 mb-4 whitespace-pre-line">
              {item.text}
            </p>
            <a
              href={item.link}
              target={item.title === "FIND US" ? "_blank" : "_self"}
              rel={item.title === "FIND US" ? "noopener noreferrer" : ""}
              className="text-md bg-cyan-700 px-8 py-2 border-2 text-white border-white hover:bg-white hover:text-cyan-700 hover:border-cyan-700 hover:scale-105 transition-all duration-500 w-fit rounded-3xl"
            >
              {item.linkText}
            </a>
          </div>
        ))}
      </div>

      <form
        action=""
        className="bg-sky-100 py-10 px-40 rounded-xl gap-5 flex flex-col border-2 border-white shadow-sm shadow-cyan-100"
      >
        <div className="flex flex-col justify-center items-center gap-y-2 pb-5">
          <h1 className="text-4xl font-bold text-gray-600">GOT A QUESTION?</h1>
          <h3 className="text-2xl font-sans text-gray-600">
            We’re here to help. Send us a message and we’ll get be in touch.
          </h3>
        </div>
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
            type="tel"
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
      <div className="flex flex-col justify-center items-center min-h-96 px-20 gap-y-5">
        <h1 className="text-4xl font-bold text-cyan-700 ">PARTNERSHIP ENQUIRIES</h1>
        <hr className="border-2 border-cyan-700 w-20" />
        <p className="text-2xl font-sans text-gray-600 text-center">
          We're all ears for partnership enquiries, collaborations and business
          opportunities. Please just drop us a line at aayushmariver@gmail.com
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
