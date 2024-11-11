import React from 'react';
import HeroSectionImg from '../assets/Background.svg';
import Location from '../assets/location-img.svg';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-[#FFFBF2] min-h-[80vh] flex items-center relative overflow-hidden">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0 mr-0 md:mr-12 lg:mr-20 px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Find and pay <br /> for everyday essentials
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-10">
            from local retailers, food vendors and service providers
          </p>

          <button className="bg-white text-gray-700 px-4 py-3 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 mb-4 mx-auto md:mx-0">
            <img src={Location} alt="Location" className="w-5 h-5" />
            <span>Set your location to continue</span>
          </button>

          <div>
            <span className="text-gray-600">or</span>
            <br />
            <a href="/login" className="text-teal-500 hover:text-teal-600 font-medium">
              Login
            </a>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-end mb-10 md:mb-0 md:-mr-4">
          <img
            src={HeroSectionImg}
            alt="Product Basket"
            className="w-96 md:w-full object-contain"
          />
        </div>
    </section>
  );
};

export default HeroSection;