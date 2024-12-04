import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'

const Hero = () => {
  return (
    <main>
        <div className=' hero w-full bg-banner-bg bg-center'>
        <div className=' hero w-full bg-black  text-white'>
            <Navbar/>
            <Banner/>
        </div>
        </div>
    </main>
  )
}

export default Hero