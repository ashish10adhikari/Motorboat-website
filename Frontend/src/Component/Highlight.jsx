import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faBoltLightning, faFaceSmileBeam, faSailboat } from "@fortawesome/free-solid-svg-icons";

const Highlight = () => {
  return (
    <div className="flex justify-evenly gap-5 py-10 text-center bg-slate-800 text-white">
      <div>
        <FontAwesomeIcon icon={faBoltLightning} className="text-5xl"/>
        <h2>#1</h2>
        <h3>Fastest Boats</h3>
        <p>Fastest boat in the river.</p>
      </div>
      <span className="border-1 bg-white h-auto"></span>
      <div>
        <FontAwesomeIcon icon={faSailboat} className="text-5xl"/>
        <h2>5+</h2>
        <h3>Boats</h3>
        <p>Enjoy without waiting.</p>
      </div>
      <span className="border-1 bg-white h-auto"></span>
      <div>
        <FontAwesomeIcon icon={faAward} className="text-5xl"/>
        <h2>7+</h2>
        <h3>Years</h3>
        <p>In the business.</p>
      </div>
      <span className="border-1 bg-white h-auto"></span>
      <div>
        <FontAwesomeIcon icon={faFaceSmileBeam} className="text-5xl"/>
        <h2>10000+</h2>
        <h3>Satisfied Customer</h3>
        <p>Feel the breeze.</p>
      </div>
    </div>
  );
};

export default Highlight;
