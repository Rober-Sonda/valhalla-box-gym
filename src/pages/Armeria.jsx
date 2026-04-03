import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import './Armeria.css';

const Armeria = () => {
  const { addToCart } = useCart();
  const { currentUser, setIsAuthModalOpen } = useAuth();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    {
      id: 1,
      name: 'Camiseta Berserker Oversize',
      price: '15000',
      tag: 'Más Vendido',
      image: '/assets/images/products/tshirt.png'
    },
    {
      id: 2,
      name: 'Musculosa Stringer Valhalla',
      price: '14000',
      tag: 'Entrenamiento',
      image: '/assets/images/products/tanktop.png'
    },
    {
      id: 3,
      name: 'Pantalón Corto Táctico',
      price: '25000',
      tag: 'Nuevo',
      image: '/assets/images/products/shorts.png'
    },
    {
      id: 4,
      name: 'Jogger de Fuerza (Pantalón Largo)',
      price: '32000',
      tag: 'Invierno',
      image: '/assets/images/products/joggers.png'
    }
  ];

  const handleAddToCart = (product) => {
    if (!currentUser) {
      setIsAuthModalOpen(true);
      return;
    }
    addToCart({ ...product, price: parseFloat(product.price) });
  };

  return (
    <div className="armeria-page">
      <div className="armeria-header">
        <div className="armeria-overlay"></div>
        <div className="container relative z-10 text-center pt-24 pb-12">
          <Link to="/" className="back-link">
            <ArrowLeft size={20} /> Volver a Inicio
          </Link>
          <h1 className="page-title mt-4">LA <span className="text-gold">ARMERÍA</span></h1>
          <p className="page-subtitle">VÍSTETE PARA LA BATALLA. PIEL DE BERSERKER PARA GUERREROS.</p>
        </div>
      </div>

      <div className="container py-12">
        <div className="armeria-grid">
          {products.map((prod) => (
            <div className="product-card" key={prod.id}>
              <div className="product-image-container">
                <img src={prod.image} alt={prod.name} className="product-image" />
              </div>
              <div className="product-info">
                <span className="product-tag">{prod.tag}</span>
                <h3>{prod.name}</h3>
                <p className="product-price text-gold">${prod.price}</p>
                <button 
                  className="btn-outline product-btn"
                  onClick={() => handleAddToCart(prod)}
                >
                  Agregar al Botín
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Armeria;
