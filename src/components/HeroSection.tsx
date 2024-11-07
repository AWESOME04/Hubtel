import React from 'react';
import Img1 from '../assets/img-1.avif';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-[#FFFBF2] min-h-[80vh] relative overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Find and pay
            <br />
            for everyday essentials
          </h1>
          <p className="text-xl text-gray-700 mb-10">
            from local retailers, food vendors and service providers
          </p>
          <button className="bg-white text-gray-700 px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 mx-auto mb-4">
            <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Set your location to continue</span>
          </button>
          <div className="text-center">
            <span className="text-gray-600">or</span>
            <br />
            <a href="/login" className="text-teal-500 hover:text-teal-600 font-medium">
              Login
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <img 
          src={Img1}
          alt="Products" 
          className="w-full object-cover"
          style={{ height: '250px' }}
        />
      </div>
    </section>
  );
};

export default HeroSection;