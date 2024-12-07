import React from 'react';
import logo from '../Images/logo.jpeg'
import record from '../Images/recording-movie-artist.png'
const Signup = () => {
  return (
    <div className="flex flex-wrap min-h-screen p-4 bg-red-100">
<div className="flex-1 basis-2/3 p-6 flex items-center justify-center">
  <div className="text-center">
    <h2 className="text-3xl font-bold text-gray-800">Welcome to Anti-Casting</h2>
    <p className="mt-4 text-gray-600">
      Join our database and explore exciting opportunities by creating your profile here. 
      Stay updated on our latest casting requirements and be part of our creative journey!
    </p>
    <img 
  src={record} 
  alt="record-img" 
  className="w-full max-w-sm mx-auto mt-6 bg-transparent object-cover"
/>

  </div>
</div>
      <div className="flex-1 basis-1/3 p-6 bg-white rounded-lg shadow-lg">
  <img 
    src={logo} 
    alt="logo" 
    className="w-20 h-20 mx-auto mb-4 object-contain"
  />
  <p className="text-lg font-medium text-gray-700 mb-2">Hello! Let's get started</p>
  <p className="text-sm text-gray-500 mb-4">Sign up to continue.</p>
  <form className="flex flex-col space-y-4">
    <input 
      type="text" 
      placeholder="First Name" 
      className="p-3 border rounded-lg focus:ring focus:ring-blue-500"
    />
    <input 
      type="text" 
      placeholder="Last Name" 
      className="p-3 border rounded-lg focus:ring focus:ring-blue-500"
    />
    <input 
      type="email" 
      placeholder="Email" 
      className="p-3 border rounded-lg focus:ring focus:ring-blue-500"
    />
    <input 
      type="number" 
      placeholder="0000000000" 
      className="p-3 border rounded-lg focus:ring focus:ring-blue-500"
    />
    <div className="flex items-center space-x-2">
      <input 
        type="checkbox" 
        id="terms" 
        className="h-4 w-4 border rounded focus:ring-blue-500"
      />
      <label htmlFor="terms" className="text-sm text-gray-600">
        I accept the Terms of Service.
      </label>
    </div>
    <button 
      type="submit" 
      className="w-full py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition"
    >
      SIGN UP
    </button>
  </form>
  <div className="mt-4 text-center">
    <a href="/signin" className="text-red-500 hover:underline">
      Existing User? Login
    </a>
  </div>
</div>


    </div>
  );
};

export default Signup;
