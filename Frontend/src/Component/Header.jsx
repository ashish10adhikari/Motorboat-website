import React from 'react'
import hero from '../assets/hero.jpg';
const Header = () => {
  return (
    <div style={{backgroundImage: `url(${hero})`}} className="bg-cover bg-center h-[75vh] flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-primary text-white text-center">
            Welcome to Aayushma Motorboat
        </h1>
    </div>
  )
}

export default Header