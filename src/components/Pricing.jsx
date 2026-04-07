import React, { useState } from 'react';
import './Pricing.css';
import { Check, Banknote } from 'lucide-react';
import { EpicShield, EpicSword, EpicDoubleAxe, EpicBerserker, StockShield, StockAxeShield, StockHammers, StockHelmet } from './EpicIcons';
import { useAuth } from '../context/AuthContext';
import PlanRegistrationModal from './PlanRegistrationModal';

const WHATSAPP_NUMBER = '542317533963';

const plans = [
  {
    id: 'escaldo',
    name: 'ESCALDO',
    desc: 'Plan de entrenamiento más nutrición',
    price: '39.000',
    period: '/mes',
    features: [
      'APP Exclusiva',
      'Plan Nutricional',
      'Seguimiento 100%',
    ],
    btnClass: 'btn-outline',
    popular: false,
    weapon: StockShield,
  },
  {
    id: 'guerrero',
    name: 'GUERRERO',
    desc: 'Sala de Musculación',
    price: '37.000',
    period: '/mes',
    features: [
      'Rutinas guiadas',
      'APP Exclusiva',
      '1 vez al día los 5 días (Lun-Sáb)',
    ],
    btnClass: 'btn-outline',
    popular: false,
    weapon: StockAxeShield,
  },
  {
    id: 'vikingo',
    name: 'VIKINGO',
    desc: 'Acceso exclusivo a Clases',
    price: '39.000',
    period: '/mes',
    features: [
      'Kick Boxing',
      'G.A.P',
      'Crosstraining',
    ],
    btnClass: 'btn-primary',
    popular: true,
    weapon: StockHammers,
  },
  {
    id: 'berserker',
    name: 'BERSERKER',
    desc: 'Pase Libre: Musculación + Clases',
    price: '44.000',
    period: '/mes',
    features: [
      'Rutinas guiadas',
      'Clases incluidas',
      'APP Exclusiva',
      'De Lunes a Sábados',
    ],
    btnClass: 'btn-outline',
    popular: false,
    weapon: StockHelmet,
  },
];

const Pricing = () => {
  const { currentUser, setIsAuthModalOpen } = useAuth();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

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
                  <plan.weapon />
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
