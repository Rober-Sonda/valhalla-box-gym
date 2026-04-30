import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, ChevronLeft, ChevronRight, X, Search } from 'lucide-react';
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
            if (product.sizes && product.sizes.length > 0) {
              onQuickView(product);
            } else {
              handleAddToCart(product);
            }
          }}
        >
          {isElixir ? 'Tomar Elixir' : (product.sizes && product.sizes.length > 0 ? 'Elegir Medida' : ((product.isPreorder || product.tag === 'Por Encargo') ? 'Encargar Botín' : 'Agregar al Botín'))}
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
              if (product.sizes && product.sizes.length > 0 && !selectedSize) {
                alert('Por favor, selecciona una medida (talle, oz, etc.) antes de agregar al botín.');
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
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 12;

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  // Reset page when category or search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchQuery]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const qProducts = query(collection(db, 'products'), where('status', '==', 'active'));
    const unsubProducts = onSnapshot(qProducts, (snapshot) => {
      const fetched = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(fetched);
    });

    const unsubCategories = onSnapshot(collection(db, 'categories'), (snapshot) => {
      const fetched = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setCategories(fetched);
    });

    return () => {
      unsubProducts();
      unsubCategories();
    };
  }, []);

  const handleAddToCart = (product) => {
    if (!currentUser) {
      setIsAuthModalOpen(true);
      return;
    }
    addToCart({ ...product, price: parseFloat(product.price) });
  };

  const activeCategories = categories.filter(c => c.status === 'active').map(c => c.name);

  const activeCategoriesLower = activeCategories.map(c => c.toLowerCase().trim());

  // Fallback to legacy categories if the categories collection is empty, otherwise use DB active categories
  const displayCategories = activeCategories.length > 0 
    ? activeCategories 
    : [...new Set(products.map(p => p.category).filter(Boolean))];

  const filteredProducts = products.filter(prod => {
    const prodCat = prod.category ? prod.category.toLowerCase().trim() : '';
    // Si la DB tiene categorías cargadas, descartar el producto si su categoría no está activa
    if (activeCategories.length > 0 && !activeCategoriesLower.includes(prodCat)) {
      return false;
    }

    const matchesCategory = activeCategory === 'todos' || 
      (prodCat === activeCategory.toLowerCase().trim());
    const matchesSearch = prod.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          (prod.description && prod.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

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
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '500px', display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
            <Search size={20} style={{ position: 'absolute', left: '1rem', color: 'var(--text-muted)', zIndex: 5 }} />
            <input 
              type="text" 
              placeholder="Buscar armamento por nombre..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ 
                width: '100%', 
                padding: '1rem 1rem 1rem 3rem', 
                borderRadius: '8px', 
                border: '1px solid var(--border-color)', 
                backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                color: 'var(--text-light)', 
                outline: 'none',
                fontSize: '1rem',
                fontFamily: 'inherit',
                transition: 'all 0.3s ease'
              }}
              onFocus={(e) => { 
                e.target.style.borderColor = 'var(--accent-gold)'; 
                e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
              }}
              onBlur={(e) => { 
                e.target.style.borderColor = 'var(--border-color)'; 
                e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
              }}
            />
          </div>
          
          <div className="armeria-tabs">
            <button 
              className={`armeria-tab-btn ${activeCategory === 'todos' ? 'active' : ''}`} 
              onClick={() => setActiveCategory('todos')}
            >
              TODOS
            </button>
            {displayCategories.map(cat => (
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
        </div>
        
        <div className="armeria-grid" style={{ marginTop: '3rem' }}>
          {paginatedProducts.map((prod) => (
            <ProductCard 
              key={prod.id} 
              product={prod.isOffer ? { ...prod, price: prod.offerPrice } : prod} 
              handleAddToCart={prod.sizes?.length > 0 ? () => { setSelectedProduct(prod); setIsQuickViewOpen(true); } : handleAddToCart} 
              isElixir={prod.category === 'elixires'} 
              onQuickView={(p) => { setSelectedProduct(p); setIsQuickViewOpen(true); }} 
            />
          ))}
          {filteredProducts.length === 0 && (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem', color: '#aaa' }}>
              No hay productos que coincidan con tu búsqueda.
            </div>
          )}
        </div>

        {totalPages > 1 && (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginTop: '3rem' }}>
            <button 
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              style={{ padding: '0.5rem 1rem', backgroundColor: currentPage === 1 ? 'transparent' : 'var(--accent-gold)', color: currentPage === 1 ? 'var(--text-muted)' : '#000', border: '1px solid var(--accent-gold)', borderRadius: '4px', cursor: currentPage === 1 ? 'not-allowed' : 'pointer', fontWeight: 'bold' }}
            >
              Anterior
            </button>
            <span style={{ color: 'var(--text-light)' }}>Página {currentPage} de {totalPages}</span>
            <button 
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              style={{ padding: '0.5rem 1rem', backgroundColor: currentPage === totalPages ? 'transparent' : 'var(--accent-gold)', color: currentPage === totalPages ? 'var(--text-muted)' : '#000', border: '1px solid var(--accent-gold)', borderRadius: '4px', cursor: currentPage === totalPages ? 'not-allowed' : 'pointer', fontWeight: 'bold' }}
            >
              Siguiente
            </button>
          </div>
        )}
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
