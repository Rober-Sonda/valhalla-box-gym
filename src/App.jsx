import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Schedule from './components/Schedule';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Philosophy />
      <Services />
      <AboutUs />
      <Schedule />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
