import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, onSnapshot, doc, updateDoc, deleteDoc, addDoc } from 'firebase/firestore';
import { Edit2, Trash2, Plus, EyeOff, Eye, X, Search, Settings, AlertTriangle } from 'lucide-react';
import AdminCategoriesModal from './AdminCategoriesModal';

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCategoriesModalOpen, setIsCategoriesModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [filterCategory, setFilterCategory] = useState('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [showLowStock, setShowLowStock] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: 0,
    cost: 0,
    expenses: 0,
    category: 'vestimenta',
    tag: 'Forja Local',
    images: '',
    sizes: '',
    status: 'active',
    isOffer: false,
    offerPrice: 0,
    isPreorder: false,
    stock: 0,
    minStock: 0,
    stockBySize: {},
    minStockBySize: {}
  });

  useEffect(() => {
    const unsubProducts = onSnapshot(collection(db, 'products'), (snapshot) => {
      const prods = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(prods);
    });
    const unsubCats = onSnapshot(collection(db, 'categories'), (snapshot) => {
      const cats = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setCategories(cats);
    });
    return () => {
      unsubProducts();
      unsubCats();
    };
  }, []);

  const handleOpenModal = (product = null) => {
    if (product) {
      setEditingProduct(product);
      setFormData({
        name: product.name,
        price: product.price,
        description: product.description || '',
        category: product.category,
        images: product.images ? product.images.join(', ') : '',
        sizes: product.sizes ? product.sizes.join(', ') : '',
        isOffer: product.isOffer || false,
        tag: product.tag || '',
        cost: product.cost || 0,
        expenses: product.expenses || 0,
        isPreorder: product.isPreorder || false,
        stock: product.stock || 0,
        minStock: product.minStock || 0,
        stockBySize: product.stockBySize || {},
        minStockBySize: product.minStockBySize || {}
      });
    } else {
      setEditingProduct(null);
      setFormData({
        name: '',
        price: '',
        description: '',
        category: '',
        images: '',
        sizes: '',
        isOffer: false,
        tag: '',
        cost: '',
        expenses: '',
        isPreorder: false,
        stock: 0,
        minStock: 0,
        stockBySize: {},
        minStockBySize: {}
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingProduct(null);
  };

  const uniqueCategories = [...new Set(products.map(p => p.category).filter(Boolean))];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const profitMargin = Number(formData.price) - Number(formData.cost) - Number(formData.expenses);
    
    const sizesArray = formData.sizes ? formData.sizes.split(',').map(s => s.trim()).filter(s => s) : [];
    
    const cleanedStockBySize = {};
    const cleanedMinStockBySize = {};
    sizesArray.forEach(size => {
      cleanedStockBySize[size] = Number(formData.stockBySize[size]) || 0;
      cleanedMinStockBySize[size] = Number(formData.minStockBySize[size]) || 0;
    });

    const productData = {
      ...formData,
      price: Number(formData.price),
      cost: Number(formData.cost),
      expenses: Number(formData.expenses),
      offerPrice: Number(formData.offerPrice),
      isPreorder: formData.isPreorder,
      stock: sizesArray.length > 0 ? sizesArray.reduce((sum, size) => sum + cleanedStockBySize[size], 0) : Number(formData.stock),
      minStock: sizesArray.length > 0 ? sizesArray.reduce((sum, size) => sum + cleanedMinStockBySize[size], 0) : Number(formData.minStock),
      stockBySize: cleanedStockBySize,
      minStockBySize: cleanedMinStockBySize,
      profitMargin,
      images: formData.images.split(',').map(s => s.trim()).filter(s => s),
      sizes: sizesArray
    };

    try {
      if (editingProduct) {
        await updateDoc(doc(db, 'products', editingProduct.id), productData);
      } else {
        await addDoc(collection(db, 'products'), { ...productData, createdAt: new Date() });
      }
      handleCloseModal();
    } catch (error) {
      console.error("Error guardando producto:", error);
      alert("Hubo un error al guardar el producto.");
    }
  };

  const toggleStatus = async (id, currentStatus) => {
    try {
      await updateDoc(doc(db, 'products', id), {
        status: currentStatus === 'active' ? 'discontinued' : 'active'
      });
    } catch (error) {
      console.error("Error actualizando estado:", error);
    }
  };

  const filteredProducts = products.filter(p => {
    const matchesCategory = filterCategory === 'todos' || 
      (p.category && filterCategory && p.category.toLowerCase().trim() === filterCategory.toLowerCase().trim());
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    let matchesStock = true;
    if (showLowStock) {
      if (p.isPreorder) matchesStock = false;
      else if (p.sizes && p.sizes.length > 0) {
        matchesStock = p.sizes.some(size => (p.stockBySize?.[size] || 0) <= (p.minStockBySize?.[size] || 0));
      } else {
        matchesStock = (p.stock || 0) <= (p.minStock || 0);
      }
    }

    return matchesCategory && matchesSearch && matchesStock;
  });

  const sizesArrayForRender = formData.sizes ? formData.sizes.split(',').map(s => s.trim()).filter(s => s) : [];

  return (
    <div className="admin-products">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
        
        {/* Superior: Título y Acciones Principales */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <h3 style={{ margin: 0 }}>Catálogo de Armería</h3>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button className="admin-btn-primary" onClick={() => handleOpenModal()}>
              <Plus size={18} /> Nuevo Producto
            </button>
          </div>
        </div>

        {/* Inferior: Barra de Búsqueda y Filtros */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', backgroundColor: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ position: 'relative', flex: '1', minWidth: '250px' }}>
            <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input 
              type="text" 
              placeholder="Buscar producto por nombre..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ 
                width: '100%', 
                padding: '0.8rem 1rem 0.8rem 3rem', 
                borderRadius: '8px', 
                border: '1px solid var(--border-color)', 
                backgroundColor: 'rgba(0,0,0,0.5)', 
                color: 'var(--text-light)', 
                outline: 'none',
                fontSize: '0.9rem',
                transition: 'all 0.3s ease'
              }}
              onFocus={(e) => { e.target.style.borderColor = 'var(--accent-gold)'; }}
              onBlur={(e) => { e.target.style.borderColor = 'var(--border-color)'; }}
            />
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'stretch', flexWrap: 'wrap' }}>
            <button
              onClick={() => setShowLowStock(!showLowStock)}
              style={{
                background: showLowStock ? 'rgba(212, 175, 55, 0.2)' : 'rgba(255,255,255,0.05)',
                border: `1px solid ${showLowStock ? 'var(--accent-gold)' : 'var(--border-color)'}`,
                borderRadius: '8px',
                color: showLowStock ? 'var(--accent-gold)' : 'var(--text-muted)',
                padding: '0 1rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s ease',
                fontWeight: showLowStock ? 'bold' : 'normal'
              }}
              title="Filtrar Alertas de Stock"
            >
              <AlertTriangle size={18} /> {showLowStock ? 'Ocultar Alertas' : 'Alertas de Stock'}
            </button>
            <select 
              value={filterCategory} 
              onChange={(e) => setFilterCategory(e.target.value)}
              className="admin-input"
              style={{ width: 'auto', minWidth: '150px', margin: 0 }}
            >
              <option value="todos">Todas las Categorías</option>
              {categories.map(cat => (
                <option key={cat.id} value={cat.name}>{cat.name.toUpperCase()}</option>
              ))}
            </select>
            <button 
              onClick={() => setIsCategoriesModalOpen(true)}
              style={{ 
                background: 'rgba(255,255,255,0.05)', 
                border: '1px solid var(--border-color)', 
                borderRadius: '8px', 
                color: 'var(--text-muted)', 
                padding: '0 1rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
              title="Gestionar Categorías"
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent-gold)'; e.currentTarget.style.borderColor = 'var(--accent-gold)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border-color)'; }}
            >
              <Settings size={20} />
            </button>
          </div>
        </div>

      </div>

      <div className="admin-card" style={{ padding: 0, overflow: 'hidden' }}>
        <div className="admin-responsive-grid">
          <div className="admin-responsive-row products-row header">
            <div className="admin-responsive-cell">Producto</div>
            <div className="admin-responsive-cell">Categoría</div>
            <div className="admin-responsive-cell">Precio</div>
            <div className="admin-responsive-cell">Costo</div>
            <div className="admin-responsive-cell">Stock</div>
            <div className="admin-responsive-cell">Estado</div>
            <div className="admin-responsive-cell">Acciones</div>
          </div>
          {filteredProducts.map(product => (
            <div key={product.id} className="admin-responsive-row products-row" style={{ opacity: product.status === 'active' ? 1 : 0.5 }}>
              <div className="admin-responsive-cell" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img src={product.images && product.images[0] ? product.images[0] : ''} alt={product.name} style={{ width: 40, height: 40, objectFit: 'cover', borderRadius: 4, backgroundColor: 'var(--border-color)' }} />
                <div>
                  <div style={{ fontWeight: 600 }}>{product.name}</div>
                  {product.isOffer && <span style={{ fontSize: '0.7rem', color: 'var(--accent-gold)', border: '1px solid var(--accent-gold)', padding: '2px 4px', borderRadius: 2 }}>EN OFERTA</span>}
                </div>
              </div>
              <div className="admin-responsive-cell">
                <span className="mobile-label">Categoría</span>
                <div>{product.category}</div>
              </div>
              <div className="admin-responsive-cell">
                <span className="mobile-label">Precio</span>
                <div>${product.price}</div>
              </div>
              <div className="admin-responsive-cell">
                <span className="mobile-label">Costo</span>
                <div style={{ color: '#ff6b6b' }}>${product.cost}</div>
              </div>
              <div className="admin-responsive-cell">
                <span className="mobile-label">Stock</span>
                <div>
                  {product.isPreorder ? (
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Por Encargo</span>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span style={{ fontWeight: 'bold', color: product.stock <= product.minStock ? '#f87171' : 'var(--text-light)' }}>
                        {product.stock || 0} u.
                      </span>
                      {product.sizes && product.sizes.length > 0 && (
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                          {product.sizes.map(s => {
                            const st = product.stockBySize?.[s] || 0;
                            const min = product.minStockBySize?.[s] || 0;
                            return st <= min ? <span key={s} style={{ color: '#f87171', marginRight: '4px' }}>{s}:{st}</span> : null;
                          })}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
              <div className="admin-responsive-cell">
                <span className="mobile-label">Estado</span>
                <span style={{ 
                  padding: '4px 8px', 
                  borderRadius: 4, 
                  fontSize: '0.8rem',
                  backgroundColor: product.status === 'active' ? 'rgba(0, 255, 0, 0.1)' : 'rgba(255, 0, 0, 0.1)',
                  color: product.status === 'active' ? '#4ade80' : '#f87171'
                }}>
                  {product.status === 'active' ? 'Activo' : 'Descontinuado'}
                </span>
              </div>
              <div className="admin-responsive-cell" style={{ justifyContent: 'flex-end' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button onClick={() => handleOpenModal(product)} style={{ background: 'transparent', border: 'none', color: '#60a5fa', cursor: 'pointer', padding: '0.2rem' }} title="Editar">
                    <Edit2 size={20} />
                  </button>
                  <button onClick={() => toggleStatus(product.id, product.status)} style={{ background: 'transparent', border: 'none', color: product.status === 'active' ? '#f87171' : '#4ade80', cursor: 'pointer', padding: '0.2rem' }} title={product.status === 'active' ? 'Descontinuar' : 'Activar'}>
                    {product.status === 'active' ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
            </div>
          ))}
          {filteredProducts.length === 0 && (
            <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
              No hay productos para mostrar en esta categoría. Usa el panel de Migración en Ajustes para cargar los iniciales o agrega uno nuevo.
            </div>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'var(--overlay-dark)', zIndex: 1000, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
          <div className="admin-card" style={{ width: '100%', maxWidth: '800px', maxHeight: '90vh', overflowY: 'auto', position: 'relative' }}>
            <h3 style={{ marginTop: 0, borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', marginBottom: '1.5rem', paddingRight: '2rem' }}>
              {editingProduct ? 'Editar Producto' : 'Nuevo Producto'}
            </h3>
            <button type="button" onClick={() => setIsModalOpen(false)} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.5rem', borderRadius: '50%', transition: 'background-color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
              <X size={24} />
            </button>
            <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              
              {/* Sección 1: Información Principal */}
              <div style={{ backgroundColor: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <h4 style={{ color: 'var(--accent-gold)', marginTop: 0, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', paddingBottom: '0.5rem' }}>
                  1. Información Básica
                </h4>
                <div className="admin-form-grid">
                  <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                    <label className="form-label">Nombre del Producto</label>
                    <input type="text" className="admin-input" name="name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Categoría</label>
                    <select 
                      className="admin-input" 
                      name="category" 
                      value={formData.category} 
                      onChange={handleChange} 
                      required 
                    >
                      <option value="" disabled>Selecciona una categoría...</option>
                      {categories.map(cat => (
                        <option key={cat.id} value={cat.name}>{cat.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Etiqueta (Tag)</label>
                    <input type="text" className="admin-input" name="tag" value={formData.tag} onChange={handleChange} placeholder="Ej: Forja Local, Por Encargo" />
                  </div>
                  <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                    <label className="form-label">Descripción</label>
                    <textarea className="admin-input" name="description" value={formData.description} onChange={handleChange} rows="2"></textarea>
                  </div>
                </div>
              </div>

              {/* Sección 2: Finanzas */}
              <div style={{ backgroundColor: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <h4 style={{ color: 'var(--accent-gold)', marginTop: 0, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', paddingBottom: '0.5rem' }}>
                  2. Precios y Costos
                </h4>
                <div className="admin-form-grid">
                  <div className="form-group">
                    <label className="form-label">Precio Público ($)</label>
                    <input type="number" className="admin-input" name="price" value={formData.price} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Costo de Compra ($)</label>
                    <input type="number" className="admin-input" name="cost" value={formData.cost} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Gastos Adicionales ($) <small>(Envío, Empaquetado)</small></label>
                    <input type="number" className="admin-input" name="expenses" value={formData.expenses} onChange={handleChange} />
                  </div>
                  <div className="form-group" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                    <label className="admin-input" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer', margin: 0, borderColor: formData.isOffer ? 'var(--accent-gold)' : 'var(--border-color)', transition: 'border-color 0.3s ease' }}>
                      <input type="checkbox" name="isOffer" checked={formData.isOffer} onChange={handleChange} style={{ width: '18px', height: '18px', accentColor: 'var(--accent-gold)', cursor: 'pointer' }} />
                      <span style={{ color: formData.isOffer ? 'var(--accent-gold)' : 'var(--text-light)', fontWeight: formData.isOffer ? 'bold' : 'normal', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1px' }}>Activar Oferta Especial</span>
                    </label>
                  </div>
                  {formData.isOffer && (
                    <div className="form-group" style={{ gridColumn: '1 / -1', padding: '1rem', borderLeft: '3px solid var(--accent-gold)', backgroundColor: 'rgba(212, 175, 55, 0.05)' }}>
                      <label className="form-label text-gold">Precio de Oferta ($)</label>
                      <input type="number" className="admin-input" name="offerPrice" value={formData.offerPrice} onChange={handleChange} style={{ maxWidth: '300px' }} />
                    </div>
                  )}
                </div>
              </div>

              {/* Sección 3: Inventario */}
              <div style={{ backgroundColor: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <h4 style={{ color: 'var(--accent-gold)', marginTop: 0, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', paddingBottom: '0.5rem' }}>
                  3. Inventario y Archivos
                </h4>
                <div className="admin-form-grid">
                  <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                    <label className="form-label">URLs de Imágenes (separadas por coma)</label>
                    <textarea className="admin-input" name="images" value={formData.images} onChange={handleChange} rows="2" placeholder="Ej: https://.../img1.jpg, https://.../img2.jpg"></textarea>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Talles / Medidas (separados por coma)</label>
                    <input type="text" className="admin-input" name="sizes" value={formData.sizes} onChange={handleChange} placeholder="Ej: S, M, L, XL ó 12oz, 14oz" />
                  </div>
                  <div className="form-group" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                    <label className="admin-input" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer', margin: 0, borderColor: formData.isPreorder ? 'var(--accent-gold)' : 'var(--border-color)', transition: 'border-color 0.3s ease' }}>
                      <input type="checkbox" name="isPreorder" checked={formData.isPreorder} onChange={handleChange} style={{ width: '18px', height: '18px', accentColor: 'var(--accent-gold)', cursor: 'pointer' }} />
                      <span style={{ color: formData.isPreorder ? 'var(--accent-gold)' : 'var(--text-light)', fontWeight: formData.isPreorder ? 'bold' : 'normal', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1px' }}>Por Encargo (Sin stock)</span>
                    </label>
                  </div>
                  
                  {sizesArrayForRender.length > 0 ? (
                    <div className="form-group" style={{ gridColumn: '1 / -1', backgroundColor: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <label className="form-label" style={{ marginBottom: '1rem', color: 'var(--accent-gold)' }}>Stock por Talle / Medida</label>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
                        {sizesArrayForRender.map(size => (
                          <div key={size} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '6px', backgroundColor: 'var(--bg-dark)' }}>
                            <span style={{ fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Talle: {size}</span>
                            <div>
                              <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Stock Actual</label>
                              <input 
                                type="number" 
                                className="admin-input" 
                                style={{ marginTop: '0.25rem', padding: '0.5rem' }}
                                value={formData.stockBySize[size] || 0} 
                                onChange={(e) => setFormData(prev => ({ ...prev, stockBySize: { ...prev.stockBySize, [size]: e.target.value } }))} 
                              />
                            </div>
                            <div>
                              <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Stock Mínimo</label>
                              <input 
                                type="number" 
                                className="admin-input" 
                                style={{ marginTop: '0.25rem', padding: '0.5rem' }}
                                value={formData.minStockBySize[size] || 0} 
                                onChange={(e) => setFormData(prev => ({ ...prev, minStockBySize: { ...prev.minStockBySize, [size]: e.target.value } }))} 
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="form-group">
                        <label className="form-label">Stock Actual General</label>
                        <input type="number" className="admin-input" name="stock" value={formData.stock} onChange={handleChange} required={!formData.isPreorder} />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Stock Mínimo General</label>
                        <input type="number" className="admin-input" name="minStock" value={formData.minStock} onChange={handleChange} required={!formData.isPreorder} />
                      </div>
                    </>
                  )}
                </div>
              </div>


              <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1rem' }}>
                <button type="button" className="admin-btn-secondary" onClick={handleCloseModal}>Cancelar</button>
                <button type="submit" className="admin-btn-primary">Guardar Producto</button>
              </div>
            </form>
          </div>
        </div>
      )}
      
      <AdminCategoriesModal 
        isOpen={isCategoriesModalOpen} 
        onClose={() => setIsCategoriesModalOpen(false)} 
        products={products}
      />
    </div>
  );
};

export default AdminProducts;
