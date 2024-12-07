
import React from 'react';
import record from '../Images/recording-movie-artist.png'
import logo from '../Images/logo.jpeg'
const Signin = () => {
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
      <div className="flex-1 basis-1/3 p-6 bg-white shadow-lg">
        <img
          src={logo}
          alt="logo"
          className="w-20 h-20 mx-auto mb-4 object-contain"
        />
        <p className="text-lg font-medium text-gray-700 mb-2">Hello! Let's get started</p>
        <p className="text-sm text-gray-500 mb-4">Sign up to continue.</p>
        <form className="flex flex-col space-y-4">

          <input
            type="email"
            placeholder="Enter Email"
            className="p-3 border rounded-lg focus:ring focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 border rounded-lg focus:ring focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition"
          >
            SIGN IN
          </button>
        </form>
        <div className="mt-4 text-center">
          <a href="/signup" className="text-red-500 hover:underline">
            Don't have an account? Create
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signin;
