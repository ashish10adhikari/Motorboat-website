import React from "react";
import { NavLink } from "react-router-dom";

const Adminsidebar = () => {
  return (
    <div className="absolute top-0 left-0 pt-10 bg-slate-800 text-white h-full w-60">
      <h1 className="text-3xl font-bold py-20 font-secondary">Admin Panel</h1>
      <ul className="gap-4 flex flex-col px-10">
        <NavLink
          to="/admin/dashboard"
          end
          className={({ isActive }) =>
            isActive
              ? "bg-cyan-700 font-secondary font-bold p-5 transition-all ease-in-out duration-500 "
              : "hover:bg-cyan-700 font-secondary font-bold p-5 transition-all ease-in-out duration-500"
          }
        >
          Dashboard
        </NavLink>
        <hr className="mx-10"/>
        <NavLink
          to="/admin/dashboard/package"
          className={({ isActive }) =>
            isActive
              ? "bg-cyan-700 font-secondary font-bold p-5 transition-all ease-in-out duration-500 "
              : "hover:bg-cyan-700 font-secondary font-bold p-5 transition-all ease-in-out duration-500"
          }
        >
          Package
        </NavLink>
        <hr className="mx-10"/>
        <NavLink
          to="/admin/dashboard/image"
          className={({ isActive }) =>
            isActive
              ? "bg-cyan-700 font-secondary font-bold p-5 transition-all ease-in-out duration-500 "
              : "hover:bg-cyan-700 font-secondary font-bold p-5 transition-all ease-in-out duration-500"
          }
        >
          Images
        </NavLink>
        <hr className="mx-10"/>
        <NavLink
          to="/admin/dashboard/gallery"
          className={({ isActive }) =>
            isActive
              ? "bg-cyan-700 font-secondary font-bold p-5 transition-all ease-in-out duration-500 "
              : "hover:bg-cyan-700 font-secondary font-bold p-5 transition-all ease-in-out duration-500"
          }
        >
          Gallery{" "}
        </NavLink>
        <hr className="mx-10"/>
        <NavLink
          to="/admin/dashboard/message"
          className={({ isActive }) =>
            isActive
              ? "bg-cyan-700 font-secondary font-bold p-5 transition-all ease-in-out duration-500 "
              : "hover:bg-cyan-700 font-secondary font-bold p-5 transition-all ease-in-out duration-500"
          }
        >
          Messages
        </NavLink>
      </ul>
    </div>
  );
};

export default Adminsidebar;
