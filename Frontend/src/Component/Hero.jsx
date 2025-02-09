import React from 'react'
import hero from '../assets/hero.jpg';
const Hero = () => {
  return (
    <div style={{backgroundImage: `url(${hero})`}} className="bg-cover bg-center h-[75vh] flex items-center justify-center text-white font-bold">
      <div className='text-center'>
        <h2 className='text-3xl'>Welcome To</h2>
        <h1 className='text-5xl'>Aayushma Motorboat Adventure</h1>
        <div className='gap-5 flex justify-center'>
          <button className='bg-cyan-700 py-5 px-7'>Package</button>
            <button className='bg-cyan-700 py-5 px-7'>Book Now</button>
        </div>
      </div>
        
    </div>
  )
}

export default Hero