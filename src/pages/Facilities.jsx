import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';
import './Facilities.css';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="facility-image relative" style={{ backgroundImage: `url(${images[currentIndex]})`, transition: 'background-image 0.5s ease-in-out' }}>
      <div className="carousel-dots" style={{ position: 'absolute', bottom: '20px', left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: '8px' }}>
        {images.map((_, idx) => (
          <div key={idx} style={{ 
            width: '8px', 
            height: '8px', 
            borderRadius: '50%', 
            backgroundColor: idx === currentIndex ? 'var(--accent-gold)' : 'rgba(255,255,255,0.5)', 
            transition: 'background-color 0.3s' 
          }} />
        ))}
      </div>
    </div>
  );
};

const FacilityModal = ({ facility, onClose }) => {
  const images = Array.isArray(facility.image) ? facility.image : [facility.image];
  const [currentIndex, setCurrentIndex] = React.useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  const nextImg = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };
  const prevImg = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="facility-modal-backdrop" onClick={onClose}>
      <div className="facility-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="facility-modal-close" onClick={onClose}>
          <X size={32} />
        </button>
        
        <div className="facility-modal-image-container">
          <img src={images[currentIndex]} alt={facility.title} className="facility-modal-image" />
          
          {images.length > 1 && (
            <>
              <button className="carousel-control prev" onClick={prevImg}><ChevronLeft size={40}/></button>
              <button className="carousel-control next" onClick={nextImg}><ChevronRight size={40}/></button>
              <div className="carousel-indicators">
                {images.map((_, idx) => (
                  <div key={idx} className={`indicator-dot ${idx === currentIndex ? 'active' : ''}`} onClick={() => setCurrentIndex(idx)} />
                ))}
              </div>
            </>
          )}
        </div>
        <div className="facility-modal-info">
          <h3>{facility.title}</h3>
          <p>{facility.desc}</p>
        </div>
      </div>
    </div>
  );
};

const Facilities = () => {
  const [selectedFacility, setSelectedFacility] = useState(null);

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
      image: ['/assets/images/facilities/epic_comedor_v2.png', '/assets/images/facilities/epic_comedor_v2_2.png', '/assets/images/facilities/epic_comedor_v2_3.png'],
      title: 'LA FORJA DE ODÍN',
      desc: 'Una vista panorámica de nuestra forja, donde cada banco y barra espera a aquellos decididos a superar sus límites físicos.'
    },
    {
      id: 2,
      image: ['/assets/images/facilities/epic_thor_v2_1.png', '/assets/images/facilities/epic_thor_v2_2.png', '/assets/images/facilities/epic_thor_v2_3.png', '/assets/images/facilities/epic_thor_v2_training2.png'],
      title: 'EL CAMPO DE THOR',
      desc: 'Sacos de fuerza donde los guerreros forjan su impacto. Un espacio dedicado a la potencia y la resistencia bajo la atenta mirada de los dioses.'
    },
    {
      id: 3,
      image: ['/assets/images/facilities/epic_plates_v2.png', '/assets/images/facilities/epic_plates_v2_2.png'],
      title: 'EL HIERRO DE ASGARD',
      desc: 'Los cimientos de la verdadera fuerza bruta. Auténtico hierro nórdico para aquellos que no temen ganarse un lugar en la leyenda del Valhalla.'
    },
    {
      id: 4,
      image: ['/assets/images/facilities/epic_bifrost_v3.png', '/assets/images/facilities/epic_bifrost_v2_2.png'],
      title: 'EL BRILLO DE BIFROST',
      desc: 'El puente hacia la verdadera grandeza. Un espacio funcional diseñado para llevar tu agilidad y resistencia al límite antes de cruzar hacia la batalla.'
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
            <div className="facility-card" key={fac.id} onClick={() => setSelectedFacility(fac)} style={{cursor: 'pointer'}}>
              {Array.isArray(fac.image) ? (
                <ImageCarousel images={fac.image} />
              ) : (
                <div 
                  className="facility-image" 
                  style={{ backgroundImage: `url(${fac.image})` }}
                >
                </div>
              )}
              <div className="facility-info">
                <h3>{fac.title}</h3>
                <p>{fac.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedFacility && <FacilityModal facility={selectedFacility} onClose={() => setSelectedFacility(null)} />}
    </div>
  );
};

export default Facilities;
