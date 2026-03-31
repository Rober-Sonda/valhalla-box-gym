import React from 'react';
import './Philosophy.css';
import { Shield, Target, Users } from 'lucide-react';

const Philosophy = () => {
  return (
    <section className="philosophy-section" id="philosophy">
      <div className="container">
        <div className="philosophy-grid">
          <div className="philosophy-text">
            <h2>NUESTRA <span className="text-gold">FILOSOFÍA</span></h2>
            <div className="divider"></div>
            <p>
              "En Valhalla Box Gym no solo entrenamos el cuerpo; forjamos el espíritu de guerrero. 
              Creemos en la disciplina, el trabajo duro y la comunidad. Aquí no hay espejos de vanidad,
              solo acero, sudor y el sonido de progreso."
            </p>
          </div>
          <div className="philosophy-features">
            <div className="feature-item">
              <div className="feature-icon"><Shield size={32} /></div>
              <div>
                <h3>Honor & Respeto</h3>
                <p>Compite contigo mismo, respeta a tus hermanos de armas.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon"><Target size={32} /></div>
              <div>
                <h3>Intensidad Real</h3>
                <p>Entrenamientos diseñados para desafiar tus límites físicos y mentales.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon"><Users size={32} /></div>
              <div>
                <h3>La Tribu</h3>
                <p>Apoyo constante de la comunidad para asegurar que nadie se quede atrás.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
