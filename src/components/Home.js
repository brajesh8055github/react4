import React from 'react'
import Hero from '../Pages/Hero'
import Work from '../Pages/Work'
import Slider from './Slider'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
        <Hero/>
      <Work/>
      <Slider/>
      <About/>
      <Contact/>
     <Footer/>
    </div>
  )
}

export default Home