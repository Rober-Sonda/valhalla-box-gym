import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag } from 'lucide-react';
import './Armeria.css';

const Armeria = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    {
      id: 1,
      name: 'Camiseta Berserker Oversize',
      price: '$35.00',
      tag: 'Más Vendido'
    },
    {
      id: 2,
      name: 'Muñequeras Valhalla Pro',
      price: '$20.00',
      tag: 'Equipamiento'
    },
    {
      id: 3,
      name: 'Manto de Odín (Hoodie)',
      price: '$55.00',
      tag: 'Invierno'
    },
    {
      id: 4,
      name: 'Calleras Tácticas',
      price: '$25.00',
      tag: 'Equipamiento'
    }
  ];

  return (
    <div className="armeria-page">
      <div className="armeria-header">
        <div className="armeria-overlay"></div>
        <div className="container relative z-10 text-center pt-24 pb-12">
          <Link to="/" className="back-link">
            <ArrowLeft size={20} /> Volver a Inicio
          </Link>
          <h1 className="page-title mt-4">LA <span className="text-gold">ARMERÍA</span></h1>
          <p className="page-subtitle">VÍSTETE PARA LA BATALLA. PIEL DE BERSERKER PARA GUERREROS MODERNOS.</p>
        </div>
      </div>

      <div className="container py-12">
        <div className="armeria-grid">
          {products.map((prod) => (
            <div className="product-card" key={prod.id}>
              <div className="product-image-placeholder">
                <ShoppingBag size={48} className="product-icon" />
              </div>
              <div className="product-info">
                <span className="product-tag">{prod.tag}</span>
                <h3>{prod.name}</h3>
                <p className="product-price text-gold">{prod.price}</p>
                <button className="btn-outline product-btn">Agregar al Botín</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Armeria;
