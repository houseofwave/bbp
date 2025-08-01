
import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      alert('Please enter your email address.');
      return;
    }
    alert(`Thank you for subscribing with ${email}!`);
    setEmail('');
  };

  return (
    <footer className="bg-gray-800 text-gray-300 select-none">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">BIG BRIGHT <span className="text-[#FFA500]">Paints</span></h3>
            <p className="text-gray-400">Premium Quality Paints for All Your Needs. Transforming spaces with color and durability since 1990.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="hover:text-[#FFA500] transition-colors">Home</a></li>
              <li><a href="#products" className="hover:text-[#FFA500] transition-colors">Products</a></li>
              <li><a href="#about" className="hover:text-[#FFA500] transition-colors">About</a></li>
              <li><a href="#testimonials" className="hover:text-[#FFA500] transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-[#FFA500] transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Our Products</h4>
            <ul className="space-y-2">
              <li><a href="#inox" className="hover:text-[#FFA500] transition-colors">INOX</a></li>
              <li><a href="#safari" className="hover:text-[#FFA500] transition-colors">SAFARI</a></li>
              <li><a href="#sapphire" className="hover:text-[#FFA500] transition-colors">SAPPHIRE</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe for updates and special offers.</p>
            <form className="flex" onSubmit={handleNewsletterSubmit}>
              <input 
                type="email" 
                placeholder="Your Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 text-gray-800 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#FFA500] select-auto" 
                required
              />
              <button type="submit" className="bg-[#084B8A] text-white px-4 py-2 rounded-r-md hover:bg-[#063b6d] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} BIG BRIGHT Paints. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
