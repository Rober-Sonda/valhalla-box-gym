import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Facilities from './pages/Facilities';
import Armeria from './pages/Armeria';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instalaciones" element={<Facilities />} />
        <Route path="/armeria" element={<Armeria />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
