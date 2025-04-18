// src/components/Home.jsx
import React from 'react';
import Hero from './Hero';
import Testimonial from './Testimonial';
import Faq from './Faq';
import PartnerLogo from './PartnerLogo';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <Hero />
      <PartnerLogo />
      <Testimonial />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
