import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'STRIKING',
      image: '/assets/images/striking.png',
      description: 'boxeo & muay thai'
    },
    {
      id: 2,
      title: 'FUNCTIONAL',
      image: '/assets/images/functional.png',
      description: 'hiit & conditioning'
    },
    {
      id: 3,
      title: 'STRENGTH',
      image: '/assets/images/strength.png',
      description: 'halterofilia & powerlifting'
    },
    {
      id: 4,
      title: 'MOBILITY',
      image: '/assets/images/mobility.png',
      description: 'recovery & yoga'
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-header text-center">
          <h2>ENTRENAMIENTO <span className="text-gold">NÓRDICO</span></h2>
          <p className="subtitle">ELIGE TU CAMPO DE BATALLA</p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              <div 
                className="service-image" 
                style={{ backgroundImage: `url(${service.image})` }}
              >
                <div className="service-overlay"></div>
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="services-cta text-center mt-5">
          <p className="cta-text">¿Listo para entrar al Valhalla? No dejes para mañana el guerrero que puedes ser hoy.</p>
          <button className="btn-primary">VER TARIFAS</button>
        </div>
      </div>
    </section>
  );
};

export default Services;
