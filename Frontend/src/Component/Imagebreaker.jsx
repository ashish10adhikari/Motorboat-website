import React from 'react';
import image from '../assets/exp2.jpg';

const Imagebreaker = () => {
  return (
    <div
      className="w-full h-[400px] bg-fixed bg-center bg-cover my-10"
      style={{ backgroundImage: `url(${image})` }}
    >
    </div>
  );
};

export default Imagebreaker;
