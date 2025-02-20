import React from "react";
import logo from "../assets/logo.png";

const Login = () => {
  return (
    <div className="flex items-center justify-center text-center min-h-screen">
      
        <form action="" className="bg-gray-100 p-10 rounded-2xl mt-2">
          <div className="flex flex-row text-center items-center justify-center">
            <img src={logo} alt="" className="w-36 h-20" />
            <h1 className="text-2xl font-primary text-gray-700">
              Aayushma River Adventure
            </h1>
          </div>
          <div className="flex flex-col items-start pt-5">
            <label htmlFor="email">Your Username</label>
            <input
              type="text"
              name="email"
              className="w-full p-3 rounded-lg mt-2 border border-gray-500 outline-cyan-700"
            />
          </div>
          <div className="flex flex-col items-start pt-5">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="w-full p-3 rounded-lg mt-2 border border-gray-500 outline-cyan-700"
            />
          </div>
          <div className="p-5 flex justify-between items-center">
            <div className="flex gap-2 justify-center items-center">
              <input
                type="checkbox"
                name="rememberme"
                id=""
                className="w-4 h-4"
              />
              <label htmlFor="rememberme">Remember Me</label>
            </div>
            <a href="" className="text-blue-600 font-medium">
              Forgot Password?
            </a>
          </div>
          <button className="bg-cyan-700 w-full text-white p-3 border-2 border-white hover:bg-white hover:text-cyan-700 hover:border-cyan-700 hover:scale-105 transition-all duration-500">
            LOGIN
          </button>
        </form>
      
    </div>
  );
};

export default Login;
