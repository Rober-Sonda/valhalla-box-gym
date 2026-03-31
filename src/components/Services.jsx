import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'MUSCULACIÓN',
      image: '/assets/images/strength.png',
      description: 'fuerza y desarrollo libre'
    },
    {
      id: 2,
      title: 'GAP',
      image: '/assets/images/functional.png',
      description: 'glúteos, abdomen y piernas'
    },
    {
      id: 3,
      title: 'KICKBOXING',
      image: '/assets/images/striking.png',
      description: 'combate y striking'
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-header text-center">
          <h2>NUESTRAS <span className="text-gold">DISCIPLINAS</span></h2>
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
          <a href="#pricing" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none' }}>VER TARIFAS</a>
        </div>
      </div>
    </section>
  );
};

export default Services;
