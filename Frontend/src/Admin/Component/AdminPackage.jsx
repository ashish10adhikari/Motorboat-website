import React, { useState } from "react";
import "../Component/adminpackage.css";
import Table from "./Table";

const AdminPackage = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    image: null,
  });

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", formData.title);
    data.append("price", formData.price);
    data.append("description", formData.description);
    if (formData.image) {
      data.append("image", formData.image);
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/api/package", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (response.ok) {
        alert("Package added successfully!");
        setFormData({ title: "", price: "", description: "", image: null });
      } else {
        alert("Error: " + result.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="min-h-screen w-full">
      <div className="flex flex-col text-center">
        <h1 className="text-3xl font-secondary">Packages</h1>

        <form
          onSubmit={handleSubmit}
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
                value={formData.title}
                onChange={handleChange}
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
                value={formData.price}
                onChange={handleChange}
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
                onChange={handleChange}
                accept="image/png, image/jpeg"
                id="image"
              />
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
                value={formData.description}
                onChange={handleChange}
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
      <Table />
    </div>
  );
};

export default AdminPackage;
