import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './Facilities.css';

const Facilities = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const facilities = [
    {
      id: -1,
      image: '/assets/images/facility_hero.jpg',
      title: 'LAS PUERTAS DEL VALHALLA',
      desc: 'La majestuosa entrada a nuestro gran salón. Aquí dejas las excusas y entras a forjar tu leyenda vikinga.'
    },
    {
      id: 0,
      image: '/assets/images/facility_reception.jpg',
      title: 'RECEPCIÓN Y ARMERÍA',
      desc: 'El primer paso en Valhalla. Ingreso, equipamiento de combate y suplementación deportiva.'
    },
    {
      id: 1,
      image: '/assets/images/facility_weights.png',
      title: 'ZONA DE HIERRO Y FUERZA',
      desc: 'Donde se forjan los verdaderos levantamientos.'
    },
    {
      id: 2,
      image: '/assets/images/facility_functional.png',
      title: 'ZONA FUNCIONAL',
      desc: 'Espacio abierto para WODs, saltos, y velocidad.'
    },
    {
      id: 3,
      image: '/assets/images/facility_striking.png',
      title: 'ZONA DE STRIKING',
      desc: 'Equipamiento pesado para deportes de contacto.'
    }
  ];

  return (
    <div className="facilities-page">
      <div className="facilities-header">
        <div className="facilities-overlay"></div>
        <div className="container relative z-10 text-center" style={{ paddingTop: '11rem', paddingBottom: '4rem' }}>

          <h1 className="page-title mt-4">NUESTRAS <span className="text-gold">INSTALACIONES</span></h1>
          <p className="page-subtitle">El terreno sagrado donde las leyendas sudan y sangran.</p>
        </div>
      </div>

      <div className="container py-12">
        <div className="facilities-gallery">
          {facilities.map((fac) => (
            <div className="facility-card" key={fac.id}>
              <div 
                className="facility-image" 
                style={{ backgroundImage: `url(${fac.image})` }}
              >
              </div>
              <div className="facility-info">
                <h3>{fac.title}</h3>
                <p>{fac.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facilities;
