import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../firebase';
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
        <span className="product-tag" style={isElixir ? { backgroundColor: 'var(--accent-gold)', color: 'var(--bg-dark)', fontWeight: 'bold' } : ((product.isPreorder || product.tag === 'Por Encargo') ? { backgroundColor: '#2a2a2a', color: '#ccc' } : {})}>
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
          {isElixir ? 'Tomar Elixir' : ((product.isPreorder || product.tag === 'Por Encargo') ? 'Encargar Botín' : 'Agregar al Botín')}
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
            {isElixir ? 'Tomar Elixir' : ((product.isPreorder || product.tag === 'Por Encargo') ? 'Encargar Botín' : 'Agregar al Botín')}
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

  const [products, setProducts] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const q = query(collection(db, 'products'), where('status', '==', 'active'));
    const unsub = onSnapshot(q, (snapshot) => {
      const fetched = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(fetched);
    });
    return () => unsub();
  }, []);

  const handleAddToCart = (product) => {
    if (!currentUser) {
      setIsAuthModalOpen(true);
      return;
    }
    addToCart({ ...product, price: parseFloat(product.price) });
  };

  const uniqueCategories = [...new Set(products.map(p => p.category).filter(Boolean))];

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
          {uniqueCategories.map(cat => (
            <button 
              key={cat}
              className={`armeria-tab-btn ${activeCategory === cat ? 'active' : ''}`} 
              onClick={() => setActiveCategory(cat)}
              style={{ textTransform: 'uppercase' }}
            >
              {cat}
            </button>
          ))}
        </div>
        
        <div className="armeria-grid" style={{ marginTop: '3rem' }}>
          {products
            .filter(prod => activeCategory === 'todos' || prod.category === activeCategory)
            .map((prod) => (
              <ProductCard 
                key={prod.id} 
                product={prod.isOffer ? { ...prod, price: prod.offerPrice } : prod} 
                handleAddToCart={prod.sizes?.length > 0 ? () => { setSelectedProduct(prod); setIsQuickViewOpen(true); } : handleAddToCart} 
                isElixir={prod.category === 'elixires'} 
                onQuickView={(p) => { setSelectedProduct(p); setIsQuickViewOpen(true); }} 
              />
          ))}
          {products.filter(prod => activeCategory === 'todos' || prod.category === activeCategory).length === 0 && (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem', color: '#aaa' }}>
              No hay productos disponibles en esta categoría en este momento.
            </div>
          )}
        </div>
      </div>
      {isQuickViewOpen && selectedProduct && (
        <QuickViewModal 
          product={selectedProduct} 
          isElixir={selectedProduct.category === 'elixires'} 
          onClose={() => setIsQuickViewOpen(false)}
          onAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
};

export default Armeria;
