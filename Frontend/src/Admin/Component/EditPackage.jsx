import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const EditPackage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [packageData, setPackagedata] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setPackagedata({ ...packageData, [e.target.name]: e.target.files[0] });
    } else {
      setPackagedata({ ...packageData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", packageData.title);
    formData.append("price", packageData.price);
    formData.append("description", packageData.description);
    if (packageData.image instanceof File) {
      formData.append("image", packageData.image);
    }
    formData.append("_method", "PATCH");

    fetch(`http://127.0.0.1:8000/api/package/patch/${id}`, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Package updated successfully");
        navigate("/admin/dashboard/package");
      })
      .catch((error) => console.error("Error updating package:", error));
  };

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
                value={packageData.title}
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
                value={packageData.price}
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
              {packageData.image && (
                <img
                  src={
                    packageData.image instanceof File
                      ? URL.createObjectURL(packageData.image)
                      : `http://127.0.0.1:8000/storage/${packageData.image}`
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
                value={packageData.description}
                onChange={handleChange}
                cols={100}
                className="p-3 border border-gray-700 focus:outline-none focus:ring focus:ring-cyan-700 focus:border-cyan-700"
              />
            </div>
            <button
              type="submit"
              className="bg-cyan-700 py-3 px-6 border-2 border-white hover:bg-white hover:text-cyan-700 hover:border-cyan-700 hover:scale-105 transition-all duration-500 text-white"
            >
              Update Package
            </button>
          </div>
        </form>
        <div className="flex justify-center items-center">
          <button
            onClick={() => {
              navigate("/admin/dashboard/package");
            }}
            className="bg-cyan-700 mt-5 w-1/3 py-3 px-6 border-2 border-white hover:bg-white hover:text-cyan-700 hover:border-cyan-700 hover:scale-105 transition-all duration-500 text-white"
          >
            GO BACK
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPackage;
