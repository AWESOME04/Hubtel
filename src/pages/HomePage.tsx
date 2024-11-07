import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;