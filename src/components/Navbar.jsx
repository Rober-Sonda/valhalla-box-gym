import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Dumbbell, Sun, Moon, ShoppingBag } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import AuthModal from './AuthModal';
import CartDrawer from './CartDrawer';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const { currentUser, logout, isAuthModalOpen, setIsAuthModalOpen } = useAuth();
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && mobileMenuOpen) setMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  return (
    <>
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
      <CartDrawer />

      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <Link to="/" className="logo-container">
            <Dumbbell className="logo-icon" size={32} />
            <span className="logo-text">VALHALLA <span className="text-gold">BOX GYM</span></span>
          </Link>
          
          <div className="nav-links desktop-only">
            <a href="/#philosophy">La Tribu</a>
            <a href="/#services">Entrenamiento</a>
            <a href="/#schedule">Horarios</a>
            <a href="/#pricing">Tarifas</a>
            <Link to="/armeria">La Armería</Link>
            
            <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle Theme">
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button onClick={() => setIsCartOpen(true)} className="cart-toggle-btn">
              <ShoppingBag size={20} />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>

            {currentUser ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span className="text-gold" style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>
                  {currentUser.displayName?.split(' ')[0] || 'Guerrero'}
                </span>
                <button onClick={logout} className="btn-outline nav-btn" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>SALIR</button>
              </div>
            ) : (
              <button onClick={() => setIsAuthModalOpen(true)} className="btn-primary nav-btn">Únete Ahora</button>
            )}
          </div>

          <div className="mobile-only">
            <button onClick={() => setIsCartOpen(true)} className="cart-toggle-btn" style={{ marginRight: '0.5rem' }}>
              <ShoppingBag size={24} />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>
            <button onClick={toggleTheme} className="theme-toggle-btn">
              {isDark ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
        
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <a href="/#philosophy" onClick={() => setMobileMenuOpen(false)}>La Tribu</a>
            <a href="/#services" onClick={() => setMobileMenuOpen(false)}>Entrenamiento</a>
            <a href="/#schedule" onClick={() => setMobileMenuOpen(false)}>Horarios</a>
            <a href="/#pricing" onClick={() => setMobileMenuOpen(false)}>Tarifas</a>
            <Link to="/armeria" onClick={() => setMobileMenuOpen(false)}>La Armería</Link>
            
            {currentUser ? (
              <button onClick={() => { logout(); setMobileMenuOpen(false); }} className="btn-outline mobile-btn">SALIR DE LA CUENTA</button>
            ) : (
              <button onClick={() => { setIsAuthModalOpen(true); setMobileMenuOpen(false); }} className="btn-primary mobile-btn">Únete Ahora</button>
            )}
          </div>
        )}
      </nav>
    </>
  );
};
export default Navbar;
