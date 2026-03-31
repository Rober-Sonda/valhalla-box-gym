import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-overlay"></div>
      <div className="hero-content container">
        <h1 className="hero-title animate-fade-in">
          FORJA TU <span className="text-gold">LEYENDA</span>.<br/>ENTRENA COMO UN DIOS.
        </h1>
        <p className="hero-subtitle animate-fade-in delay-100">
          En Valhalla Box Gym no es solo sudor, es honor. Únete a la tribu definitiva de guerreros modernos.
        </p>
        <div className="hero-actions animate-fade-in delay-200">
          <button className="btn-primary">Reserva Clase de Prueba</button>
          <Link to="/instalaciones" className="btn-outline">Ver Instalaciones</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
