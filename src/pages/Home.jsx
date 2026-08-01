import React from 'react';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Services from '../components/home/Services';
import Features from '../components/home/Features';
import PricingPreview from '../components/home/PricingPreview';
import Testimonials from '../components/home/Testimonials';
import ContactCTA from '../components/home/ContactCTA';

const Home = () => {
  const containerStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <div style={containerStyle}>
      <Hero />
      <About />
      <Services />
      <Features />
      <PricingPreview />
      <Testimonials />
      <ContactCTA />
    </div>
  );
};

export default Home;

