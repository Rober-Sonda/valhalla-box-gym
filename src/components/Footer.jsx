import React from 'react';
import './Footer.css';
import { Dumbbell, Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo-container mb-4">
              <Dumbbell className="logo-icon" size={32} />
              <span className="logo-text">VALHALLA <span className="text-gold">BOX GYM</span></span>
            </div>
            <p className="text-muted">
              Forjando guerreros modernos a través de disciplina, fuerza y comunidad.
            </p>
            <div className="social-links mt-4">
              <a href="#" className="social-icon"><Instagram size={24} /></a>
              <a href="#" className="social-icon"><Facebook size={24} /></a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Navegación</h4>
            <ul>
              <li><a href="#home">Inicio</a></li>
              <li><a href="#philosophy">La Tribu</a></li>
              <li><a href="#services">Clases</a></li>
              <li><a href="#pricing">Tarifas</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Encuéntranos</h4>
            <ul>
              <li>
                <MapPin size={20} className="contact-icon" />
                <span>Calle de los Caídos 123, Asgard City</span>
              </li>
              <li>
                <Phone size={20} className="contact-icon" />
                <span>+1 234 567 890</span>
              </li>
              <li>
                <Mail size={20} className="contact-icon" />
                <span>unete@valhallabox.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="text-muted">&copy; {new Date().getFullYear()} Valhalla Box Gym. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
