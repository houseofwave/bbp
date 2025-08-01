
import React from 'react';
import { FEATURED_BRANDS } from '../constants';

const FeaturedProducts: React.FC = () => (
  <section id="featured" className="py-16 md:py-24 bg-slate-100">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#084B8A] select-none">Our Premium Paint Lines</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto select-none">Discover the perfect finish for your project from our signature collections.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {FEATURED_BRANDS.map((brand) => (
          <a href={`#${brand.id}`} key={brand.name} className="group bg-white rounded-lg shadow-lg p-8 text-center transform hover:-translate-y-2 transition-transform duration-300 flex flex-col no-underline select-none">
            <h3 className={`text-4xl font-semibold ${brand.color} mb-4`}>{brand.name}</h3>
            <p className="text-gray-600 mb-6 flex-grow">{brand.description}</p>
            <span className="mt-auto bg-[#084B8A] text-white font-semibold py-2 px-6 rounded-full group-hover:bg-[#063b6d] transition-colors duration-300">
              View Products
            </span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedProducts;
