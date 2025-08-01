
import React, { useState } from 'react';

const ContactInfoItem: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 text-[#084B8A] mt-1">{icon}</div>
    <div>
      <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
      <div className="text-gray-600">{children}</div>
    </div>
  </div>
);

const LocationIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>);
const PhoneIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>);
const EmailIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>);


const Contact: React.FC = () => {
    const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        setFormState({ name: '', email: '', phone: '', message: '' });
    };

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 select-none">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#084B8A]">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Have questions? We'd love to hear from you. Reach out and we'll get back to you shortly.</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden grid lg:grid-cols-5">
          <div className="lg:col-span-2 bg-[#063b6d] text-white p-8 md:p-12 space-y-8 select-none">
              <h3 className="text-3xl font-semibold">Get in Touch</h3>
              <p className="text-blue-200">Fill in the form or contact us via the details below.</p>
              <div className="space-y-6">
                <ContactInfoItem icon={<LocationIcon />} title="Address"><p>123 Paint Street, Colorville, CP 12345</p></ContactInfoItem>
                <ContactInfoItem icon={<PhoneIcon />} title="Phone"><p>+1 234 567 8900</p></ContactInfoItem>
                <ContactInfoItem icon={<EmailIcon />} title="Email"><p>info@bigbrightpaints.com</p></ContactInfoItem>
              </div>
          </div>
          <div className="lg:col-span-3 p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                      <label htmlFor="name" className="block text-sm font-normal text-gray-700 select-none">Name</label>
                      <input type="text" name="name" id="name" required value={formState.name} onChange={handleChange} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#FFA500] focus:border-[#FFA500]" />
                  </div>
                  <div>
                      <label htmlFor="email" className="block text-sm font-normal text-gray-700 select-none">Email</label>
                      <input type="email" name="email" id="email" required value={formState.email} onChange={handleChange} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#FFA500] focus:border-[#FFA500]" />
                  </div>
                  <div>
                      <label htmlFor="phone" className="block text-sm font-normal text-gray-700 select-none">Phone</label>
                      <input type="tel" name="phone" id="phone" value={formState.phone} onChange={handleChange} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#FFA500] focus:border-[#FFA500]" />
                  </div>
                  <div>
                      <label htmlFor="message" className="block text-sm font-normal text-gray-700 select-none">Message</label>
                      <textarea name="message" id="message" rows={4} required value={formState.message} onChange={handleChange} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#FFA500] focus:border-[#FFA500]"></textarea>
                  </div>
                  <div className="text-right">
                      <button type="submit" className="inline-flex justify-center py-3 px-8 border border-transparent shadow-sm text-base font-semibold rounded-full text-white bg-[#FFA500] hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400 transition-colors select-none">
                          Send Message
                      </button>
                  </div>
              </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
