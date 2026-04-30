import React, { useState, useEffect } from 'react';
import './Footer.css';
import { Dumbbell, Instagram, MapPin } from 'lucide-react';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="contact-icon" style={{ flexShrink: 0 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const Footer = () => {
  const [settings, setSettings] = useState({
    whatsapp: '542317533963',
    address: 'Urquiza 671, 9 de Julio (6500)',
    mapsUrl: 'https://www.google.com/maps/search/Urquiza+671,+9+de+Julio,+Buenos+Aires,+Argentina',
    instagramUrl: 'https://www.instagram.com/valhallaboxgym',
    slogan: 'Forjando guerreros a través de disciplina, fuerza y comunidad.',
    copyright: 'Valhalla Box Gym. Todos los derechos reservados.'
  });

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const docSnap = await getDoc(doc(db, 'settings', 'footer'));
        if (docSnap.exists()) {
          setSettings(docSnap.data());
        }
      } catch (error) {
        console.error("Error fetching footer settings:", error);
      }
    };
    fetchSettings();
  }, []);

  const handleWhatsApp = () => {
    const message =
      '⚔️ ¡Skål! Me acerco desde las tierras del sur para conocer el Valhalla Box Gym.\n' +
      'Quiero más información sobre el salón de los guerreros. ¡Que Odin guíe mi camino! 🪓🛡️';
    window.open(`https://wa.me/${settings.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

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
              {settings.slogan}
            </p>
          </div>

          <div className="footer-links">
            <h4>Navegación</h4>
            <ul>
              <li><a href="/#home">Inicio</a></li>
              <li><a href="/#philosophy">La Tribu</a></li>
              <li><a href="/#services">Clases</a></li>
              <li><a href="/#pricing">Tarifas</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Encuéntranos</h4>
            <ul>
              <li>
                <MapPin size={20} className="contact-icon" />
                <a href={settings.mapsUrl} target="_blank" rel="noopener noreferrer" className="contact-link">
                  {settings.address}
                </a>
              </li>
              <li>
                <WhatsAppIcon />
                <button onClick={handleWhatsApp} className="contact-link contact-btn">
                  Escríbenos por WhatsApp
                </button>
              </li>
              <li>
                <Instagram size={20} className="contact-icon" />
                <a href={settings.instagramUrl} target="_blank" rel="noopener noreferrer" className="contact-link">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="text-muted">&copy; {new Date().getFullYear()} {settings.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
