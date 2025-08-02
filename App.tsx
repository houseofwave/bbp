
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import Products from './components/Products';
import ColorChart from './components/ColorChart';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import './index.css';


const App: React.FC = () => {
  return (
    <div className="bg-white text-gray-600">
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <Products />
        <ColorChart />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;