import React from 'react';
import author from '../Images/vv1.jpg';
import { HiArrowNarrowRight } from "react-icons/hi";
const About = () => {
  return (
    <div className="p-4" id="about">
      <div className="flex flex-col md:flex-row justify-between ">
        <div className="flex-1 p-4">
          <h2 className="text-4xl font-bold mb-4 text-white-800">About Us</h2>
          <p>Unlike Typecasting</p>
          <p className="py-4 text-gray-500">
            Anti-Casting is a casting company based in Mumbai, India. We primarily cast for Hindi feature films, web series, and television commercials, as well as extending to various other verticals.
          </p>
          <p className="pb-8 text-gray-500">
            We are a pack of novel and passionate casting professionals, who are constantly in pursuit of identifying the cream of talent covering the length and breadth of the country to meet the director’s vision.
          </p>
          <button className="py-2 my-2 border-b-2 border-gray-400 font-semibold flex items-center justify-center">
            <span>Read More</span>
            <HiArrowNarrowRight />
          </button>
        </div>
        <div className="flex-1 p-4 text-center mt-8 md:mt-0">
          <img src={author} alt="author" className="w-full h-auto object-cover" />
          <p className="mt-4 text-xl font-semibold">
            Vaibhav Vishant <br />
            Founder & Casting Director
          </p>
          <div className="flex justify-center w-full mt-4">
            <button className="py-2 font-semibold flex items-center justify-center space-x-2">
              <span>Know More</span>
              <HiArrowNarrowRight />
            </button>
          </div>
        </div>


      </div>
    </div>
  );
};

export default About;
