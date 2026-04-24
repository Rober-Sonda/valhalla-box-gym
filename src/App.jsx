import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Facilities from './pages/Facilities';
import Armeria from './pages/Armeria';
import InscripcionView from './pages/InscripcionView';
import AuthHandler from './pages/AuthHandler';
import ProfileDashboard from './pages/ProfileDashboard';

import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

function App() {
  useEffect(() => {
    // Interceptar el retorno de Mercado Pago para abrir WhatsApp automáticamente
    const params = new URLSearchParams(window.location.search);
    const preferenceId = params.get('preference_id');
    const paymentId = params.get('payment_id');
    const pendingWhatsApp = localStorage.getItem('pendingWhatsApp');

    if (pendingWhatsApp && (preferenceId || paymentId)) {
      localStorage.removeItem('pendingWhatsApp');
      
      // Añadir al final del texto que el pago fue por Mercado Pago
      let finalUrl = pendingWhatsApp;
      if (!finalUrl.includes('Mercado%20Pago')) {
         finalUrl += encodeURIComponent('\n\n💳 *ABONADO POR MERCADO PAGO* (ID: ' + (paymentId || preferenceId) + ')');
      }
      
      setTimeout(() => {
        window.location.href = finalUrl;
      }, 1500);
    }
  }, []);
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
            <Route path="/perfil" element={<ProfileDashboard />} />
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
