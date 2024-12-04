// import React from 'react'

// const Banner = () => {
//   return (
//     <div className='h-96 max-w-screen-2xl mx-auto'>
//        <h1>The Future Of Casting is here!</h1>
//        <button>Explore Our Work</button>
//        <button>Submit Your Profile</button>
//     </div>
//   )
// }

// export default Banner


import React from 'react';

const Banner = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-start px-8">
      <h1 className="text-4xl font-bold mb-4 text-white-800">
        The Future Of Casting is here!
      </h1>
      <div className="flex gap-4">
        <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Explore Our Work
        </button>
        <button className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
          Submit Your Profile
        </button>
      </div>
    </div>
  );
};

export default Banner;
