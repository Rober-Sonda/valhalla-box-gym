import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import './AboutUs.css';

const AboutUs = () => {
  const [jarls, setJarls] = useState([]);

  useEffect(() => {
    const fetchJarls = async () => {
      try {
        const q = query(collection(db, 'jarls'), where('active', '==', true));
        const snapshot = await getDocs(q);
        setJarls(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      } catch (error) {
        console.error("Error fetching jarls:", error);
      }
    };
    fetchJarls();
  }, []);

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
            {jarls.map((jarl) => (
              <div className="trainer-card" key={jarl.id}>
                <div 
                  className="trainer-img" 
                  style={{ backgroundImage: `url('${jarl.image}')`, backgroundPosition: 'center' }}
                ></div>
                <div className="trainer-info">
                  <h3>{jarl.name}</h3>
                  <p className="specialty">{jarl.specialty}</p>
                  <p className="quote">{jarl.quote}</p>
                </div>
              </div>
            ))}
            {jarls.length === 0 && (
              <p className="text-center text-muted w-100">Los Jarls se están preparando para la batalla...</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
