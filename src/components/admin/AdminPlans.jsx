import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, onSnapshot, doc, updateDoc, deleteDoc, addDoc, setDoc } from 'firebase/firestore';
import { storage } from '../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Edit2, Trash2, Plus, EyeOff, Eye, UploadCloud, X } from 'lucide-react';
import { EpicShield, EpicSword, EpicDoubleAxe, EpicBerserker, StockShield, StockAxeShield, StockHammers, StockHelmet } from '../EpicIcons';

const iconMap = {
  'StockShield': <StockShield width="40" height="40" />,
  'StockAxeShield': <StockAxeShield width="40" height="40" />,
  'StockHammers': <StockHammers width="40" height="40" />,
  'StockHelmet': <StockHelmet width="40" height="40" />,
  'EpicShield': <EpicShield width="40" height="40" />,
  'EpicSword': <EpicSword width="40" height="40" />,
  'EpicDoubleAxe': <EpicDoubleAxe width="40" height="40" />,
  'EpicBerserker': <EpicBerserker width="40" height="40" />
};

const iconNames = Object.keys(iconMap);

const AdminPlans = () => {
  const [plans, setPlans] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPlan, setEditingPlan] = useState(null);

  const [formData, setFormData] = useState({
    id: '', // only used if creating new to specify doc id, otherwise random
    name: '',
    desc: '',
    price: 0,
    period: '/mes',
    features: '',
    btnClass: 'btn-outline',
    popular: false,
    weapon: 'StockShield',
    imageUrl: '',
    status: 'active'
  });
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'plans'), (snapshot) => {
      const p = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPlans(p);
    });
    return () => unsub();
  }, []);

  const handleOpenModal = (plan = null) => {
    if (plan) {
      setEditingPlan(plan);
      setFormData({
        id: plan.id,
        name: plan.name || '',
        desc: plan.desc || '',
        price: plan.price || 0,
        period: plan.period || '/mes',
        features: Array.isArray(plan.features) ? plan.features.join('\n') : (plan.features || ''),
        btnClass: plan.btnClass || 'btn-outline',
        popular: plan.popular || false,
        weapon: plan.weapon || 'StockShield',
        imageUrl: plan.imageUrl || '',
        status: plan.status || 'active'
      });
    } else {
      setEditingPlan(null);
      setFormData({
        id: '', name: '', desc: '', price: 0, period: '/mes', features: '', btnClass: 'btn-outline', popular: false, weapon: 'StockShield', imageUrl: '', status: 'active'
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingPlan(null);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    
    const planData = {
      name: formData.name,
      desc: formData.desc,
      price: Number(formData.price),
      period: formData.period,
      features: formData.features.split('\n').map(s => s.trim()).filter(s => s),
      btnClass: formData.btnClass,
      popular: formData.popular,
      weapon: formData.weapon,
      imageUrl: formData.imageUrl,
      status: formData.status
    };

    try {
      if (editingPlan) {
        await updateDoc(doc(db, 'plans', editingPlan.id), planData);
      } else {
        const docId = formData.id.trim() !== '' ? formData.id.trim().toLowerCase() : formData.name.toLowerCase().replace(/\s+/g, '-');
        await setDoc(doc(db, 'plans', docId), { ...planData, createdAt: new Date() });
      }
      handleCloseModal();
    } catch (error) {
      console.error("Error guardando tarifa:", error);
      alert("Hubo un error al guardar la tarifa.");
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsUploading(true);
    const storageRef = ref(storage, `plans/${Date.now()}_${file.name}`);
    try {
      const snapshot = await uploadBytes(storageRef, file);
      const url = await getDownloadURL(snapshot.ref);
      setFormData(prev => ({ ...prev, imageUrl: url }));
    } catch (err) {
      console.error("Error subiendo imagen:", err);
      alert('Error al subir la imagen. Verifica que el Storage de Firebase esté configurado o intenta con otra imagen.');
    } finally {
      setIsUploading(false);
    }
  };

  const toggleStatus = async (id, currentStatus) => {
    try {
      await updateDoc(doc(db, 'plans', id), {
        status: currentStatus === 'active' ? 'discontinued' : 'active'
      });
    } catch (error) {
      console.error("Error actualizando estado:", error);
    }
  };

  return (
    <div className="admin-plans">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0 0 1.5rem 0' }}>
        <h3 style={{ margin: 0 }}>Gestión de Tarifas e Inscripciones</h3>
        <button className="admin-btn-primary" onClick={() => handleOpenModal()}>
          <Plus size={18} /> Agregar Tarifa
        </button>
      </div>

      <div className="admin-card" style={{ padding: 0, overflow: 'hidden' }}>
        <div className="admin-responsive-grid">
          <div className="admin-responsive-row header">
            <div className="admin-responsive-cell">Plan</div>
            <div className="admin-responsive-cell">Precio</div>
            <div className="admin-responsive-cell">Ícono</div>
            <div className="admin-responsive-cell">Estado</div>
            <div className="admin-responsive-cell">Acciones</div>
          </div>
          {plans.map(plan => (
            <div key={plan.id} className="admin-responsive-row" style={{ opacity: plan.status === 'active' ? 1 : 0.5 }}>
              <div className="admin-responsive-cell">
                <span className="mobile-label">Plan</span>
                <div>
                  <div style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    {plan.name}
                    {plan.popular && <span style={{ fontSize: '0.6rem', background: 'var(--accent-gold)', color: '#000', padding: '2px 4px', borderRadius: 2 }}>POPULAR</span>}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{plan.desc}</div>
                </div>
              </div>
              <div className="admin-responsive-cell">
                <span className="mobile-label">Precio</span>
                <div>${plan.price} {plan.period}</div>
              </div>
              <div className="admin-responsive-cell">
                <span className="mobile-label">Ícono</span>
                <div style={{ color: 'var(--text-light)', opacity: 0.5, display: 'flex', alignItems: 'center' }}>
                  {plan.imageUrl ? (
                    <img src={plan.imageUrl} alt="Plan Icon" style={{ width: 40, height: 40, objectFit: 'contain' }} />
                  ) : (
                    iconMap[plan.weapon] || iconMap['StockShield']
                  )}
                </div>
              </div>
              <div className="admin-responsive-cell">
                <span className="mobile-label">Estado</span>
                <span style={{ 
                  padding: '4px 8px', 
                  borderRadius: 4, 
                  fontSize: '0.8rem',
                  backgroundColor: plan.status === 'active' ? 'rgba(0, 255, 0, 0.1)' : 'rgba(255, 0, 0, 0.1)',
                  color: plan.status === 'active' ? '#4ade80' : '#f87171'
                }}>
                  {plan.status === 'active' ? 'Activo' : 'Descontinuado'}
                </span>
              </div>
              <div className="admin-responsive-cell" style={{ justifyContent: 'flex-end' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button onClick={() => handleOpenModal(plan)} style={{ background: 'transparent', border: 'none', color: '#60a5fa', cursor: 'pointer', padding: '0.2rem' }} title="Editar">
                    <Edit2 size={20} />
                  </button>
                  <button onClick={() => toggleStatus(plan.id, plan.status)} style={{ background: 'transparent', border: 'none', color: plan.status === 'active' ? '#f87171' : '#4ade80', cursor: 'pointer', padding: '0.2rem' }} title={plan.status === 'active' ? 'Descontinuar' : 'Activar'}>
                    {plan.status === 'active' ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
            </div>
          ))}
          {plans.length === 0 && (
            <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
              No hay tarifas. Usa el panel de Migración en Ajustes para cargar las predeterminadas.
            </div>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(5px)', zIndex: 1000, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1rem' }}>
          <div style={{ width: '100%', maxWidth: '600px', maxHeight: '90vh', overflowY: 'auto', backgroundColor: 'var(--bg-dark)', border: '1px solid var(--accent-gold)', borderRadius: '12px', padding: '2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', position: 'relative' }}>
            <h3 style={{ marginTop: 0, color: 'var(--text-light)', borderBottom: '1px solid rgba(212, 175, 55, 0.3)', paddingBottom: '1rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {editingPlan ? 'EDITAR TARIFA' : 'NUEVA TARIFA'}
            </h3>
            <button type="button" onClick={handleCloseModal} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.5rem', borderRadius: '50%', transition: 'background-color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
              <X size={24} />
            </button>
            <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {!editingPlan && (
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 'bold' }}>ID Interno (ej: guerrero, berserker)</label>
                  <input type="text" style={{ width: '100%', padding: '0.8rem', backgroundColor: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-color)', borderRadius: '6px', color: 'var(--text-light)', outline: 'none' }} name="id" value={formData.id} onChange={handleChange} placeholder="Si lo dejas vacío se genera automático" />
                </div>
              )}
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 'bold' }}>Nombre del Plan</label>
                  <input type="text" style={{ width: '100%', padding: '0.8rem', backgroundColor: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-color)', borderRadius: '6px', color: 'var(--text-light)', outline: 'none' }} name="name" value={formData.name} onChange={handleChange} required />
                </div>
                
                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 'bold' }}>Descripción Corta</label>
                  <input type="text" style={{ width: '100%', padding: '0.8rem', backgroundColor: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-color)', borderRadius: '6px', color: 'var(--text-light)', outline: 'none' }} name="desc" value={formData.desc} onChange={handleChange} required />
                </div>
                
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 'bold' }}>Precio ($)</label>
                  <input type="number" style={{ width: '100%', padding: '0.8rem', backgroundColor: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-color)', borderRadius: '6px', color: 'var(--text-light)', outline: 'none' }} name="price" value={formData.price} onChange={handleChange} required />
                </div>
                
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 'bold' }}>Período (ej: /mes)</label>
                  <input type="text" style={{ width: '100%', padding: '0.8rem', backgroundColor: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-color)', borderRadius: '6px', color: 'var(--text-light)', outline: 'none' }} name="period" value={formData.period} onChange={handleChange} required />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 'bold' }}>Beneficios (uno por línea)</label>
                <textarea style={{ width: '100%', padding: '0.8rem', backgroundColor: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-color)', borderRadius: '6px', color: 'var(--text-light)', outline: 'none', resize: 'vertical' }} name="features" value={formData.features} onChange={handleChange} rows="5" required></textarea>
              </div>

              <div style={{ backgroundColor: 'rgba(212, 175, 55, 0.05)', border: '1px dashed rgba(212, 175, 55, 0.5)', padding: '1rem', borderRadius: '8px' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--accent-gold)', fontSize: '0.9rem', fontWeight: 'bold' }}>Ícono o Imagen de Fondo</label>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '0.5rem' }}>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>Opción 1: Elegir Ícono SVG</label>
                    <select style={{ width: '100%', padding: '0.8rem', backgroundColor: 'rgba(0,0,0,0.5)', border: '1px solid var(--border-color)', borderRadius: '6px', color: 'var(--text-light)', outline: 'none', margin: 0 }} name="weapon" value={formData.weapon} onChange={handleChange}>
                      {iconNames.map(name => (
                        <option key={name} value={name} style={{ color: '#000' }}>{name}</option>
                      ))}
                    </select>
                  </div>
                  <div style={{ color: 'var(--text-muted)' }}>ó</div>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>Opción 2: Subir Imagen Propia</label>
                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                      <input 
                        type="file" 
                        accept="image/*" 
                        onChange={handleImageUpload} 
                        style={{ display: 'none' }} 
                        id="plan-image-upload"
                      />
                      <label htmlFor="plan-image-upload" className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.8rem 1rem', fontSize: '0.8rem', margin: 0, width: '100%', justifyContent: 'center', cursor: 'pointer', borderRadius: '6px' }}>
                        <UploadCloud size={16} /> {isUploading ? 'Subiendo...' : 'Subir Imagen'}
                      </label>
                    </div>
                  </div>
                </div>
                {formData.imageUrl && (
                  <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <img src={formData.imageUrl} alt="Preview" style={{ width: 60, height: 60, objectFit: 'contain', backgroundColor: 'rgba(255,255,255,0.05)', padding: '0.5rem', borderRadius: 4 }} />
                    <button type="button" onClick={() => setFormData(prev => ({...prev, imageUrl: ''}))} style={{ background: 'transparent', border: 'none', color: '#f87171', cursor: 'pointer', fontSize: '0.8rem' }}>Remover Imagen</button>
                  </div>
                )}
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem', alignItems: 'end' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 'bold' }}>Clase del Botón</label>
                  <select style={{ width: '100%', padding: '0.8rem', backgroundColor: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-color)', borderRadius: '6px', color: 'var(--text-light)', outline: 'none' }} name="btnClass" value={formData.btnClass} onChange={handleChange}>
                    <option value="btn-outline" style={{ color: '#000' }}>Outline (Normal)</option>
                    <option value="btn-primary" style={{ color: '#000' }}>Primary (Destacado)</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', padding: '0.8rem', backgroundColor: 'rgba(0,0,0,0.3)', borderRadius: '6px', border: '1px solid var(--border-color)' }}>
                    <input type="checkbox" name="popular" checked={formData.popular} onChange={handleChange} style={{ accentColor: 'var(--accent-gold)' }} />
                    <span style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Marcar como Popular</span>
                  </label>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1.5rem' }}>
                <button type="button" onClick={handleCloseModal} style={{ padding: '0.8rem 1.5rem', background: 'transparent', color: 'var(--text-light)', border: '1px solid var(--border-color)', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>Cancelar</button>
                <button type="submit" style={{ padding: '0.8rem 1.5rem', background: 'var(--accent-gold)', color: '#000', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)' }}>Guardar Tarifa</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPlans;
