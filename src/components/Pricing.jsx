import React from 'react';
import './Pricing.css';
import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <section className="pricing-section" id="pricing">
      <div className="container">
        <div className="section-header text-center">
          <h2>INGRESO AL <span className="text-gold">SALÓN</span></h2>
          <p className="subtitle">ELIGE TU TRIBUTO</p>
        </div>

        <div className="pricing-grid">
          {/* Plan Guerrero */}
          <div className="pricing-card">
            <h3>GUERRERO</h3>
            <p className="plan-desc">Para los que inician su camino</p>
            <div className="price">
              <span className="currency">$</span>
              <span className="amount">40</span>
              <span className="period">/mes</span>
            </div>
            <ul className="plan-features">
              <li><Check size={20} className="check-icon" /> 3 Clases por semana</li>
              <li><Check size={20} className="check-icon" /> Acceso a zona funcional</li>
              <li><Check size={20} className="check-icon" /> Plan básico de introducción</li>
            </ul>
            <button className="btn-outline w-100 mt-auto">SELECCIONAR</button>
          </div>

          {/* Plan Vikingo */}
          <div className="pricing-card popular">
            <div className="popular-badge">MEJOR VALOR</div>
            <h3>VIKINGO</h3>
            <p className="plan-desc">Para los guerreros consistentes</p>
            <div className="price">
              <span className="currency">$</span>
              <span className="amount">70</span>
              <span className="period">/mes</span>
            </div>
            <ul className="plan-features">
              <li><Check size={20} className="check-icon" /> Clases ILIMITADAS</li>
              <li><Check size={20} className="check-icon" /> Acceso libre al box</li>
              <li><Check size={20} className="check-icon" /> Acceso a talleres mensuales</li>
              <li><Check size={20} className="check-icon" /> 1 Evaluación física al mes</li>
            </ul>
            <button className="btn-primary w-100 mt-auto">SELECCIONAR</button>
          </div>

          {/* Plan Berserker */}
          <div className="pricing-card premium">
            <h3>BERSERKER</h3>
            <p className="plan-desc">Dedicación absoluta</p>
            <div className="price">
              <span className="currency">$</span>
              <span className="amount">120</span>
              <span className="period">/mes</span>
            </div>
            <ul className="plan-features">
              <li><Check size={20} className="check-icon" /> Todo el Plan Vikingo</li>
              <li><Check size={20} className="check-icon" /> 2 Sesiones Personales/mes</li>
              <li><Check size={20} className="check-icon" /> Plan nutricional adaptado</li>
              <li><Check size={20} className="check-icon" /> Recuperación (masaje mensual)</li>
            </ul>
            <button className="btn-outline w-100 mt-auto">SELECCIONAR</button>
          </div>
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
