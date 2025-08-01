
import React, { useState } from 'react';
import { COLOR_PALETTES } from '../constants';
import type { Color } from '../types';

const ColorBox: React.FC<{ color: Color }> = ({ color }) => (
  <div
    className="h-36 rounded-lg shadow-sm flex flex-col justify-end p-2 transition-transform transform hover:scale-105 cursor-pointer select-none"
    style={{ backgroundColor: color.hex }}
    onClick={() => alert("Sorry, we're under development.")}
  >
    <span 
        className="text-xs font-semibold px-2 py-1 rounded-md"
        style={{
            color: parseInt(color.hex.substring(1), 16) > 0xffffff / 2 ? '#000' : '#fff',
            backgroundColor: parseInt(color.hex.substring(1), 16) > 0xffffff / 2 ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.4)',
        }}
    >
      {color.name}
    </span>
  </div>
);


const ColorChart: React.FC = () => {
  const [activePalette, setActivePalette] = useState(COLOR_PALETTES[0].id);

  return (
    <section id="color-chart" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#084B8A] select-none">Color Charts</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto select-none">Explore our wide range of beautiful colors to find the perfect match for your space.</p>
        </div>

        <div className="flex justify-center space-x-2 md:space-x-4 mb-10 bg-slate-200 p-2 rounded-full">
          {COLOR_PALETTES.map(palette => (
            <button
              key={palette.id}
              onClick={() => setActivePalette(palette.id)}
              className={`px-4 md:px-8 py-2 text-sm md:text-base font-semibold rounded-full transition-colors duration-300 select-none ${
                activePalette === palette.id ? 'bg-white text-[#084B8A] shadow' : 'bg-transparent text-gray-600 hover:bg-white/50'
              }`}
            >
              {palette.name}
            </button>
          ))}
        </div>

        <div>
          {COLOR_PALETTES.map(palette => (
            <div
              key={palette.id}
              className={`grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-4 ${
                activePalette === palette.id ? 'block' : 'hidden'
              }`}
            >
              {palette.colors.map(color => (
                <ColorBox key={color.name + color.hex} color={color} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ColorChart;
