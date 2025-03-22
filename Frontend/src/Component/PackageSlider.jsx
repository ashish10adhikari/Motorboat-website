import React, { useState, useEffect } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";

const PackageSlider = () => {
  const [packageData, setPackageData] = useState([]);
  const [goToSlide, setGoToSlide] = useState(0);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/package")
      .then((response) => response.json())
      .then((data) => {
        const formattedSlides = data.package.map((item) => ({
          key: uuidv4(),
          content: (
            <div className="p-5 rounded-lg w-80 bg-gray-200 mx-4">
              <img
                src={`http://127.0.0.1:8000/storage/${item.image}`}
                alt={item.title}
                className="h-64 w-full rounded-md object-cover"
              />
              <h2 className="text-2xl font-bold text-black mt-4 text-center">
                {item.title}
              </h2>
              <h3 className="p-5 text-center text-3xl font-bold text-black">
                ${item.price}
              </h3>
              <p className="text-gray-700 mt-2 pb-5">{item.description}</p>
            </div>
          ),
        }));
        setPackageData(formattedSlides);
        console.log("Slides loaded:", formattedSlides.length);
      })
      .catch((error) => console.error("Error fetching data", error));
  }, []);
  

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4">
      {packageData.length > 0 ? (
        <>
          
          <div className="relative w-full max-w-4xl h-[500px]"> 
            <Carousel
              slides={packageData}
              goToSlide={goToSlide}
              offsetRadius={2}
              animationConfig={{ tension: 300, friction: 30 }}
            />
          </div>
          
          
          <div className="flex gap-4 mt-8 z-10"> 
            <button
              onClick={() => setGoToSlide((prev) => 
                (prev - 1 + packageData.length) % packageData.length)}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
            >
              Previous
            </button>
            <button
              onClick={() => setGoToSlide((prev) => (prev + 1) % packageData.length)}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <p className="text-lg">Loading packages...</p>
      )}
    </div>
  );
};

export default PackageSlider;
