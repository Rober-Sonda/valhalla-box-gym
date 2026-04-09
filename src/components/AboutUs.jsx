import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-story">
          <h2>EL ORIGEN DEL <span className="text-gold">VALHALLA</span></h2>
          <div className="divider mx-auto"></div>
          <p>
            Valhalla Box Gym nació de la pasión por el entrenamiento real. Cansados de los 
            gimnasios comerciales donde pasas desapercibido entre máquinas de poleas, 
            decidimos construir un verdadero "Bastión del Norte". Un lugar donde puedes 
            gritar al levantar pesado, donde soltar barras no es un delito, y donde 
            todos conocen tu nombre.
          </p>
        </div>

        <div className="jarls-section mt-5">
          <h2 className="text-center mb-4">NUESTROS <span className="text-gold">JARLS</span></h2>
          <p className="text-center subtitle mb-5">LOS ENTRENADORES QUE TE GUIARÁN EN BATALLA</p>
          
          <div className="trainers-grid">
            <div className="trainer-card">
              <div 
                className="trainer-img" 
                style={{ backgroundImage: `url('/assets/images/jarl_nacho_v9.png')` }}
              ></div>
              <div className="trainer-info">
                <h3>NACHO</h3>
                <p className="specialty">Head Coach & Strength</p>
                <p className="quote">"El hierro no miente. Te da exactamente lo que le entregas."</p>
              </div>
            </div>

            <div className="trainer-card">
              <div 
                className="trainer-img" 
                style={{ backgroundImage: `url('/assets/images/jarl_lautaro_v1.png')` }}
              ></div>
              <div className="trainer-info">
                <h3>LAUTARO</h3>
                <p className="specialty">Functional & Agility</p>
                <p className="quote">"La motivación es temporal. La disciplina te hace leyenda."</p>
              </div>
            </div>

            <div className="trainer-card">
              <div 
                className="trainer-img" 
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600&auto=format&fit=crop')` }}
              ></div>
              <div className="trainer-info">
                <h3>SANTINO</h3>
                <p className="specialty">Striking Specialist</p>
                <p className="quote">"Entrena tan duro que la vida real parezca fácil."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
