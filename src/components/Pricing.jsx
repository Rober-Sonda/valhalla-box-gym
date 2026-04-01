import React from 'react';
import './Pricing.css';
import { Check } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const WHATSAPP_NUMBER = '542317533963';

const plans = [
  {
    id: 'escaldo',
    name: 'ESCALDO',
    desc: 'Solo la planilla de entrenamiento',
    price: '15.000',
    period: '/mes',
    features: [
      'Planilla de entrenamiento semanal',
      'Guía de ejercicios en PDF',
      'Acceso al grupo de guerreros',
    ],
    btnClass: 'btn-outline',
    popular: false,
  },
  {
    id: 'guerrero',
    name: 'GUERRERO',
    desc: 'Para los que inician su camino',
    price: '25.000',
    period: '/mes',
    features: [
      '3 Clases por semana',
      'Acceso a zona funcional',
      'Plan básico de introducción',
    ],
    btnClass: 'btn-outline',
    popular: false,
  },
  {
    id: 'vikingo',
    name: 'VIKINGO',
    desc: 'Para los guerreros consistentes',
    price: '32.000',
    period: '/mes',
    features: [
      'Clases ILIMITADAS',
      'Acceso libre al box',
      'Acceso a talleres mensuales',
      '1 Evaluación física al mes',
    ],
    btnClass: 'btn-primary',
    popular: true,
  },
  {
    id: 'berserker',
    name: 'BERSERKER',
    desc: 'Dedicación absoluta',
    price: '42.000',
    period: '/mes',
    features: [
      'Todo el Plan Vikingo',
      '2 Sesiones Personales/mes',
      'Plan nutricional adaptado',
      'Recuperación (masaje mensual)',
    ],
    btnClass: 'btn-outline',
    popular: false,
  },
];

const Pricing = () => {
  const { currentUser, setIsAuthModalOpen } = useAuth();

  const handleSelectPlan = (plan) => {
    if (!currentUser) {
      setIsAuthModalOpen(true);
      return;
    }

    const userName = currentUser.displayName || 'Guerrero';
    const message =
      `⚔️ ¡Skål! Soy ${userName}, guerrero del Valhalla Box Gym.\n` +
      `He decidido forjar mi camino con el plan *${plan.name}* ($${plan.price}/mes).\n\n` +
      `¡Que Odin guíe mi entrenamiento y Mjolnir forje mi fuerza! 🪓🛡️`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
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
              className={`pricing-card${plan.popular ? ' popular' : ''}`}
            >
              {plan.popular && <div className="popular-badge">RECOMENDADA</div>}

              {/* Left: name + price + desktop button */}
              <div className="pricing-card-left">
                <h3>{plan.name}</h3>
                <p className="plan-desc">{plan.desc}</p>
                <div className="price">
                  <span className="currency">$</span>
                  <span className="amount">{plan.price}</span>
                  <span className="period">{plan.period}</span>
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
    </section>
  );
};

export default Pricing;
