import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import './Services.css';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const q = query(collection(db, 'disciplines'), where('active', '==', true));
        const snapshot = await getDocs(q);
        setServices(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      } catch (error) {
        console.error("Error fetching disciplines:", error);
      }
    };
    fetchServices();
  }, []);

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
                style={{ backgroundImage: `url('${service.image}')` }}
              >
                <div className="service-overlay"></div>
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                {service.schedule && <p style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', marginTop: '0.5rem' }}>{service.schedule}</p>}
              </div>
            </div>
          ))}
          {services.length === 0 && (
            <p className="text-center text-muted w-100">Las disciplinas están siendo forjadas...</p>
          )}
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
