import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const EditPackage = () => {
  const { id } = useParams();

  const [packagedata, setPackagedata] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/package/${id}`)
      .then((response) => response.json())
      .then((data) => setPackagedata(data.package))
      .catch((error) => console.error("Error Fetching Data", error));
  }, [id]);

  return (
    <div className="min-h-screen w-full">
      <div className="flex flex-col text-center">
        <h1 className="text-3xl font-secondary">Packages</h1>

        <form
          // onSubmit={handleSubmit}
          className="flex flex-col w-full justify-center items-center gap-5"
        >
          <div className="flex flex-row gap-5">
            <div className="gap-2 flex">
              <label
                htmlFor="title"
                className="justify-center items-center flex"
              >
                Title:
              </label>
              <input
                type="text"
                name="title"
                value={packagedata.title}
                // onChange={handleChange}
                className="p-3 border border-gray-700 focus:outline-none focus:ring focus:ring-cyan-700 focus:border-cyan-700"
              />
            </div>
            <div className="gap-2 flex">
              <label
                htmlFor="price"
                className="justify-center items-center flex"
              >
                Price:
              </label>
              <input
                type="number"
                name="price"
                value={packagedata.price}
                // onChange={handleChange}
                className="p-3 border border-gray-700 focus:outline-none focus:ring focus:ring-cyan-700 focus:border-cyan-700"
              />
            </div>

            <div className="gap-2 flex">
              <label
                htmlFor="image"
                className="justify-center items-center flex"
              >
                Image:
              </label>
              <input
                type="file"
                name="image"
                // onChange={handleChange}
                accept="image/png, image/jpeg"
                id="image"
              />
              {packagedata.image && (
                <img
                  src={
                    packagedata.image instanceof File
                      ? URL.createObjectURL(packagedata.image)
                      : `http://127.0.0.1:8000/storage/${packagedata.image}`
                  }
                  alt="Preview"
                  width="100"
                />
              )}
            </div>
          </div>

          <div className="flex flex-row gap-5">
            <div className="gap-2 flex">
              <label
                htmlFor="description"
                className="justify-center items-center flex"
              >
                Description:
              </label>
              <textarea
                name="description"
                value={packagedata.description}
                // onChange={handleChange}
                cols={100}
                className="p-3 border border-gray-700 focus:outline-none focus:ring focus:ring-cyan-700 focus:border-cyan-700"
              />
            </div>
            <button
              type="submit"
              className="bg-cyan-700 py-3 px-6 border-2 border-white hover:bg-white hover:text-cyan-700 hover:border-cyan-700 hover:scale-105 transition-all duration-500 text-white"
            >
              Add Package
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPackage;
