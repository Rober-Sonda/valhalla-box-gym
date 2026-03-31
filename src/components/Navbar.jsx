import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Dumbbell, Sun, Moon } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check saved theme preferences
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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  return (
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
          <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle Theme">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="btn-primary nav-btn">Únete Ahora</button>
        </div>

        <div className="mobile-only">
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
          <button className="btn-primary mobile-btn">Únete Ahora</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
