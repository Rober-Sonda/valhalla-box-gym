import React, { useState, useEffect } from 'react';
import { db, storage } from '../../firebase';
import { collection, onSnapshot, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Edit2, Trash2, Plus, Eye, EyeOff, X } from 'lucide-react';

const AdminDisciplines = () => {
  const [disciplines, setDisciplines] = useState([]);
  const [jarls, setJarls] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingDiscipline, setEditingDiscipline] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    jarlIds: [], // Array of Jarl IDs assigned
    schedule: '',
    active: true
  });

  useEffect(() => {
    // Fetch disciplines
    const unsubDisc = onSnapshot(collection(db, 'disciplines'), (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setDisciplines(data);
      if (data.length === 0) populateInitialDisciplines();
    });

    // Fetch jarls for assignment
    const unsubJarls = onSnapshot(collection(db, 'jarls'), (snapshot) => {
      setJarls(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    return () => { unsubDisc(); unsubJarls(); };
  }, []);

  const populateInitialDisciplines = async () => {
    const initial = [
      { title: 'MUSCULACIÓN', description: 'Fuerza y desarrollo libre', image: '/assets/images/strength.png', schedule: 'Lunes a Sábado - Libre', jarlIds: [], active: true },
      { title: 'GAP', description: 'Glúteos, abdomen y piernas', image: '/assets/images/gap.png', schedule: 'Mar y Jue 18:00hs', jarlIds: [], active: true },
      { title: 'CROSSTRAINING', description: 'Entrenamiento de alta intensidad', image: '/assets/images/crosstraining.png', schedule: 'Lunes a Viernes 19:00hs', jarlIds: [], active: true },
      { title: 'KICKBOXING', description: 'Combate y striking', image: '/assets/images/striking.png', schedule: 'Lun, Mie, Vie 20:00hs', jarlIds: [], active: true }
    ];
    for (const item of initial) {
      await addDoc(collection(db, 'disciplines'), item);
    }
  };

  const handleOpenModal = (disc = null) => {
    if (disc) {
      setEditingDiscipline(disc);
      setFormData({
        ...disc,
        jarlIds: disc.jarlIds || (disc.jarlId ? [disc.jarlId] : []) // Backward compatibility
      });
    } else {
      setEditingDiscipline(null);
      setFormData({ title: '', description: '', image: '', jarlIds: [], schedule: '', active: true });
    }
    setIsModalOpen(true);
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const storageRef = ref(storage, `disciplines/${Date.now()}_${file.name}`);
      const snapshot = await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);
      setFormData(prev => ({ ...prev, image: downloadURL }));
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Error al subir la imagen.");
    }
  };

  const toggleJarl = (id) => {
    setFormData(prev => {
      const currentIds = prev.jarlIds || [];
      if (currentIds.includes(id)) {
        return { ...prev, jarlIds: currentIds.filter(jId => jId !== id) };
      } else {
        return { ...prev, jarlIds: [...currentIds, id] };
      }
    });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (editingDiscipline) {
      await updateDoc(doc(db, 'disciplines', editingDiscipline.id), formData);
    } else {
      await addDoc(collection(db, 'disciplines'), formData);
    }
    setIsModalOpen(false);
  };

  const toggleActive = async (disc) => {
    await updateDoc(doc(db, 'disciplines', disc.id), { active: !disc.active });
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Seguro que quieres eliminar esta disciplina?')) {
      await deleteDoc(doc(db, 'disciplines', id));
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
        <button className="admin-btn-primary" onClick={() => handleOpenModal()} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Plus size={18} /> Añadir Disciplina
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
        {disciplines.map(disc => {
          const assignedIds = disc.jarlIds || (disc.jarlId ? [disc.jarlId] : []);
          const assignedJarls = jarls.filter(j => assignedIds.includes(j.id)).map(j => j.name);
          const jarlNames = assignedJarls.length > 0 ? assignedJarls.join(', ') : 'Ninguno';
          
          return (
            <div key={disc.id} style={{ 
              backgroundColor: 'var(--bg-dark)', 
              border: '1px solid var(--border-color)', 
              borderRadius: '8px', 
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              opacity: disc.active ? 1 : 0.6
            }}>
              <div style={{ position: 'absolute', top: '10px', right: '10px', display: 'flex', gap: '0.5rem', zIndex: 10 }}>
                <button onClick={() => toggleActive(disc)} style={{ background: 'rgba(0,0,0,0.7)', borderRadius: '50%', padding: '0.4rem', border: 'none', color: disc.active ? '#f39c12' : '#4ade80', cursor: 'pointer' }} title={disc.active ? 'Desactivar' : 'Activar'}>
                  {disc.active ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
                <button onClick={() => handleOpenModal(disc)} style={{ background: 'rgba(0,0,0,0.7)', borderRadius: '50%', padding: '0.4rem', border: 'none', color: '#60a5fa', cursor: 'pointer' }}>
                  <Edit2 size={16} />
                </button>
                <button onClick={() => handleDelete(disc.id)} style={{ background: 'rgba(0,0,0,0.7)', borderRadius: '50%', padding: '0.4rem', border: 'none', color: '#f87171', cursor: 'pointer' }}>
                  <Trash2 size={16} />
                </button>
              </div>
              <div style={{ width: '100%', height: '160px', backgroundColor: '#1a1a1a', backgroundImage: `url(${disc.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ margin: '0 0 0.5rem 0', color: 'var(--text-light)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  {disc.title}
                </h3>
                <p style={{ margin: '0 0 1rem 0', color: 'var(--text-muted)', fontSize: '0.9rem' }}>{disc.description}</p>
                <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Horarios:</span>
                    <span style={{ color: 'var(--text-light)', fontWeight: 'bold', textAlign: 'right' }}>{disc.schedule || 'No definido'}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Jarls:</span>
                    <span style={{ color: 'var(--accent-gold)', fontWeight: 'bold', textAlign: 'right' }}>{jarlNames}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {disciplines.length === 0 && (
          <div style={{ gridColumn: '1 / -1', padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
            No hay disciplinas registradas.
          </div>
        )}
      </div>

      {isModalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(5px)', zIndex: 1100, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1rem' }}>
          <div style={{ width: '100%', maxWidth: '500px', maxHeight: '90vh', overflowY: 'auto', backgroundColor: 'var(--bg-dark)', border: '1px solid var(--accent-gold)', borderRadius: '12px', padding: '2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', position: 'relative' }}>
            <h3 style={{ marginTop: 0, color: 'var(--text-light)', borderBottom: '1px solid rgba(212, 175, 55, 0.3)', paddingBottom: '1rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {editingDiscipline ? 'EDITAR DISCIPLINA' : 'CREAR DISCIPLINA'}
            </h3>
            <button type="button" onClick={() => setIsModalOpen(false)} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.5rem', borderRadius: '50%', transition: 'background-color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
              <X size={24} />
            </button>
            <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 'bold' }}>Título</label>
                <input type="text" style={{ width: '100%', padding: '0.8rem', backgroundColor: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-color)', borderRadius: '6px', color: 'var(--text-light)', outline: 'none', transition: 'border-color 0.2s' }} value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} required placeholder="Ej. Crosstraining" />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 'bold' }}>Descripción</label>
                <input type="text" style={{ width: '100%', padding: '0.8rem', backgroundColor: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-color)', borderRadius: '6px', color: 'var(--text-light)', outline: 'none' }} value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} required placeholder="Breve descripción de la clase" />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 'bold' }}>Días y Horarios</label>
                <input type="text" style={{ width: '100%', padding: '0.8rem', backgroundColor: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-color)', borderRadius: '6px', color: 'var(--text-light)', outline: 'none' }} value={formData.schedule} onChange={e => setFormData({...formData, schedule: e.target.value})} placeholder="Ej: Lunes, Miercoles y Viernes 19hs" />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 'bold' }}>Jarls a cargo (Selección múltiple)</label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', backgroundColor: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '6px', border: '1px solid var(--border-color)' }}>
                  {jarls.filter(j => j.active).map(jarl => (
                    <label key={jarl.id} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-light)', cursor: 'pointer', fontSize: '0.9rem' }}>
                      <input 
                        type="checkbox" 
                        checked={(formData.jarlIds || []).includes(jarl.id)} 
                        onChange={() => toggleJarl(jarl.id)}
                        style={{ accentColor: 'var(--accent-gold)' }}
                      />
                      {jarl.name}
                    </label>
                  ))}
                  {jarls.filter(j => j.active).length === 0 && <span style={{ color: 'var(--text-muted)' }}>No hay Jarls activos.</span>}
                </div>
              </div>
              
              <div style={{ backgroundColor: 'rgba(212, 175, 55, 0.05)', border: '1px dashed rgba(212, 175, 55, 0.5)', padding: '1rem', borderRadius: '8px' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--accent-gold)', fontSize: '0.9rem', fontWeight: 'bold' }}>Subir Imagen de Clase</label>
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
                <button type="submit" style={{ padding: '0.8rem 1.5rem', background: 'var(--accent-gold)', color: '#000', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)' }}>Guardar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDisciplines;
