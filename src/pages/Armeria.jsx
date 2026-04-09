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

  const stockProducts = [
    {
      id: 1,
      name: 'Remera Valhalla Clásica',
      price: '15000',
      tag: 'Más Vendido',
      image: '/assets/images/products/tshirt_flat.png'
    },
    {
      id: 2,
      name: 'Musculosa Stringer Valhalla',
      price: '14000',
      tag: 'Entrenamiento',
      image: '/assets/images/products/tanktop_flat.png'
    },
    {
      id: 3,
      name: 'Short de Lucha Dojo Serpiente',
      price: '25000',
      tag: 'Equipamiento',
      image: '/assets/images/products/shorts_flat.png'
    },
    {
      id: 4,
      name: 'Joggers de Fuerza (Varios Colores)',
      price: '32000',
      tag: 'Negro, Gris, Oliva',
      image: '/assets/images/products/joggers_colors.png'
    }
  ];

  const preorderProducts = [
    {
      id: 5,
      name: 'Guantes Profesionales de Combate',
      price: '85000',
      tag: 'Por Encargo',
      image: '/assets/images/products/gloves_real.png'
    },
    {
      id: 6,
      name: 'Kit de Batalla: Vendas y Bucal Termoformable',
      price: '27000',
      tag: 'Por Encargo',
      image: '/assets/images/products/wraps_real.png'
    },
    {
      id: 7,
      name: 'Tibiales de Muay Thai Premium',
      price: '105000',
      tag: 'Por Encargo',
      image: '/assets/images/products/shinguards_flat.png'
    },
    {
      id: 8,
      name: 'Cabezal Protector de Boxeo/MMA',
      price: '90000',
      tag: 'Por Encargo',
      image: '/assets/images/products/headgear_flat.png'
    },
    {
      id: 9,
      name: 'Focos Curvos / Manoplas (Par)',
      price: '45000',
      tag: 'Por Encargo',
      image: '/assets/images/products/mitts_flat.png'
    },
    {
      id: 10,
      name: 'Tobilleras de Kickboxing (Par)',
      price: '14000',
      tag: 'Por Encargo',
      image: '/assets/images/products/ankleguards_flat.png'
    },
    {
      id: 11,
      name: 'Cuerda de Salto Pesada',
      price: '21000',
      tag: 'Por Encargo',
      image: '/assets/images/products/jumprope_flat.png'
    },
    {
      id: 12,
      name: 'Escudo de Pateo Pao Thai',
      price: '75000',
      tag: 'Por Encargo',
      image: '/assets/images/products/kickshield_flat.png'
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
        <div className="container relative z-10 text-center" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: '10rem', paddingBottom: '7rem', color: '#fff' }}>
          <h1 className="page-title">LA <span className="text-gold">ARMERÍA</span></h1>
          <p className="page-subtitle" style={{ maxWidth: '600px' }}>VÍSTETE PARA LA BATALLA. ARMADURA BERSERKER PARA GUERREROS.</p>
        </div>
      </div>

      <div className="container armeria-products-section">
        <h2 className="text-center" style={{ fontSize: '2rem', marginBottom: '2rem' }}>FORJA LOCAL <span className="text-gold">(EN STOCK)</span></h2>
        
        <div className="armeria-grid" style={{ marginBottom: '4rem' }}>
          {stockProducts.map((prod) => (
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

        <div style={{ height: '1px', backgroundColor: 'var(--border-color)', margin: '4rem auto', width: '50%' }}></div>

        <h2 className="text-center" style={{ fontSize: '2rem', marginBottom: '1rem' }}>EQUIPAMIENTO DE BATALLA <span className="text-gold">(POR ENCARGO)</span></h2>
        <p className="text-center" style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem auto', fontSize: '1rem', lineHeight: '1.5' }}>
          Reserva tu armadura especial de combate. Los guerreros que elijan adquirir estos artículos
          comprenden que la forja toma su tiempo (demora de entrega aplicable a pedidos bajo demanda).
        </p>

        <div className="armeria-grid">
          {preorderProducts.map((prod) => (
            <div className="product-card" key={prod.id}>
              <div className="product-image-container">
                <img src={prod.image} alt={prod.name} className="product-image" />
              </div>
              <div className="product-info">
                <span className="product-tag" style={{ backgroundColor: '#2a2a2a', color: '#ccc' }}>{prod.tag}</span>
                <h3>{prod.name}</h3>
                <p className="product-price text-gold">${prod.price}</p>
                <button 
                  className="btn-outline product-btn"
                  onClick={() => handleAddToCart(prod)}
                >
                  Encargar Botín
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
