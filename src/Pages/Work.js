import React from 'react'
import { HiArrowNarrowRight } from "react-icons/hi";


const Work = () => {
  return (
    <div className="work py-20 px-8 text-white" id="work">
      <h2 className="text-3xl font-bold mb-4 text-white-800">Our Work</h2>


      <div className="w-full flex flex-wrap items-center justify-between gap-4 py-8">
        <div className="flex-1 min-w-[250px]">
          <p className="text-lg">
            Anti-casting is a casting agency based in ​Mumbai, India. We are a team of highly experienced professionals with a deep passion for the craft of acting.
          </p>
        </div>

        
        <div className="flex-1 min-w-[250px] flex justify-center">
          <button className="px-6 py-3  text-white font-semibold rounded-lg ">
            Know More
          </button>
        </div>
      </div>

      <div className="w-full flex flex-wrap">
        <div className="flex-1 min-w-[250px] py-4 ">
          <h4 className="text-xl font-bold">01</h4>
          <p className="text-lg">Feature Films</p>
          <button className="py-2 my-2 border-b-2 border-blue-500 font-semibold flex items-center justify-center">
            <span className="pr-2">Checkout Our Work</span>
            <HiArrowNarrowRight />
          </button>

        </div>
        <div className="flex-1 min-w-[250px] py-4 ">
          <h4 className="text-xl font-bold">02</h4>
          <p className="text-lg">Web Series</p>
          <button className="py-2 my-2 border-b-2 border-blue-500 font-semibold flex items-center justify-center">
            <span className="pr-2">Checkout Our Work</span>
            <HiArrowNarrowRight />
          </button>

        </div>
        <div className="flex-1 min-w-[250px] py-4 ">
          <h4 className="text-xl font-bold">03</h4>
          <p className="text-lg">Ad Commercials</p>
          <button className="py-2 my-2 border-b-2 border-blue-500 font-semibold flex items-center justify-center">
            <span className="pr-2">Checkout Our Work</span>
            <HiArrowNarrowRight />
          </button>

        </div>
      </div>

    </div>
  )
}

export default Work