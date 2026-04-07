import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Facilities from './pages/Facilities';
import Armeria from './pages/Armeria';
import InscripcionView from './pages/InscripcionView';
import AuthHandler from './pages/AuthHandler';

import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="app-container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/instalaciones" element={<Facilities />} />
            <Route path="/armeria" element={<Armeria />} />
            <Route path="/inscripcion/:id" element={<InscripcionView />} />
            <Route path="/auth-callback" element={<AuthHandler />} />
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
