import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Dumbbell, Sun, Moon, Coins } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import AuthModal from './AuthModal';
import CartDrawer from './CartDrawer';
import './Navbar.css';

const GoldSack = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22C7 22 4 18 4 13c0-3 2-6 3.5-7.5.5-.5.8-1.2.8-1.9V3h7.4v.6c0 .7.3 1.4.8 1.9C18 7 20 10 20 13c0 5-3 9-8 9z" />
    <path d="M8 7h8" />
    <path d="M12 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" fill="var(--accent-gold, #C5A059)" stroke="none" />
    <path d="M12 12.5v3M10.5 14h3" stroke="var(--bg-dark, #0a0a0a)" strokeWidth="1.5" />
  </svg>
);

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

  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Only execute generic scroll highlighting on homepage
    if (window.location.pathname !== '/') return;

    const sections = document.querySelectorAll('section[id]');
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          setActiveSection(id);
          // Actualización silenciosa de URL
          window.history.replaceState(null, null, `#${id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(sec => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024 && mobileMenuOpen) setMobileMenuOpen(false);
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
            <span className="logo-text">
              <span className="logo-valhalla">VALHALLA</span>
              <span className="logo-boxgym text-gold">BOX GYM</span>
            </span>
          </Link>
          
          <div className="nav-links desktop-only">
            <a href="/#philosophy" className={activeSection === 'philosophy' ? 'active' : ''}>La Tribu</a>
            <a href="/#services" className={activeSection === 'services' ? 'active' : ''}>Entrenamiento</a>
            <a href="/#schedule" className={activeSection === 'schedule' ? 'active' : ''}>Horarios</a>
            <a href="/#pricing" className={activeSection === 'pricing' ? 'active' : ''}>Tarifas</a>
            <Link to="/armeria">Armería</Link>
            
            <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle Theme">
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button onClick={() => setIsCartOpen(true)} className="cart-toggle-btn">
              <GoldSack size={22} />
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
              <GoldSack size={24} />
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
            <a href="/#philosophy" className={activeSection === 'philosophy' ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>La Tribu</a>
            <a href="/#services" className={activeSection === 'services' ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>Entrenamiento</a>
            <a href="/#schedule" className={activeSection === 'schedule' ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>Horarios</a>
            <a href="/#pricing" className={activeSection === 'pricing' ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>Tarifas</a>
            <Link to="/armeria" onClick={() => setMobileMenuOpen(false)}>Armería</Link>
            
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
