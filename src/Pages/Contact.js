import React from 'react';
import { HiArrowNarrowRight } from "react-icons/hi";

const Contact = () => {
  return (
    <div className="p-4" id="contact">
      <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
      <div className="flex flex-col md:flex-row justify-between items-center md:space-x-6">
        <p className="flex-1 max-w-xl mb-4 md:mb-0 text-lg">
          Anti-Casting is a space tailor-made for actors to explore and for us to discover. We associate with filmmakers and work in various ways to create the most suitable cast for the project. Click on the relevant button to get one step closer.
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <button className="py-2 px-6 w-48 rounded flex items-center justify-center space-x-2 shadow-md hover:shadow-lg">
            <span>Submit Profile</span>
            <HiArrowNarrowRight />
          </button>
          <button className="py-2 px-6 w-48 rounded flex items-center justify-center space-x-2 shadow-md hover:shadow-lg">
            <span>Work With Us</span>
            <HiArrowNarrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
