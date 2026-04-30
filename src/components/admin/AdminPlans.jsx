import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, onSnapshot, doc, updateDoc, deleteDoc, addDoc, setDoc } from 'firebase/firestore';
import { storage } from '../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Edit2, Trash2, Plus, EyeOff, Eye, UploadCloud } from 'lucide-react';
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
        <div className="table-responsive">
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--bg-dark)', borderBottom: '1px solid var(--border-color)' }}>
                <th style={{ padding: '1rem' }}>Plan</th>
                <th style={{ padding: '1rem' }}>Precio</th>
                <th style={{ padding: '1rem' }}>Ícono</th>
                <th style={{ padding: '1rem' }}>Estado</th>
                <th style={{ padding: '1rem' }}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {plans.map(plan => (
                <tr key={plan.id} style={{ borderBottom: '1px solid var(--border-color)', opacity: plan.status === 'active' ? 1 : 0.5 }}>
                  <td style={{ padding: '1rem' }}>
                    <div style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      {plan.name}
                      {plan.popular && <span style={{ fontSize: '0.6rem', background: 'var(--accent-gold)', color: '#000', padding: '2px 4px', borderRadius: 2 }}>POPULAR</span>}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{plan.desc}</div>
                  </td>
                  <td style={{ padding: '1rem' }}>${plan.price} {plan.period}</td>
                  <td style={{ padding: '1rem' }}>
                    <div style={{ color: 'var(--text-light)', opacity: 0.5, display: 'flex', alignItems: 'center' }}>
                      {plan.imageUrl ? (
                        <img src={plan.imageUrl} alt="Plan Icon" style={{ width: 40, height: 40, objectFit: 'contain' }} />
                      ) : (
                        iconMap[plan.weapon] || iconMap['StockShield']
                      )}
                    </div>
                  </td>
                  <td style={{ padding: '1rem' }}>
                    <span style={{ 
                      padding: '4px 8px', 
                      borderRadius: 4, 
                      fontSize: '0.8rem',
                      backgroundColor: plan.status === 'active' ? 'rgba(0, 255, 0, 0.1)' : 'rgba(255, 0, 0, 0.1)',
                      color: plan.status === 'active' ? '#4ade80' : '#f87171'
                    }}>
                      {plan.status === 'active' ? 'Activo' : 'Descontinuado'}
                    </span>
                  </td>
                  <td style={{ padding: '1rem' }}>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button onClick={() => handleOpenModal(plan)} style={{ background: 'transparent', border: 'none', color: '#60a5fa', cursor: 'pointer' }} title="Editar">
                        <Edit2 size={18} />
                      </button>
                      <button onClick={() => toggleStatus(plan.id, plan.status)} style={{ background: 'transparent', border: 'none', color: plan.status === 'active' ? '#f87171' : '#4ade80', cursor: 'pointer' }} title={plan.status === 'active' ? 'Descontinuar' : 'Activar'}>
                        {plan.status === 'active' ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {plans.length === 0 && (
                <tr>
                  <td colSpan="5" style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                    No hay tarifas. Usa el panel de Migración en Ajustes para cargar las predeterminadas.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'var(--overlay-dark)', zIndex: 1000, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
          <div className="admin-card" style={{ width: '100%', maxWidth: '600px', maxHeight: '90vh', overflowY: 'auto' }}>
            <h3 style={{ marginTop: 0, borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
              {editingPlan ? 'Editar Tarifa' : 'Nueva Tarifa'}
            </h3>
            <form onSubmit={handleSave} className="admin-form-grid">
              {!editingPlan && (
                <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                  <label className="form-label">ID Interno (ej: guerrero, berserker)</label>
                  <input type="text" className="admin-input" name="id" value={formData.id} onChange={handleChange} placeholder="Si lo dejas vacío se genera automático" />
                </div>
              )}
              <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                <label className="form-label">Nombre del Plan</label>
                <input type="text" className="admin-input" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                <label className="form-label">Descripción Corta</label>
                <input type="text" className="admin-input" name="desc" value={formData.desc} onChange={handleChange} required />
              </div>
              
              <div className="form-group">
                <label className="form-label">Precio ($)</label>
                <input type="number" className="admin-input" name="price" value={formData.price} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label className="form-label">Período (ej: /mes)</label>
                <input type="text" className="admin-input" name="period" value={formData.period} onChange={handleChange} required />
              </div>

              <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                <label className="form-label">Beneficios (uno por línea)</label>
                <textarea className="admin-input" name="features" value={formData.features} onChange={handleChange} rows="5" required></textarea>
              </div>

              <div className="form-group" style={{ gridColumn: '1 / -1', padding: '1rem', backgroundColor: 'var(--bg-dark)', borderRadius: 4 }}>
                <label className="form-label">Ícono o Imagen de Fondo</label>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '0.5rem' }}>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>Opción 1: Elegir Ícono SVG</label>
                    <select className="admin-input" name="weapon" value={formData.weapon} onChange={handleChange} style={{ margin: 0 }}>
                      {iconNames.map(name => (
                        <option key={name} value={name}>{name}</option>
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
                      <label htmlFor="plan-image-upload" className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', fontSize: '0.8rem', margin: 0, width: '100%', justifyContent: 'center', cursor: 'pointer' }}>
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
              <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                <label className="form-label">Clase del Botón</label>
                <select className="admin-input" name="btnClass" value={formData.btnClass} onChange={handleChange}>
                  <option value="btn-outline">Outline (Normal)</option>
                  <option value="btn-primary">Primary (Destacado)</option>
                </select>
              </div>

              <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                  <input type="checkbox" name="popular" checked={formData.popular} onChange={handleChange} />
                  <strong>Marcar como Recomendado / Popular</strong>
                </label>
              </div>

              <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1rem' }}>
                <button type="button" className="admin-btn-secondary" onClick={handleCloseModal}>Cancelar</button>
                <button type="submit" className="admin-btn-primary">Guardar Tarifa</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPlans;
