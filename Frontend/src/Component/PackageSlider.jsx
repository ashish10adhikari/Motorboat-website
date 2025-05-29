import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import { useNavigate } from "react-router-dom";

const PackageSlider = () => {
  const [packageData, setPackageData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/package")
      .then((res) => res.json())
      .then((data) => {
        setPackageData(data.package || []);
      })
      .catch((err) => {
        console.error("Error fetching package data:", err);
      });
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto">
      {packageData.length > 0 ? (
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          effect="coverflow"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
        >
          {packageData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center py-5">
                <div className="w-full h-[500px] max-w-sm  shadow-sm min-h-28 cursor-pointer" onClick={()=>navigate('/package')}>
                  <img
                    src={`http://127.0.0.1:8000/storage/${item.image}`}
                    alt={item.title}
                    className="h-64 w-full object-cover"
                  />

                  <div className="p-2">
                    <h2 className="text-2xl font-bold text-black text-center">
                      {item.title}
                    </h2>
                    <h3 className="p-2 text-center text-3xl font-bold text-black">
                      Rs. {item.price}
                    </h3>
                    <p className="text-gray-700 mt-2 pb-5">
                      {item.description}
                    </p>
                    <button onClick={()=>navigate('/package')} className=" text-white bg-cyan-700 py-3 px-5 border-2 border-white hover:bg-white hover:text-cyan-700 hover:border-cyan-700 hover:scale-105 transition-all duration-500">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-center text-lg text-gray-600">Loading packages...</p>
      )}
    </div>
  );
};

export default PackageSlider;
