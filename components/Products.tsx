
import React from 'react';
import { PRODUCT_LINES } from '../constants';
import type { Product } from '../types';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <div 
    className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group transform hover:-translate-y-2 transition-transform duration-300 cursor-pointer select-none"
    onClick={() => alert("Sorry, we're under development.")}
  >
    <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
    <div className="p-6 flex flex-col flex-grow">
      <h4 className="text-xl font-semibold text-[#084B8A] mb-2">{product.name}</h4>
      <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {product.features.map(feature => (
          <span key={feature} className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            {feature}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Products: React.FC = () => (
  <section id="products" className="py-16 md:py-24">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#084B8A] select-none">Our Product Range</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto select-none">A comprehensive selection of paints and primers for every surface and need.</p>
      </div>
      <div className="space-y-20">
        {PRODUCT_LINES.map(line => (
          <div key={line.id} id={line.id} className="scroll-mt-20">
            <div className="text-center mb-10 select-none">
              <h3 className={`text-4xl font-bold ${line.brandColor}`}>{line.title}</h3>
              <p className="text-gray-500 mt-2">{line.description}</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {line.products.map(product => (
                <ProductCard key={product.name} product={product} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Products;
