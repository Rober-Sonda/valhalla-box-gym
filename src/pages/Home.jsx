import React from 'react';
import Hero from '../components/Hero';
import Philosophy from '../components/Philosophy';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import Schedule from '../components/Schedule';
import Pricing from '../components/Pricing';

const Home = () => {
  return (
    <>
      <Hero />
      <Philosophy />
      <Services />
      <AboutUs />
      <Schedule />
      <Pricing />
    </>
  );
};

export default Home;
