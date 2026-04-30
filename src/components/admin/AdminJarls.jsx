import React, { useState, useEffect } from 'react';
import { db, storage } from '../../firebase';
import { collection, onSnapshot, addDoc, updateDoc, doc, deleteDoc, getDocs } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Edit2, Trash2, Plus, Eye, EyeOff, X } from 'lucide-react';

const AdminJarls = () => {
  const [jarls, setJarls] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingJarl, setEditingJarl] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    specialty: '',
    quote: '',
    image: '',
    active: true
  });

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'jarls'), (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setJarls(data);
      
      // Auto-populate if empty
      if (data.length === 0) {
        populateInitialJarls();
      }
    });
    return () => unsub();
  }, []);

  const populateInitialJarls = async () => {
    const initial = [
      { name: 'NACHO', specialty: 'Head Coach & Strength', quote: '"El hierro no miente. Te da exactamente lo que le entregas."', image: '/assets/images/jarl_nacho_v9.png', active: true },
      { name: 'LAUTARO', specialty: 'Functional & Agility', quote: '"La motivación es temporal. La disciplina te hace leyenda."', image: '/assets/images/jarl_lautaro_v1.png', active: true },
      { name: 'SANTINO', specialty: 'Striking Specialist', quote: '"Entrena tan duro que la vida real parezca fácil."', image: '/assets/images/jarl_santino.png', active: true }
    ];
    for (const jarl of initial) {
      await addDoc(collection(db, 'jarls'), jarl);
    }
  };

  const handleOpenModal = (jarl = null) => {
    if (jarl) {
      setEditingJarl(jarl);
      setFormData(jarl);
    } else {
      setEditingJarl(null);
      setFormData({ name: '', specialty: '', quote: '', image: '', active: true });
    }
    setIsModalOpen(true);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (editingJarl) {
      await updateDoc(doc(db, 'jarls', editingJarl.id), formData);
    } else {
      await addDoc(collection(db, 'jarls'), formData);
    }
    setIsModalOpen(false);
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const storageRef = ref(storage, `jarls/${Date.now()}_${file.name}`);
      const snapshot = await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);
      setFormData(prev => ({ ...prev, image: downloadURL }));
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Error al subir la imagen.");
    }
  };

  const toggleActive = async (jarl) => {
    await updateDoc(doc(db, 'jarls', jarl.id), { active: !jarl.active });
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Seguro que quieres eliminar a este Jarl?')) {
      await deleteDoc(doc(db, 'jarls', id));
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
        <button className="admin-btn-primary" onClick={() => handleOpenModal()} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Plus size={18} /> Añadir Jarl
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem' }}>
        {jarls.map(jarl => (
          <div key={jarl.id} style={{ 
            backgroundColor: 'var(--bg-dark)', 
            border: '1px solid var(--border-color)', 
            borderRadius: '8px', 
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            opacity: jarl.active ? 1 : 0.6
          }}>
            <div style={{ position: 'absolute', top: '10px', right: '10px', display: 'flex', gap: '0.5rem', zIndex: 10 }}>
              <button onClick={() => toggleActive(jarl)} style={{ background: 'rgba(0,0,0,0.7)', borderRadius: '50%', padding: '0.4rem', border: 'none', color: jarl.active ? '#f39c12' : '#4ade80', cursor: 'pointer' }} title={jarl.active ? 'Desactivar' : 'Activar'}>
                {jarl.active ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
              <button onClick={() => handleOpenModal(jarl)} style={{ background: 'rgba(0,0,0,0.7)', borderRadius: '50%', padding: '0.4rem', border: 'none', color: '#60a5fa', cursor: 'pointer' }}>
                <Edit2 size={16} />
              </button>
              <button onClick={() => handleDelete(jarl.id)} style={{ background: 'rgba(0,0,0,0.7)', borderRadius: '50%', padding: '0.4rem', border: 'none', color: '#f87171', cursor: 'pointer' }}>
                <Trash2 size={16} />
              </button>
            </div>
            <div style={{ width: '100%', height: '200px', backgroundColor: '#1a1a1a', backgroundImage: `url(${jarl.image})`, backgroundSize: 'cover', backgroundPosition: 'center top' }}></div>
            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ margin: '0 0 0.25rem 0', color: 'var(--accent-gold)' }}>{jarl.name}</h3>
              <p style={{ margin: '0 0 1rem 0', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 'bold' }}>{jarl.specialty}</p>
              <p style={{ margin: 'auto 0 0 0', color: 'var(--text-light)', fontSize: '0.85rem', fontStyle: 'italic' }}>{jarl.quote}</p>
            </div>
          </div>
        ))}
        {jarls.length === 0 && (
          <div style={{ gridColumn: '1 / -1', padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
            No hay Jarls registrados.
          </div>
        )}
      </div>

      {isModalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(5px)', zIndex: 1100, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1rem' }}>
          <div style={{ width: '100%', maxWidth: '500px', backgroundColor: 'var(--bg-dark)', border: '1px solid var(--accent-gold)', borderRadius: '12px', padding: '2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', position: 'relative' }}>
            <h3 style={{ marginTop: 0, color: 'var(--text-light)', borderBottom: '1px solid rgba(212, 175, 55, 0.3)', paddingBottom: '1rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {editingJarl ? 'EDITAR JARL' : 'FORJAR NUEVO JARL'}
            </h3>
            <button type="button" onClick={() => setIsModalOpen(false)} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.5rem', borderRadius: '50%', transition: 'background-color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
              <X size={24} />
            </button>
            <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 'bold' }}>Nombre del Jarl</label>
                <input type="text" style={{ width: '100%', padding: '0.8rem', backgroundColor: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-color)', borderRadius: '6px', color: 'var(--text-light)', outline: 'none', transition: 'border-color 0.2s' }} value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required placeholder="Ej. Ragnar" />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 'bold' }}>Especialidad / Título</label>
                <input type="text" style={{ width: '100%', padding: '0.8rem', backgroundColor: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-color)', borderRadius: '6px', color: 'var(--text-light)', outline: 'none' }} value={formData.specialty} onChange={e => setFormData({...formData, specialty: e.target.value})} required placeholder="Ej. Maestro de Hachas" />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 'bold' }}>Grito de Guerra (Frase)</label>
                <input type="text" style={{ width: '100%', padding: '0.8rem', backgroundColor: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-color)', borderRadius: '6px', color: 'var(--text-light)', outline: 'none' }} value={formData.quote} onChange={e => setFormData({...formData, quote: e.target.value})} required placeholder='"¡Por Valhalla!"' />
              </div>
              
              <div style={{ backgroundColor: 'rgba(212, 175, 55, 0.05)', border: '1px dashed rgba(212, 175, 55, 0.5)', padding: '1rem', borderRadius: '8px' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--accent-gold)', fontSize: '0.9rem', fontWeight: 'bold' }}>Subir Retrato</label>
                <input type="file" accept="image/*" onChange={handleImageUpload} style={{ width: '100%', marginBottom: '1rem', color: 'var(--text-light)', fontSize: '0.85rem' }} />

                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>O ingresar URL manual:</label>
                <input type="text" style={{ width: '100%', padding: '0.6rem', backgroundColor: 'rgba(0,0,0,0.5)', border: '1px solid var(--border-color)', borderRadius: '4px', color: 'var(--text-light)', outline: 'none', fontSize: '0.85rem' }} value={formData.image} onChange={e => setFormData({...formData, image: e.target.value})} required placeholder="https://..." />
                
                {formData.image && (
                  <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                    <img src={formData.image} alt="Vista previa" style={{ maxWidth: '100%', maxHeight: '120px', borderRadius: '4px', border: '1px solid var(--accent-gold)' }} />
                  </div>
                )}
              </div>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', marginTop: '1rem' }}>
                <button type="button" onClick={() => setIsModalOpen(false)} style={{ padding: '0.8rem 1.5rem', background: 'transparent', color: 'var(--text-light)', border: '1px solid var(--border-color)', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>Cancelar</button>
                <button type="submit" style={{ padding: '0.8rem 1.5rem', background: 'var(--accent-gold)', color: '#000', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)' }}>Forjar Jarl</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminJarls;
