import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, onSnapshot, query, orderBy, addDoc, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { Trash2, Send, Bell } from 'lucide-react';

const AdminNotifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [plans, setPlans] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    message: '',
    target: 'all' // 'all' or specific planId
  });

  useEffect(() => {
    // Fetch notifications
    const qNotif = query(collection(db, 'notifications'), orderBy('createdAt', 'desc'));
    const unsub = onSnapshot(qNotif, (snapshot) => {
      setNotifications(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    // Fetch plans for target selection
    const fetchPlans = async () => {
      const snap = await getDocs(collection(db, 'plans'));
      setPlans(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    };
    fetchPlans();

    return () => unsub();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!window.confirm('¿Seguro que quieres enviar esta notificación a todos los usuarios indicados?')) return;
    
    try {
      await addDoc(collection(db, 'notifications'), {
        title: formData.title,
        message: formData.message,
        target: formData.target,
        createdAt: new Date()
      });
      setFormData({ title: '', message: '', target: 'all' });
      alert('¡Notificación enviada con éxito!');
    } catch (error) {
      console.error('Error enviando notificación:', error);
      alert('Error enviando notificación.');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Seguro que quieres eliminar esta notificación? Los usuarios ya no la verán.')) {
      try {
        await deleteDoc(doc(db, 'notifications', id));
      } catch (error) {
        console.error('Error eliminando:', error);
      }
    }
  };

  return (
    <div className="admin-notifications">
      <div className="admin-card mb-4">
        <h3 style={{ margin: 0, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-light)' }}>
          <Send size={20} /> Crear Nuevo Comunicado
        </h3>
        <form onSubmit={handleSend} className="admin-form-grid">
          <div className="form-group" style={{ gridColumn: '1 / -1' }}>
            <label className="form-label">Título del Comunicado</label>
            <input type="text" className="admin-input" name="title" value={formData.title} onChange={handleChange} required placeholder="Ej: Cerramos por Refacciones" />
          </div>
          <div className="form-group" style={{ gridColumn: '1 / -1' }}>
            <label className="form-label">Mensaje</label>
            <textarea className="admin-input" name="message" value={formData.message} onChange={handleChange} required rows={3} placeholder="Detalles de la notificación..."></textarea>
          </div>
          <div className="form-group" style={{ gridColumn: '1 / -1' }}>
            <label className="form-label">¿A quién va dirigido?</label>
            <select className="admin-input" name="target" value={formData.target} onChange={handleChange}>
              <option value="all">A TODOS los usuarios (Toda la Tribu)</option>
              {plans.map(p => (
                <option key={p.id} value={p.id}>Solo a los inscriptos en: {p.name}</option>
              ))}
            </select>
          </div>
          <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
            <button type="submit" className="admin-btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Bell size={18} /> Publicar Anuncio
            </button>
          </div>
        </form>
      </div>

      <div className="admin-card">
        <h3 style={{ margin: 0, marginBottom: '1rem', color: 'var(--text-light)' }}>Anuncios Recientes</h3>
        <div className="table-responsive">
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-color)', color: 'var(--text-muted)' }}>
                <th style={{ padding: '1rem' }}>Fecha</th>
                <th style={{ padding: '1rem' }}>Título y Mensaje</th>
                <th style={{ padding: '1rem' }}>Destino</th>
                <th style={{ padding: '1rem', textAlign: 'right' }}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {notifications.map(notif => {
                const dateStr = notif.createdAt && notif.createdAt.toDate 
                  ? notif.createdAt.toDate().toLocaleString('es-ES') 
                  : 'N/A';
                
                const targetName = notif.target === 'all' 
                  ? 'Todos' 
                  : plans.find(p => p.id === notif.target)?.name || notif.target;

                return (
                  <tr key={notif.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: '1rem', whiteSpace: 'nowrap' }}>{dateStr}</td>
                    <td style={{ padding: '1rem' }}>
                      <div style={{ fontWeight: 'bold' }}>{notif.title}</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{notif.message}</div>
                    </td>
                    <td style={{ padding: '1rem' }}>
                      <span style={{ padding: '0.25rem 0.5rem', backgroundColor: 'var(--bg-dark)', borderRadius: '4px', fontSize: '0.8rem' }}>
                        {targetName}
                      </span>
                    </td>
                    <td style={{ padding: '1rem', textAlign: 'right' }}>
                      <button onClick={() => handleDelete(notif.id)} style={{ background: 'transparent', border: 'none', color: '#f87171', cursor: 'pointer' }} title="Eliminar Anuncio">
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                );
              })}
              {notifications.length === 0 && (
                <tr>
                  <td colSpan="4" style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                    No hay anuncios activos.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminNotifications;
