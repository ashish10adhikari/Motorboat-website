import React from "react";
import '../Component/adminpackage.css'

const AdminPackage = () => {
  return (
    <div className=" min-h-screen w-full">
      <div className="flex flex-col text-center">
        <h1 className="text-3xl font-secondary">Packages</h1>

        <form
          action=""
          className="flex flex-col w-full justify-center items-center gap-5"
        >
          <div className="flex flex-row gap-5">
            <div className="gap-2 flex ">
              <label
                htmlFor="title"
                className="justify-center items-center flex"
              >
                Title:
              </label>
              <input
                type="text"
                name="title"
                className="p-3 border border-gray-700 focus:outline-none focus:ring focus:ring-cyan-700 focus:border-cyan-700"
              />
            </div>
            <div className="gap-2 flex ">
              <label
                htmlFor="price"
                className="justify-center items-center flex"
              >
                Price:
              </label>
              <input
                type="number"
                name="price"
                className="p-3 border border-gray-700 focus:outline-none focus:ring focus:ring-cyan-700 focus:border-cyan-700"
              />
            </div>

            <div className="gap-2 flex ">
              <label
                htmlFor="image"
                className="justify-center items-center flex"
              >
                Image:
              </label>
              <input
                type="file"
                name="image"
                accept="image/png, image/jpeg"
                id="image"
              />
            </div>
          </div>

          <div className="flex flex-row gap-5">
            <div className="gap-2 flex ">
              <label
                htmlFor="description"
                className="justify-center items-center flex"
              >
                Description:
              </label>
              <input
                type="text"
                name="description"
                className="p-3 border border-gray-700 focus:outline-none focus:ring focus:ring-cyan-700 focus:border-cyan-700"
              />
            </div>
            <button className="bg-cyan-700 py-3 px-6 border-2 border-white hover:bg-white hover:text-cyan-700 hover:border-cyan-700 hover:scale-105 transition-all duration-500 text-white">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminPackage;
