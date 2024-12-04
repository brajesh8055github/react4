// import React, { useState } from 'react';
// import logo from '../Images/Anti-Casting-Logo.jpg';
// import { FiMenu } from 'react-icons/fi';

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <div className="w-full h-15 text-white py-2">
//       <div className="max-w-screen-2xl h-full mx-auto px-4 flex items-center justify-between">
//         <img src={logo} alt="logo" className="w-32" />
//         <ul
//           className={`${
//             menuOpen ? 'flex' : 'hidden'
//           } flex-col lg:flex lg:flex-row items-center gap-6 text-sm font-semibold absolute lg:static top-28 left-0 w-full bg-gray-800 lg:bg-transparent lg:w-auto p-4 lg:p-0 z-10`}
//         >
//           <li>Home</li>
//           <li>About Us</li>
//           <li>Our Work</li>
//           <li>Contact Us</li>
//           <li>Submit Profile</li>
//           <li>Actor Login</li>
//         </ul>

//         <div className="inline-flex lg:hidden" onClick={toggleMenu}>
//           <FiMenu className="text-3xl cursor-pointer" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import logo from '../Images/Anti-Casting-Logo.jpg';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Array of navigation links
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Work', href: '#work' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'Submit Profile', href: '#submit' },
    { name: 'Actor Login', href: '#login' },
  ];

  return (
    <div className="w-full h-15 text-white py-2">
      <div className="max-w-screen-2xl h-full mx-auto px-4 flex items-center justify-between">
        <img src={logo} alt="logo" className="w-32" />
        
        <ul
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } flex-col lg:flex lg:flex-row items-center gap-6 text-sm font-semibold absolute lg:static top-28 left-0 w-full bg-gray-800 lg:bg-transparent lg:w-auto p-4 lg:p-0 z-10`}
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>

        <div className="inline-flex lg:hidden" onClick={toggleMenu}>
          <FiMenu className="text-3xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
