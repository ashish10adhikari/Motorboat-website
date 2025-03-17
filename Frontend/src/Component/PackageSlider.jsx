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
            // Removed responsive width class (md:w-1/3) for fixed slide width
            <div className="p-5 rounded-lg w-80 bg-gray-200 mx-4">
              <img
                src={item.image}
                alt={item.title}
                className="h-64 w-full rounded-md object-cover"
              />
              <hr className="border-1 mt-5 mx-10 border-gray-400" />
              <h2 className="text-2xl font-bold text-black mt-4 text-center">
                {item.title}
              </h2>
              <h3 className="p-5 text-center text-3xl font-bold text-black">
                {item.price}.
              </h3>
              <p className="text-gray-700 mt-2 pb-5">{item.description}</p>
            </div>
          ),
        }));
        setPackageData(formattedSlides);
      })
      .catch((error) => console.error("Error fetching data", error));
  }, []);

  return (
    // Added fixed height and centered content
    <div className="carousel-container min-h-screen w-full flex flex-col items-center justify-center">
      {packageData.length > 0 ? (
        <Carousel
          slides={packageData}
          goToSlide={goToSlide}
          offsetRadius={2} // Show adjacent slides
          animationConfig={{ tension: 120, friction: 14 }} // Smooth transition
        />
      ) : (
        <p>Loading...</p>
      )}
      {packageData.length > 0 && (
        <button
          onClick={() => setGoToSlide((prev) => (prev + 1) % packageData.length)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default PackageSlider;