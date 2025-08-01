
import React from 'react';

const Hero: React.FC = () => (
  <section id="hero" className="relative bg-cover bg-center text-white" style={{ backgroundImage: `url('https://picsum.photos/1920/1080?grayscale&blur=2')` }}>
    <div className="absolute inset-0 bg-[#084B8A] bg-opacity-70"></div>
    <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[85vh]">
      <div className="text-center max-w-3xl py-20 select-none">
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-4 drop-shadow-lg">
          Transform Your Spaces With Quality Paints
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow">
          Premium paints for interior and exterior applications. Discover our wide range of products that provide excellent coverage, durability, and beautiful finishes.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#products" className="bg-[#FFA500] text-white font-semibold py-3 px-8 rounded-full hover:bg-amber-500 transition-transform duration-300 transform hover:scale-105 shadow-lg">
            Explore Products
          </a>
          <a href="#color-chart" className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-[#084B8A] transition-all duration-300 transform hover:scale-105 shadow-lg">
            View Color Chart
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
