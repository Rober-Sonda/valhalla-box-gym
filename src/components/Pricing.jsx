import React, { useState, useEffect } from 'react';
import './Pricing.css';
import { Check, Banknote } from 'lucide-react';
import { EpicShield, EpicSword, EpicDoubleAxe, EpicBerserker, StockShield, StockAxeShield, StockHammers, StockHelmet } from './EpicIcons';
import { useAuth } from '../context/AuthContext';
import PlanRegistrationModal from './PlanRegistrationModal';

const WHATSAPP_NUMBER = '542317533963';

import { collection, onSnapshot, query, where, orderBy } from 'firebase/firestore';
import { db } from '../firebase';

const iconMap = {
  'StockShield': StockShield,
  'StockAxeShield': StockAxeShield,
  'StockHammers': StockHammers,
  'StockHelmet': StockHelmet,
  'EpicShield': EpicShield,
  'EpicSword': EpicSword,
  'EpicDoubleAxe': EpicDoubleAxe,
  'EpicBerserker': EpicBerserker
};

const Pricing = () => {
  const { currentUser, setIsAuthModalOpen } = useAuth();
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  useEffect(() => {
    // Escuchar solo planes activos
    const q = query(collection(db, 'plans'), where('status', '==', 'active'));
    const unsub = onSnapshot(q, (snapshot) => {
      // Ordenar por precio ascendente manualmente si es necesario, o por un campo 'order'
      // Por ahora los devolvemos como vienen o los ordenamos por precio
      const fetchedPlans = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      fetchedPlans.sort((a, b) => a.price - b.price);
      
      // Formatear precio para que tenga el punto (ej: 39000 -> "39.000")
      const formattedPlans = fetchedPlans.map(p => ({
        ...p,
        price: new Intl.NumberFormat('es-AR').format(p.price)
      }));
      setPlans(formattedPlans);
    });
    return () => unsub();
  }, []);

  const handleSelectPlan = (plan) => {
    if (!currentUser) {
      setIsAuthModalOpen(true);
      return;
    }

    setSelectedPlan(plan);
    setIsRegistrationModalOpen(true);
  };

  return (
    <section className="pricing-section" id="pricing">
      <div className="container">
        <div className="section-header text-center">
          <h2>INGRESO AL <span className="text-gold">SALÓN</span></h2>
          <p className="subtitle">ELIGE TU TRIBUTO</p>
        </div>

        <div className="pricing-grid pricing-grid-4">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`pricing-card plan-${plan.id}${plan.popular ? ' popular' : ''}`}
            >
              <div className="watermark-container">
                <div className="card-watermark">
                  {plan.imageUrl ? (
                    <img 
                      src={plan.imageUrl} 
                      alt={plan.name} 
                      style={{ width: '100%', height: '100%', objectFit: 'contain', opacity: 0.15 }} 
                    />
                  ) : (() => {
                    const WeaponIcon = iconMap[plan.weapon] || StockShield;
                    return <WeaponIcon />;
                  })()}
                </div>
              </div>

              {plan.popular && <div className="popular-badge">RECOMENDADA</div>}

              {/* Left: name + price + desktop button */}
              <div className="pricing-card-left">
                <h3>{plan.name}</h3>
                <p className="plan-desc">{plan.desc}</p>
                <div className="price-container">
                  <div className="price main-price">
                    <span className="currency">$</span>
                    <span className="amount">{plan.price}</span>
                    <span className="period">{plan.period}</span>
                  </div>
                  <div className="discount-badge">
                    <Banknote size={16} className="discount-icon" /> 10% OFF abonando en efectivo
                  </div>
                </div>
                {/* Desktop button — hidden on mobile via CSS */}
                <button
                  className={`${plan.btnClass} w-100`}
                  onClick={() => handleSelectPlan(plan)}
                >
                  SELECCIONAR
                </button>
              </div>

              {/* Right: features + mobile button at bottom */}
              <div className="pricing-card-right">
                <ul className="plan-features">
                  {plan.features.map((feat, i) => (
                    <li key={i}>
                      <Check size={20} className="check-icon" /> {feat}
                    </li>
                  ))}
                </ul>
                {/* Mobile button — shown only on mobile, always at foot of card */}
                <button
                  className={`${plan.btnClass} w-100 seleccionar-mobile`}
                  onClick={() => handleSelectPlan(plan)}
                >
                  SELECCIONAR
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-section mt-5">
          <h3 className="text-center mb-4">Preguntas Frecuentes</h3>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>¿Hay cuota de inscripción (matrícula)?</h4>
              <p className="text-muted">No. Creemos en la transparencia. Pagas lo que usas, sin cargos ocultos.</p>
            </div>
            <div className="faq-item">
              <h4>¿Puedo cancelar en cualquier momento?</h4>
              <p className="text-muted">Sí, puedes cancelar tu membresía con un aviso de 15 días antes del próximo ciclo de facturación.</p>
            </div>
          </div>
        </div>
      </div>

      <PlanRegistrationModal 
        plan={selectedPlan}
        isOpen={isRegistrationModalOpen}
        onClose={() => setIsRegistrationModalOpen(false)}
      />
    </section>
  );
};

export default Pricing;
