import React, { useState, useEffect } from 'react';
import { X, Plus, Edit2, Eye, EyeOff } from 'lucide-react';
import { db } from '../../firebase';
import { collection, onSnapshot, addDoc, updateDoc, doc } from 'firebase/firestore';

const AdminCategoriesModal = ({ isOpen, onClose, products = [] }) => {
  const [categories, setCategories] = useState([]);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState('');

  useEffect(() => {
    if (!isOpen) return;
    const unsub = onSnapshot(collection(db, 'categories'), (snapshot) => {
      const cats = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      cats.sort((a, b) => a.name.localeCompare(b.name));
      setCategories(cats);
    });
    return () => unsub();
  }, [isOpen]);

  const handleAddCategory = async (e) => {
    e.preventDefault();
    if (!newCategoryName.trim()) return;
    try {
      await addDoc(collection(db, 'categories'), {
        name: newCategoryName.trim(),
        status: 'active',
        createdAt: new Date()
      });
      setNewCategoryName('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleToggleStatus = async (id, currentStatus) => {
    try {
      await updateDoc(doc(db, 'categories', id), {
        status: currentStatus === 'active' ? 'inactive' : 'active'
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleSaveEdit = async (id) => {
    if (!editName.trim()) return;
    try {
      await updateDoc(doc(db, 'categories', id), {
        name: editName.trim()
      });
      setEditingId(null);
      setEditName('');
    } catch (err) {
      console.error(err);
    }
  };

  const syncLegacyCategories = async () => {
    const existingCatNames = categories.map(c => c.name.toLowerCase());
    const uniqueLegacyCats = [...new Set(products.map(p => p.category).filter(Boolean))];
    
    let addedCount = 0;
    for (const catName of uniqueLegacyCats) {
      if (!existingCatNames.includes(catName.toLowerCase())) {
        try {
          await addDoc(collection(db, 'categories'), {
            name: catName,
            status: 'active',
            createdAt: new Date()
          });
          addedCount++;
        } catch (err) {
          console.error(err);
        }
      }
    }
    
    if (addedCount > 0) {
      alert(`Se han sincronizado ${addedCount} categorías antiguas exitosamente.`);
    } else {
      alert('Todas las categorías de tus productos ya están registradas.');
    }
  };

  if (!isOpen) return null;

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'var(--overlay-dark)', zIndex: 1100, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
      <div className="admin-card" style={{ width: '100%', maxWidth: '500px', maxHeight: '90vh', overflowY: 'auto', position: 'relative', border: '1px solid var(--accent-gold)' }}>
        <h3 style={{ marginTop: 0, borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          Gestionar Categorías
          <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
            <X size={24} />
          </button>
        </h3>

        {products.length > 0 && categories.length < 10 && (
          <div style={{ marginBottom: '1.5rem', padding: '1rem', backgroundColor: 'rgba(212, 175, 55, 0.1)', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
            <p style={{ margin: '0 0 0.8rem 0', fontSize: '0.9rem', color: 'var(--text-light)' }}>
              ¿Tienes productos antiguos con categorías no registradas aquí?
            </p>
            <button onClick={syncLegacyCategories} className="admin-btn-secondary" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              Sincronizar Categorías Antiguas
            </button>
          </div>
        )}

        <form onSubmit={handleAddCategory} style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem' }}>
          <input 
            type="text" 
            className="admin-input" 
            placeholder="Nueva categoría..." 
            value={newCategoryName} 
            onChange={(e) => setNewCategoryName(e.target.value)} 
            style={{ flex: 1 }}
          />
          <button type="submit" className="admin-btn-primary" style={{ padding: '0.5rem 1rem' }}>
            <Plus size={18} />
          </button>
        </form>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {categories.map(cat => (
            <div key={cat.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', backgroundColor: 'rgba(0,0,0,0.3)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', opacity: cat.status === 'active' ? 1 : 0.5 }}>
              
              {editingId === cat.id ? (
                <input 
                  type="text" 
                  className="admin-input" 
                  value={editName} 
                  onChange={(e) => setEditName(e.target.value)} 
                  autoFocus
                  onBlur={() => handleSaveEdit(cat.id)}
                  onKeyDown={(e) => { if (e.key === 'Enter') handleSaveEdit(cat.id) }}
                />
              ) : (
                <span style={{ fontWeight: 'bold' }}>{cat.name}</span>
              )}

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button 
                  onClick={() => { setEditingId(cat.id); setEditName(cat.name); }} 
                  style={{ background: 'transparent', border: 'none', color: '#60a5fa', cursor: 'pointer', padding: '4px' }}
                >
                  <Edit2 size={16} />
                </button>
                <button 
                  onClick={() => handleToggleStatus(cat.id, cat.status)} 
                  style={{ background: 'transparent', border: 'none', color: cat.status === 'active' ? '#f87171' : '#4ade80', cursor: 'pointer', padding: '4px' }}
                  title={cat.status === 'active' ? 'Ocultar Categoría' : 'Activar Categoría'}
                >
                  {cat.status === 'active' ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
          ))}
          {categories.length === 0 && (
            <p style={{ textAlign: 'center', color: 'var(--text-muted)' }}>No hay categorías registradas.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminCategoriesModal;
