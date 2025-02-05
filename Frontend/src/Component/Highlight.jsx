import React from "react";

const Highlight = () => {
  return (
    <div className="flex flex-col md:flex-row justify-evenly gap-5 py-10 text-center text-blue-950 bg-gray-100">
      <div>
        <h2 className="text-4xl p-2 font-bold">#1</h2>
        <h3 className="font-semibold text-2xl">Fastest in the river</h3>
        <p className="">Feel the Breeze.</p>
      </div>
      <span className="border-1 bg-white h-auto"></span>
      <div>
        <h2 className="text-4xl p-2 font-bold">5+</h2>
        <h3 className="font-semibold text-2xl">Boats</h3>
        <p>Enjoy without waiting.</p>
      </div>
      <span className="border-1 bg-white h-auto"></span>
      <div>
        <h2 className="text-4xl p-2 font-bold">7+</h2>
        <h3 className="font-semibold text-2xl">Years</h3>
        <p>In the business.</p>
      </div>
      <span className="border-1 bg-white h-auto"></span>
      <div>
        <h2 className="text-4xl p-2 font-bold">100K+</h2>
        <h3 className="font-semibold text-2xl">Satisfied Customer</h3>
        <p>Explore the river.</p>
      </div>
    </div>
  );
};

export default Highlight;
