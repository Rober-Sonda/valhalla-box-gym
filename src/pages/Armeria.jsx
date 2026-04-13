import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import './Armeria.css';

const Armeria = () => {
  const { addToCart } = useCart();
  const { currentUser, setIsAuthModalOpen } = useAuth();
  const [activeCategory, setActiveCategory] = React.useState('todos');

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

  const supplementProducts = [
    {
      id: 13,
      name: 'Pro Elite Mass Gainer (Muscle Fuel)',
      price: '110000',
      tag: 'Tamaño Colosal',
      image: '/assets/images/products/new_mass_gainer.png'
    },
    {
      id: 14,
      name: 'Creatina Monohidrato (ENA)',
      price: '45000',
      tag: 'Fuerza Bruta',
      image: '/assets/images/products/new_ena.png'
    },
    {
      id: 15,
      name: 'Nitro Fuel Pre-Workout',
      price: '60000',
      tag: 'Furia de Berserker',
      image: '/assets/images/products/new_nitro.png'
    },
    {
      id: 16,
      name: 'Pre-Workout Performax',
      price: '85000',
      tag: 'Concentración Absoluta',
      image: '/assets/images/products/new_performax.png'
    },
    {
      id: 17,
      name: 'Advanced Whey (Muscle Fuel)',
      price: '95000',
      tag: 'Sabor de Valhalla',
      image: '/assets/images/products/new_adv_whey.png'
    },
    {
      id: 18,
      name: 'Ultra-Whey Isolate Premium',
      price: '130000',
      tag: 'Absorción Relámpago',
      image: '/assets/images/products/new_ultra_whey.png'
    },
    {
      id: 19,
      name: 'Elite Protein Powder (Vibrant Health)',
      price: '75000',
      tag: 'Armadura Muscular',
      image: '/assets/images/products/new_protein.png'
    },
    {
      id: 20,
      name: 'Glow Biotics Daily Probiotic',
      price: '38000',
      tag: 'Aliento Sanador',
      image: '/assets/images/products/new_biotics.png'
    },
    {
      id: 21,
      name: 'Ultra-Whey Premium Isolate',
      price: '55000',
      tag: 'Resistencia de Odín',
      image: '/assets/images/products/new_ultra_whey.png'
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
        <div className="container relative z-10 text-center" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: '10rem', paddingBottom: '7rem', color: 'var(--text-light)' }}>
          <h1 className="page-title">LA <span className="text-gold">ARMERÍA</span></h1>
          <p className="page-subtitle" style={{ maxWidth: '600px' }}>VÍSTETE PARA LA BATALLA. ARMADURA BERSERKER PARA GUERREROS.</p>
        </div>
      </div>

      <div className="container armeria-products-section">
        <div className="armeria-tabs">
          <button 
            className={`armeria-tab-btn ${activeCategory === 'todos' ? 'active' : ''}`} 
            onClick={() => setActiveCategory('todos')}
          >
            TODOS
          </button>
          <button 
            className={`armeria-tab-btn ${activeCategory === 'vestimenta' ? 'active' : ''}`} 
            onClick={() => setActiveCategory('vestimenta')}
          >
            FORJA LOCAL
          </button>
          <button 
            className={`armeria-tab-btn ${activeCategory === 'equipamiento' ? 'active' : ''}`} 
            onClick={() => setActiveCategory('equipamiento')}
          >
            EQUIPO DE BATALLA
          </button>
          <button 
            className={`armeria-tab-btn ${activeCategory === 'elixires' ? 'active' : ''}`} 
            onClick={() => setActiveCategory('elixires')}
          >
            ELIXIRES (SUPLEMENTOS)
          </button>
        </div>
        
        {(activeCategory === 'vestimenta' || activeCategory === 'todos') && (
          <div className="category-section">
            <h2 className="section-title">FORJA LOCAL <span className="text-gold">(EN STOCK)</span></h2>
            <p className="section-description">
              Vístete con los colores del Valhalla. Indumentaria probada en batalla y forjada para resistir el entrenamiento más despiadado.
            </p>
            <div className="armeria-grid">
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
          </div>
        )}

        {(activeCategory === 'equipamiento' || activeCategory === 'todos') && (
          <div className="category-section">
            {activeCategory === 'todos' && <div style={{ height: '1px', backgroundColor: 'var(--border-color)', margin: '4rem auto', width: '50%' }}></div>}
            <h2 className="section-title">EQUIPAMIENTO DE BATALLA <span className="text-gold">(POR ENCARGO)</span></h2>
            <p className="section-description">
              Reserva tu armadura especial de combate. Los guerreros que elijan adquirir estos artículos
              comprenden que la forja toma su tiempo (demora aplicable).
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
        )}

        {(activeCategory === 'elixires' || activeCategory === 'todos') && (
          <div className="category-section">
            {activeCategory === 'todos' && <div style={{ height: '1px', backgroundColor: 'var(--border-color)', margin: '4rem auto', width: '50%' }}></div>}
            <h2 className="section-title">ELIXIRES DE LOS DIOSES <span className="text-gold">(SUPLEMENTOS)</span></h2>
            <p className="section-description">
              Pociones de máxima pureza. Marcas de clase mundial elegidas y testeadas rigurosamente para 
              garantizar que lleves tu recuperación y fuerza bruta al máximo nivel posible.
            </p>
            <div className="armeria-grid">
              {supplementProducts.map((prod) => (
                <div className="product-card" key={prod.id}>
                  <div className="product-image-container elixir-bg">
                    <img 
                      src={prod.image} 
                      alt={prod.name} 
                      className="product-image elixir-image" 
                      style={{ objectFit: 'contain', padding: '1rem' }} 
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/assets/images/products/epic_supplement_placeholder.png';
                        // Remueve clase estilo real si usa placeholder original
                        e.target.className = "product-image";
                        e.target.style.objectFit = "cover";
                        e.target.style.padding = "0";
                      }}
                    />
                  </div>
                  <div className="product-info">
                    <span className="product-tag" style={{ backgroundColor: 'var(--accent-gold)', color: 'var(--bg-dark)', fontWeight: 'bold' }}>{prod.tag}</span>
                    <h3>{prod.name}</h3>
                    <p className="product-price text-gold" style={{ fontSize: '1.2rem', marginTop: 'auto', marginBottom: '1.5rem' }}>${prod.price}</p>
                    <button 
                      className="btn-outline product-btn"
                      onClick={() => handleAddToCart(prod)}
                    >
                      Tomar Elixir
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Armeria;
