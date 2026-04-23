import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import './Armeria.css';

const ProductCard = ({ product, handleAddToCart, isElixir, onQuickView }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = product.images || (product.image ? [product.image] : []);
  const hasMultipleImages = images.length > 1;

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="product-card" onClick={() => onQuickView(product)}>
      <div className={`product-image-container ${isElixir ? 'elixir-bg' : ''}`}>
        {hasMultipleImages ? (
          <div className="product-image-carousel">
            <button className="carousel-btn prev" onClick={handlePrev}>
              <ChevronLeft size={20} />
            </button>
            <img 
              src={images[currentImageIndex]} 
              alt={`${product.name} - ${currentImageIndex + 1}`} 
              className={`product-image ${isElixir ? 'elixir-image' : ''}`}
              style={isElixir ? { objectFit: 'contain', padding: '1rem' } : {}}
            />
            <button className="carousel-btn next" onClick={handleNext}>
              <ChevronRight size={20} />
            </button>
            <div className="carousel-indicators">
              {images.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`indicator-dot ${idx === currentImageIndex ? 'active' : ''}`}
                  onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                />
              ))}
            </div>
          </div>
        ) : (
          <img 
            src={images[0]} 
            alt={product.name} 
            className={`product-image ${isElixir ? 'elixir-image' : ''}`}
            style={isElixir ? { objectFit: 'contain', padding: '1rem' } : {}}
            onError={(e) => {
              if (isElixir) {
                e.target.onerror = null;
                e.target.src = '/assets/images/products/epic_supplement_placeholder.png';
                e.target.className = "product-image";
                e.target.style.objectFit = "cover";
                e.target.style.padding = "0";
              }
            }}
          />
        )}
      </div>
      <div className="product-info">
        <span className="product-tag" style={isElixir ? { backgroundColor: 'var(--accent-gold)', color: 'var(--bg-dark)', fontWeight: 'bold' } : (product.tag === 'Por Encargo' ? { backgroundColor: '#2a2a2a', color: '#ccc' } : {})}>
          {product.tag}
        </span>
        <h3>{product.name}</h3>
        {product.description && (
          <p className="product-description" style={{ fontSize: '0.85rem', color: '#aaa', marginBottom: '1rem', fontStyle: 'italic' }}>
            {product.description}
          </p>
        )}
        <p className="product-price text-gold" style={isElixir ? { fontSize: '1.2rem', marginTop: 'auto', marginBottom: '1.5rem' } : {}}>
          ${product.price}
        </p>
        <button 
          className="btn-outline product-btn"
          onClick={(e) => {
            e.stopPropagation();
            handleAddToCart(product);
          }}
        >
          {isElixir ? 'Tomar Elixir' : (product.tag === 'Por Encargo' ? 'Encargar Botín' : 'Agregar al Botín')}
        </button>
      </div>
    </div>
  );
};

const QuickViewModal = ({ product, isElixir, onClose, onAddToCart }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  
  if (!product) return null;

  const images = product.images || (product.image ? [product.image] : []);
  const hasMultipleImages = images.length > 1;

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="quick-view-overlay" onClick={onClose}>
      <div className="quick-view-modal" onClick={(e) => e.stopPropagation()}>
        <button className="quick-view-close" onClick={onClose}>
          <X size={24} />
        </button>
        <div className={`quick-view-image-section ${isElixir ? 'elixir-bg' : ''}`}>
          {hasMultipleImages && (
            <button className="carousel-btn prev" onClick={handlePrev}>
              <ChevronLeft size={24} />
            </button>
          )}
          <img 
            src={images[currentImageIndex]} 
            alt={`${product.name} - ${currentImageIndex + 1}`} 
            className={`product-image ${isElixir ? 'elixir-image' : ''}`}
            style={isElixir ? { objectFit: 'contain', padding: '2rem' } : {}}
            onError={(e) => {
              if (isElixir) {
                e.target.onerror = null;
                e.target.src = '/assets/images/products/epic_supplement_placeholder.png';
                e.target.className = "product-image";
                e.target.style.objectFit = "cover";
                e.target.style.padding = "0";
              }
            }}
          />
          {hasMultipleImages && (
            <button className="carousel-btn next" onClick={handleNext}>
              <ChevronRight size={24} />
            </button>
          )}
          {hasMultipleImages && (
            <div className="carousel-indicators">
              {images.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`indicator-dot ${idx === currentImageIndex ? 'active' : ''}`}
                  onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                />
              ))}
            </div>
          )}
        </div>
        <div className="quick-view-info-section">
          <span className="product-tag" style={isElixir ? { backgroundColor: 'var(--accent-gold)', color: 'var(--bg-dark)', fontWeight: 'bold', display: 'inline-block', width: 'fit-content', padding: '4px 8px', borderRadius: '4px', marginBottom: '1rem' } : (product.tag === 'Por Encargo' ? { backgroundColor: '#2a2a2a', color: '#ccc', display: 'inline-block', width: 'fit-content', padding: '4px 8px', borderRadius: '4px', marginBottom: '1rem' } : { display: 'inline-block', width: 'fit-content', padding: '4px 8px', borderRadius: '4px', marginBottom: '1rem', backgroundColor: 'var(--bg-dark)' })}>
            {product.tag}
          </span>
          <h2>{product.name}</h2>
          {product.description && (
            <p className="product-description">{product.description}</p>
          )}
          <p className="product-price text-gold">${product.price}</p>
          
          {product.sizes && (
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ color: 'var(--text-light)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>SELECCIONAR TALLE / MEDIDA</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    style={{
                      padding: '0.5rem 1rem',
                      background: selectedSize === size ? 'var(--accent-gold)' : 'transparent',
                      color: selectedSize === size ? '#000' : 'var(--text-light)',
                      border: `1px solid ${selectedSize === size ? 'var(--accent-gold)' : 'var(--border-color)'}`,
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontWeight: selectedSize === size ? 'bold' : 'normal',
                      transition: 'all 0.2s'
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          <button 
            className="btn-outline product-btn"
            onClick={() => {
              if (product.sizes && !selectedSize) {
                alert('Por favor, selecciona un talle antes de agregar al botín.');
                return;
              }
              onAddToCart({ ...product, selectedSize });
              onClose();
            }}
          >
            {isElixir ? 'Tomar Elixir' : (product.tag === 'Por Encargo' ? 'Encargar Botín' : 'Agregar al Botín')}
          </button>
        </div>
      </div>
    </div>
  );
};

const Armeria = () => {
  const { addToCart } = useCart();
  const { currentUser, setIsAuthModalOpen } = useAuth();
  const [activeCategory, setActiveCategory] = React.useState('todos');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stockProducts = [
    {
      id: 101,
      name: 'Armadura Ligera del Berserker (Conjunto)',
      price: '45000',
      tag: 'Más Vendido',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      images: [
        '/assets/images/products/new/IMG_5684.jpg',
        '/assets/images/products/new/IMG_5685.jpg',
        '/assets/images/products/new/IMG_5686.jpg'
      ]
    },
    {
      id: 104,
      name: 'Manto de Combate (Musculosa)',
      price: '22500',
      tag: 'Entrenamiento',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      images: [
        '/assets/images/products/new/IMG_5681.jpg',
        '/assets/images/products/new/IMG_5682.jpg',
        '/assets/images/products/new/IMG_5683.jpg'
      ]
    },
    {
      id: 105,
      name: 'Pantalones de Asedio (Short)',
      price: '25000',
      tag: 'Forja Local',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      images: [
        '/assets/images/products/new/IMG_5684_shorts_ai.png',
        '/assets/images/products/new/IMG_5685_shorts_ai.png',
        '/assets/images/products/new/IMG_5686_shorts_ai.png'
      ]
    }
  ];

  const preorderProducts = [
    {
      id: 102,
      name: 'Puños de la Valkiria',
      description: 'Guantes de Boxeo Proyec Rosa/Negro',
      price: '95000',
      tag: 'Por Encargo',
      sizes: ['10oz', '12oz', '14oz', '16oz'],
      images: [
        '/assets/images/products/new/epic_guantes.png',
        '/assets/images/products/new/IMG_5690.jpg',
        '/assets/images/products/new/IMG_5691.jpg',
        '/assets/images/products/new/IMG_5693.jpg',
        '/assets/images/products/new/IMG_5694.jpg'
      ]
    },
    {
      id: 103,
      name: 'Lazos de Sangre Valkiria',
      description: 'Vendas Profesionales Proyec Rosa',
      price: '18000',
      tag: 'Por Encargo',
      images: [
        '/assets/images/products/new/epic_vendas.png',
        '/assets/images/products/new/IMG_5698.jpg',
        '/assets/images/products/new/IMG_5699.jpg',
        '/assets/images/products/new/IMG_5700.jpg'
      ]
    }
  ];

  const supplementProducts = [
    {
      id: 13,
      name: 'Proteína Gold Standard (Optimum Nutrition)',
      price: '110000',
      tag: 'Elixir de Recuperación',
      image: '/assets/images/products/supp_on.jpg'
    },
    {
      id: 14,
      name: 'Creatina Monohidrato (ENA)',
      price: '45000',
      tag: 'Fuerza Bruta',
      image: '/assets/images/products/supp_ena.jpg'
    },
    {
      id: 15,
      name: 'Pre-Entreno C4 Explosive (Cellucor)',
      price: '60000',
      tag: 'Furia de Berserker',
      image: '/assets/images/products/supp_c4.jpg'
    },
    {
      id: 16,
      name: 'Animal Pak Multivitamínico (Universal)',
      price: '85000',
      tag: 'Vitalidad Ancestral',
      image: '/assets/images/products/supp_animal.jpg'
    },
    {
      id: 17,
      name: 'Syntha-6 Protein Blend (BSN)',
      price: '95000',
      tag: 'Sabor de Valhalla',
      image: '/assets/images/products/supp_syntha.jpg'
    },
    {
      id: 18,
      name: 'ISO100 Hidrolizada (Dymatize)',
      price: '130000',
      tag: 'Absorción Relámpago',
      image: '/assets/images/products/supp_iso100.jpg'
    },
    {
      id: 19,
      name: 'Whey Protein (Star Nutrition)',
      price: '75000',
      tag: 'Armadura Muscular',
      image: '/assets/images/products/supp_star.jpg'
    },
    {
      id: 20,
      name: 'L-Glutamina Pura (SPX)',
      price: '38000',
      tag: 'Aliento Sanador',
      image: '/assets/images/products/supp_glutamina.jpg'
    },
    {
      id: 21,
      name: 'AminoX BCAA (BSN)',
      price: '55000',
      tag: 'Resistencia de Odín',
      image: '/assets/images/products/supp_aminox.jpg'
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
                <ProductCard key={prod.id} product={prod} handleAddToCart={handleAddToCart} isElixir={false} onQuickView={(p) => { setSelectedProduct(p); setIsQuickViewOpen(true); }} />
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
                <ProductCard key={prod.id} product={prod} handleAddToCart={handleAddToCart} isElixir={false} onQuickView={(p) => { setSelectedProduct(p); setIsQuickViewOpen(true); }} />
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
                <ProductCard key={prod.id} product={prod} handleAddToCart={handleAddToCart} isElixir={true} onQuickView={(p) => { setSelectedProduct(p); setIsQuickViewOpen(true); }} />
              ))}
            </div>
          </div>
        )}
      </div>
      {isQuickViewOpen && selectedProduct && (
        <QuickViewModal 
          product={selectedProduct} 
          isElixir={supplementProducts.some(p => p.id === selectedProduct.id)} 
          onClose={() => setIsQuickViewOpen(false)}
          onAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
};

export default Armeria;
