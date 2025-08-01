
import React from 'react';
import { TESTIMONIALS } from '../constants';
import type { Testimonial } from '../types';

const QuoteIcon: React.FC = () => (
    <svg className="w-10 h-10 text-amber-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
    </svg>
);


const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <figure 
    className="bg-white p-6 md:p-8 rounded-lg shadow-lg flex flex-col h-full transform hover:-translate-y-2 transition-transform duration-300 cursor-pointer select-none"
    onClick={() => alert("Sorry, we're under development.")}
  >
    <QuoteIcon />
    <blockquote className="text-gray-600 italic my-4 flex-grow">
      <p>"{testimonial.quote}"</p>
    </blockquote>
    <figcaption className="mt-auto pt-4 border-t border-slate-200">
      <p className="font-semibold text-gray-800">{testimonial.name}</p>
      <p className="text-sm text-gray-500">{testimonial.title}</p>
    </figcaption>
  </figure>
);

const Testimonials: React.FC = () => (
  <section id="testimonials" className="py-16 md:py-24 bg-slate-100 scroll-mt-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#084B8A] select-none">What Our Customers Say</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto select-none">Real stories from satisfied clients who have transformed their spaces with our paints.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TESTIMONIALS.map((testimonial) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} />
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
