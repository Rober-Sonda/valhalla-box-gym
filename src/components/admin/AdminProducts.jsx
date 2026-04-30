import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, onSnapshot, doc, updateDoc, deleteDoc, addDoc } from 'firebase/firestore';
import { Edit2, Trash2, Plus, EyeOff, Eye } from 'lucide-react';

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [filterCategory, setFilterCategory] = useState('todos');

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
    isPreorder: false
  });

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'products'), (snapshot) => {
      const prods = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(prods);
    });
    return () => unsub();
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
        isPreorder: product.isPreorder || false
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
        isPreorder: false
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
    
    const productData = {
      ...formData,
      price: Number(formData.price),
      cost: Number(formData.cost),
      expenses: Number(formData.expenses),
      offerPrice: Number(formData.offerPrice),
      isPreorder: formData.isPreorder,
      profitMargin,
      images: formData.images.split(',').map(s => s.trim()).filter(s => s),
      sizes: formData.sizes ? formData.sizes.split(',').map(s => s.trim()).filter(s => s) : []
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

  const filteredProducts = products.filter(p => filterCategory === 'todos' || p.category === filterCategory);

  return (
    <div className="admin-products">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <h3 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '1rem' }}>
          Catálogo de Armería
          <select 
            value={filterCategory} 
            onChange={(e) => setFilterCategory(e.target.value)}
            className="admin-input"
            style={{ width: 'auto', margin: 0, padding: '0.4rem 1rem', fontSize: '0.9rem' }}
          >
            <option value="todos">Todas las categorías</option>
            {uniqueCategories.map(cat => (
              <option key={cat} value={cat}>{cat.toUpperCase()}</option>
            ))}
          </select>
        </h3>
        <button className="admin-btn-primary" onClick={() => handleOpenModal()}>
          <Plus size={18} /> Agregar Producto
        </button>
      </div>

      <div className="admin-card" style={{ padding: 0, overflow: 'hidden' }}>
        <div className="table-responsive">
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '800px' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--bg-dark)', borderBottom: '1px solid var(--border-color)' }}>
                <th style={{ padding: '1rem' }}>Producto</th>
                <th style={{ padding: '1rem' }}>Categoría</th>
                <th style={{ padding: '1rem' }}>Precio</th>
                <th style={{ padding: '1rem' }}>Costo</th>
                <th style={{ padding: '1rem' }}>Estado</th>
                <th style={{ padding: '1rem' }}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map(product => (
                <tr key={product.id} style={{ borderBottom: '1px solid var(--border-color)', opacity: product.status === 'active' ? 1 : 0.5 }}>
                  <td style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <img src={product.images && product.images[0] ? product.images[0] : ''} alt={product.name} style={{ width: 40, height: 40, objectFit: 'cover', borderRadius: 4, backgroundColor: 'var(--border-color)' }} />
                    <div>
                      <div style={{ fontWeight: 600 }}>{product.name}</div>
                      {product.isOffer && <span style={{ fontSize: '0.7rem', color: 'var(--accent-gold)', border: '1px solid var(--accent-gold)', padding: '2px 4px', borderRadius: 2 }}>EN OFERTA</span>}
                    </div>
                  </td>
                  <td style={{ padding: '1rem' }}>{product.category}</td>
                  <td style={{ padding: '1rem' }}>${product.price}</td>
                  <td style={{ padding: '1rem', color: '#ff6b6b' }}>${product.cost}</td>
                  <td style={{ padding: '1rem' }}>
                    <span style={{ 
                      padding: '4px 8px', 
                      borderRadius: 4, 
                      fontSize: '0.8rem',
                      backgroundColor: product.status === 'active' ? 'rgba(0, 255, 0, 0.1)' : 'rgba(255, 0, 0, 0.1)',
                      color: product.status === 'active' ? '#4ade80' : '#f87171'
                    }}>
                      {product.status === 'active' ? 'Activo' : 'Descontinuado'}
                    </span>
                  </td>
                  <td style={{ padding: '1rem' }}>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button onClick={() => handleOpenModal(product)} style={{ background: 'transparent', border: 'none', color: '#60a5fa', cursor: 'pointer' }} title="Editar">
                        <Edit2 size={18} />
                      </button>
                      <button onClick={() => toggleStatus(product.id, product.status)} style={{ background: 'transparent', border: 'none', color: product.status === 'active' ? '#f87171' : '#4ade80', cursor: 'pointer' }} title={product.status === 'active' ? 'Descontinuar' : 'Activar'}>
                        {product.status === 'active' ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredProducts.length === 0 && (
                <tr>
                  <td colSpan="6" style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                    No hay productos para mostrar en esta categoría. Usa el panel de Migración en Ajustes para cargar los iniciales o agrega uno nuevo.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'var(--overlay-dark)', zIndex: 1000, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
          <div className="admin-card" style={{ width: '100%', maxWidth: '800px', maxHeight: '90vh', overflowY: 'auto' }}>
            <h3 style={{ marginTop: 0, borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
              {editingProduct ? 'Editar Producto' : 'Nuevo Producto'}
            </h3>
            <form onSubmit={handleSave} className="admin-form-grid">
              <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                <label className="form-label">Nombre del Producto</label>
                <input type="text" className="admin-input" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                <label className="form-label">Descripción</label>
                <textarea className="admin-input" name="description" value={formData.description} onChange={handleChange} rows="3"></textarea>
              </div>
              
              <div className="form-group">
                <label className="form-label">Precio Público ($)</label>
                <input type="number" className="admin-input" name="price" value={formData.price} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label className="form-label">Costo de Compra ($)</label>
                <input type="number" className="admin-input" name="cost" value={formData.cost} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label className="form-label">Gastos Adicionales ($) <small>(Ej. Envío, Empaquetado)</small></label>
                <input type="number" className="admin-input" name="expenses" value={formData.expenses} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label className="form-label">Categoría</label>
                <input 
                  type="text" 
                  className="admin-input" 
                  name="category" 
                  value={formData.category} 
                  onChange={handleChange} 
                  list="admin-categories-list" 
                  placeholder="Elige o escribe una nueva..." 
                  required 
                />
                <datalist id="admin-categories-list">
                  {uniqueCategories.map(cat => (
                    <option key={cat} value={cat} />
                  ))}
                </datalist>
              </div>

              <div className="form-group">
                <label className="form-label">Etiqueta (Tag)</label>
                <input type="text" className="admin-input" name="tag" value={formData.tag} onChange={handleChange} placeholder="Ej: Forja Local, Por Encargo" />
              </div>
              <div className="form-group">
                <label className="form-label">Talles (separados por coma)</label>
                <input type="text" className="admin-input" name="sizes" value={formData.sizes} onChange={handleChange} placeholder="Ej: S, M, L, XL" />
              </div>

              <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                <label className="form-label">URLs de Imágenes (separadas por coma)</label>
                <textarea className="admin-input" name="images" value={formData.images} onChange={handleChange} rows="2" placeholder="Ej: https://.../img1.jpg, https://.../img2.jpg"></textarea>
              </div>

              <div className="form-group" style={{ gridColumn: '1 / -1', padding: '1rem', backgroundColor: 'var(--bg-dark)', borderRadius: 4, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                  <input type="checkbox" name="isPreorder" checked={formData.isPreorder} onChange={handleChange} />
                  <strong>Marcar como "Por Encargo" (Sin stock inmediato)</strong>
                </label>

                <div>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                    <input type="checkbox" name="isOffer" checked={formData.isOffer} onChange={handleChange} />
                    <strong>Poner en Oferta Especial</strong>
                  </label>
                  {formData.isOffer && (
                    <div style={{ marginTop: '1rem' }}>
                      <label className="form-label">Precio de Oferta ($)</label>
                      <input type="number" className="admin-input" name="offerPrice" value={formData.offerPrice} onChange={handleChange} />
                    </div>
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
    </div>
  );
};

export default AdminProducts;
