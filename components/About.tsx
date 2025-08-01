
import React from 'react';

const ValueCard: React.FC<{ icon: React.ReactNode; title: string; text: string }> = ({ icon, title, text }) => (
  <div className="text-center p-4">
    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-amber-100 text-[#FFA500] mx-auto mb-4">
        {icon}
    </div>
    <h4 className="text-xl font-semibold text-gray-800 mb-2">{title}</h4>
    <p className="text-gray-600">{text}</p>
  </div>
);

const QualityIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
);
const SustainabilityIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);
const InnovationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.636 6.364l-.707-.707M12 21v-1m-6.364-1.636l.707-.707" />
    </svg>
);
const ReliabilityIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);


const About: React.FC = () => (
  <section id="about" className="py-16 md:py-24 bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="text-left">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#084B8A] mb-6 select-none">About BIG BRIGHT Paints</h2>
          <div className="space-y-4 text-lg text-gray-600 select-none">
            <p>BIG BRIGHT Paints is a leading manufacturer of high-quality paints and coatings. With decades of experience in the industry, we have established ourselves as a trusted brand for both residential and commercial applications.</p>
            <p>Our products are formulated with the finest raw materials to ensure excellent coverage, durability, and beautiful finishes. We offer a wide range of paints under three distinct product lines - INOX, SAFARI, and SAPPHIRE - each designed to meet specific needs and preferences.</p>
            <p>At BIG BRIGHT Paints, we are committed to innovation, quality, and customer satisfaction. Our state-of-the-art manufacturing facilities and rigorous quality control ensure that every product meets the highest standards.</p>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-8 select-none">
              <ValueCard icon={<QualityIcon />} title="Quality" text="We prioritize quality in every product we manufacture." />
              <ValueCard icon={<SustainabilityIcon />} title="Sustainability" text="Committed to environmentally friendly practices." />
              <ValueCard icon={<InnovationIcon />} title="Innovation" text="Constantly improving formulations and products." />
              <ValueCard icon={<ReliabilityIcon />} title="Reliability" text="A trusted partner for all your paint needs." />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
