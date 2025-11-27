import React from 'react';
import ten from '/public/images/j.jpg';
import JordanGrid from '../component/JordanGrid.jsx';
import {products} from '../data/products.js';

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50">

    
      <section className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16">
  
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Step Into <span className="text-red-600">Greatness</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-md">
            Discover the latest Air Jordans crafted for comfort, performance, and iconic style.
          </p>
          <button className="bg-red-600 text-white px-6 py-3 rounded-full mt-4 hover:bg-red-700 transition">
            Shop Now
          </button>
        </div>

        
        <div className="flex-1 mt-10 md:mt-0 flex justify-center">
          <img
            src={ten}
            alt="Jordan Collection"
            className="w-80 md:w-[450px] drop-shadow-xl rounded-xl"
          />
        </div>
      </section>

      {/* PRODUCT GRID SECTION */}
      <section className="w-full px-6 md:px-20 py-10">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">
          Our Featured Collection
        </h2>

        {/* GRID COMPONENT */}
        <JordanGrid products={products} />
      </section>

      {/* FOOTER CTA */}
      <section className="w-full bg-black text-white py-16 text-center mt-12">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to elevate your sneaker game?
        </h3>
        <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition">
          Browse All Jordans
        </button>
      </section>

    </div>
  );
};

export default Home;
