import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldAlt, faAnchor, faCompass } from "@fortawesome/free-solid-svg-icons";

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-100 py-16 px-5">
      <div className="text-center mb-12">
        <h4 className="text-lg text-blue-600 font-semibold uppercase">
          Why Choose Us
        </h4>
        <h2 className="text-4xl font-bold text-slate-800">
          Set Sail with Confidence
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
          <FontAwesomeIcon icon={faShieldAlt} className="text-blue-600 text-5xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Safety First</h3>
          <p className="text-gray-600">
            Our boats meet the highest safety standards for a secure journey.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
          <FontAwesomeIcon icon={faAnchor} className="text-blue-600 text-5xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Luxurious Comfort</h3>
          <p className="text-gray-600">
            Enjoy spacious, comfortable seating and luxurious amenities.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
          <FontAwesomeIcon icon={faCompass} className="text-blue-600 text-5xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Experienced Crew</h3>
          <p className="text-gray-600">
            Our expert crew ensures a smooth and memorable journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
