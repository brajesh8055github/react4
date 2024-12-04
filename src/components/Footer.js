import React from 'react';
import logo from '../Images/Anti-Casting-Logo.jpg';

const Footer = () => {
  return (
    <div className="px-6 py-20 bg-gray-800 text-white">
      <div className="flex flex-col md:flex-row justify-between items-start md:space-x-8">
        <div className="flex-1 mb-6 md:mb-0">
          <img src={logo} alt="logo" className="w-48" />
        </div>

        
        <div className="flex-1 mb-6 md:mb-0">
          <h4 className="text-xl font-bold mb-2">Contact Info</h4>
          <p>Bungalow Number 79, Aram Nagar Part 1, Versova, Andheri West, Mumbai, Maharashtra 400061</p>
        </div>

        
        <div className="flex-1 mb-6 md:mb-0">
          <h4 className="text-xl font-bold mb-2">Quick Links</h4>
          <ul>
            <li>Sbumit Profile</li>
            <li>About Us</li>
            <li>Our Work</li>
            <li>Contact Us</li>
          </ul>
        </div>

       
        <div className="flex-1">
          <h4 className="text-xl font-bold mb-2">Our Work</h4>
          <ul>
            <li>Featured Films</li>
            <li>Web Series</li>
            <li>Ad Commercials</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
