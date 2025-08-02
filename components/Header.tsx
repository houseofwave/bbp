import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';

const Logo: React.FC = () => (
  <a
    href="#hero"
    className="flex items-center flex-nowrap select-none whitespace-nowrap font-medium text-[0.85rem] sm:text-xl md:text-2xl lg:text-3xl"
    style={{ minWidth: '220px', maxWidth: '100vw' }}
  >
    <span className="text-[#084B8A]">BIG BRIGHT</span>
    <span className="text-[#FFA500] ml-1">Paints</span>
  </a>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header id="header" className="relative bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div>{/* Empty div for alignment */}</div>
          <div className="flex-shrink-0 min-w-0">
            <Logo />
          </div>
          <div className="flex-shrink-0">
            <nav className="hidden md:flex space-x-8">
              {NAV_LINKS.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-normal text-gray-700 transition-colors duration-200 hover:text-[#FFA500] select-none"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-[#084B8A] focus:outline-none select-none"
                aria-label="Toggle menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute left-0 w-full bg-white shadow-lg md:hidden z-50">
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-normal text-gray-700 transition-colors duration-200 hover:bg-gray-100 hover:text-[#084B8A] select-none"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
