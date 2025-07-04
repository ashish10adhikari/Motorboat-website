import React from 'react'
import Hero from '../Component/Hero'
import Showcase from '../Component/Showcase'
import WhyChooseUs from '../Component/WhyChooseUs'
import Package from '../Component/Package'
import Iframe from '../Component/Iframe'
import Book from '../Component/Book'
import Imagebreaker from '../Component/Imagebreaker'
import FeaturedPicnic from '../Component/picnicpackage'
import HowitWorks from '../Component/HowitWorks'
const Home = () => {
  return (
    <>
    <Hero/>
    <Showcase/>
    
    <FeaturedPicnic/>
    <WhyChooseUs/>
    <Package/>
    <HowitWorks/>
    <Imagebreaker/>
    
    <Book/>
    <Iframe/>
    </>
  )
}

export default Home