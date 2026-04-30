import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, onSnapshot, query, orderBy, addDoc, updateDoc, doc, deleteDoc, getDocs } from 'firebase/firestore';
import { Edit2, Trash2, Plus, Mail, Calendar, Users, Dumbbell, Shield, X } from 'lucide-react';
import AdminJarls from './AdminJarls';
import AdminDisciplines from './AdminDisciplines';

const AdminMembers = () => {
  const [activeSegment, setActiveSegment] = useState('members');
  const [inscriptions, setInscriptions] = useState([]);
  const [plans, setPlans] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingInscription, setEditingInscription] = useState(null);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    planId: '',
    durationMonths: 1,
    status: 'active',
    expiresAtDate: ''
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 10;

  // Reset page on search or filter change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, statusFilter]);

  useEffect(() => {
    // Fetch inscriptions
    const qInsc = query(collection(db, 'inscriptions'), orderBy('createdAt', 'desc'));
    const unsubInsc = onSnapshot(qInsc, (snapshot) => {
      setInscriptions(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    // Fetch plans
    const fetchPlans = async () => {
      const plansSnap = await getDocs(collection(db, 'plans'));
      setPlans(plansSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchPlans();

    return () => unsubInsc();
  }, []);

  const handleOpenModal = (inscription = null) => {
    if (inscription) {
      setEditingInscription(inscription);
      
      // format date to YYYY-MM-DD
      let expiresDate = '';
      if (inscription.expiresAt && inscription.expiresAt.toDate) {
        expiresDate = inscription.expiresAt.toDate().toISOString().split('T')[0];
      }

      setFormData({
        nombre: inscription.nombre || '',
        email: inscription.email || '',
        planId: inscription.plan?.id || '',
        durationMonths: inscription.durationMonths || 1,
        status: inscription.status || 'active',
        expiresAtDate: expiresDate
      });
    } else {
      setEditingInscription(null);
      const nextMonthDate = new Date();
      nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
      nextMonthDate.setDate(10); // Default to the 10th of next month
      
      setFormData({
        nombre: '',
        email: '',
        planId: plans.length > 0 ? plans[0].id : '',
        durationMonths: 1,
        status: 'active',
        expiresAtDate: nextMonthDate.toISOString().split('T')[0]
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingInscription(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const selectedPlan = plans.find(p => p.id === formData.planId) || { name: 'Plan Personalizado', price: '0' };
      
      const expiresAt = new Date(formData.expiresAtDate);
      // Ajustar la hora al final del dia
      expiresAt.setHours(23, 59, 59, 999);

      const inscriptionData = {
        nombre: formData.nombre,
        email: formData.email,
        durationMonths: Number(formData.durationMonths),
        status: formData.status,
        expiresAt: expiresAt,
        plan: {
          id: selectedPlan.id || 'manual',
          name: selectedPlan.name,
          price: selectedPlan.price
        }
      };

      if (editingInscription) {
        await updateDoc(doc(db, 'inscriptions', editingInscription.id), inscriptionData);
      } else {
        // Crear nueva inscripción manual (efectivo / ventanilla)
        const finalData = {
          ...inscriptionData,
          createdAt: new Date(),
          paymentMethod: 'efectivo',
          userId: null // El usuario todavía no existe o se enlazará por email
        };
        await addDoc(collection(db, 'inscriptions'), finalData);
      }
      handleCloseModal();
    } catch (error) {
      console.error("Error guardando miembro/inscripción:", error);
      alert("Hubo un error al guardar.");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar esta inscripción? El usuario perderá acceso al plan.')) {
      try {
        await deleteDoc(doc(db, 'inscriptions', id));
      } catch (error) {
        console.error("Error eliminando:", error);
      }
    }
  };

  const sendEmailReceipt = (insc) => {
    const expiresDate = insc.expiresAt && insc.expiresAt.toDate 
      ? insc.expiresAt.toDate().toLocaleDateString('es-ES') 
      : 'No definida';
    
    const subject = encodeURIComponent('Recibo de Pago y Activación de Plan - Valhalla Box Gym');
    const body = encodeURIComponent(`Hola ${insc.nombre || 'Guerrero'},

Hemos registrado exitosamente tu pago por ventanilla.

Detalles de tu inscripción:
- Plan: ${insc.plan?.name || 'Manual'}
- Vencimiento: ${expiresDate}
- Estado: ${insc.status === 'active' ? 'Activo' : 'Pendiente'}

Ya puedes ingresar a la plataforma con este correo (${insc.email}) para ver tu perfil y tu tarjeta de acceso virtual.

Skål!
Valhalla Box Gym`);
    
    window.location.href = `mailto:${insc.email}?subject=${subject}&body=${body}`;
  };

  const filteredInscriptions = inscriptions.filter(insc => {
    const isExpired = insc.expiresAt && insc.expiresAt.toDate && insc.expiresAt.toDate() < new Date();
    
    // Status Filter
    if (statusFilter === 'active' && (insc.status !== 'active' || isExpired)) return false;
    if (statusFilter === 'pending' && insc.status !== 'pending') return false;
    if (statusFilter === 'expired' && (!isExpired || insc.status !== 'active')) return false;

    // Search Query Filter
    const searchLower = searchQuery.toLowerCase();
    const nameMatch = insc.nombre?.toLowerCase().includes(searchLower);
    const emailMatch = insc.email?.toLowerCase().includes(searchLower);
    if (searchQuery && !nameMatch && !emailMatch) return false;

    return true;
  });

  const totalPages = Math.ceil(filteredInscriptions.length / ITEMS_PER_PAGE);
  const paginatedInscriptions = filteredInscriptions.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <div className="admin-members">
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        <button 
          onClick={() => setActiveSegment('members')} 
          style={{ flex: 1, padding: '0.75rem', backgroundColor: activeSegment === 'members' ? 'var(--accent-gold)' : 'var(--bg-dark)', color: activeSegment === 'members' ? '#000' : 'var(--text-light)', border: '1px solid var(--accent-gold)', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
        >
          <Shield size={18} /> Miembros Activos
        </button>
        <button 
          onClick={() => setActiveSegment('jarls')} 
          style={{ flex: 1, padding: '0.75rem', backgroundColor: activeSegment === 'jarls' ? 'var(--accent-gold)' : 'var(--bg-dark)', color: activeSegment === 'jarls' ? '#000' : 'var(--text-light)', border: '1px solid var(--accent-gold)', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
        >
          <Users size={18} /> Nuestros Jarls
        </button>
        <button 
          onClick={() => setActiveSegment('disciplines')} 
          style={{ flex: 1, padding: '0.75rem', backgroundColor: activeSegment === 'disciplines' ? 'var(--accent-gold)' : 'var(--bg-dark)', color: activeSegment === 'disciplines' ? '#000' : 'var(--text-light)', border: '1px solid var(--accent-gold)', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
        >
          <Dumbbell size={18} /> Disciplinas
        </button>
      </div>

      <div className="admin-card">
        {activeSegment === 'jarls' && <AdminJarls />}
        {activeSegment === 'disciplines' && <AdminDisciplines />}
        
        {activeSegment === 'members' && (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
              <h3 style={{ margin: 0, color: 'var(--text-light)' }}>Gestión de Miembros e Inscripciones</h3>
              <button className="admin-btn-primary" onClick={() => handleOpenModal()} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Plus size={18} /> Pago por Ventanilla
              </button>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <input 
                type="text" 
                placeholder="Buscar por nombre o email..." 
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="admin-input"
                style={{ flex: 2, minWidth: '200px' }}
              />
              <select 
                className="admin-input" 
                value={statusFilter} 
                onChange={e => setStatusFilter(e.target.value)}
                style={{ flex: 1, minWidth: '150px' }}
              >
                <option value="all">Todos los Estados</option>
                <option value="active">Solo Activos</option>
                <option value="pending">Pendientes</option>
                <option value="expired">Vencidos</option>
              </select>
            </div>

            <div className="table-responsive">
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '800px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-color)', color: 'var(--text-muted)' }}>
                <th style={{ padding: '1rem', fontWeight: 500 }}>Miembro</th>
                <th style={{ padding: '1rem', fontWeight: 500 }}>Plan</th>
                <th style={{ padding: '1rem', fontWeight: 500 }}>Vencimiento</th>
                <th style={{ padding: '1rem', fontWeight: 500 }}>Estado</th>
                <th style={{ padding: '1rem', fontWeight: 500, textAlign: 'right' }}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {paginatedInscriptions.map(insc => {
                const expiresDate = insc.expiresAt && insc.expiresAt.toDate 
                  ? insc.expiresAt.toDate().toLocaleDateString('es-ES') 
                  : 'N/A';
                
                const isExpired = insc.expiresAt && insc.expiresAt.toDate && insc.expiresAt.toDate() < new Date();

                return (
                  <tr key={insc.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: '1rem' }}>
                      <div style={{ fontWeight: 'bold' }}>{insc.nombre || 'Sin nombre'}</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{insc.email}</div>
                    </td>
                    <td style={{ padding: '1rem' }}>
                      {insc.plan?.name || 'Manual'}
                    </td>
                    <td style={{ padding: '1rem' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: isExpired ? '#f87171' : 'var(--text-light)' }}>
                        <Calendar size={14} /> {expiresDate}
                      </span>
                    </td>
                    <td style={{ padding: '1rem' }}>
                      <span style={{ 
                        padding: '0.25rem 0.5rem', 
                        borderRadius: '4px', 
                        fontSize: '0.8rem',
                        backgroundColor: insc.status === 'active' ? (isExpired ? 'rgba(248, 113, 113, 0.1)' : 'rgba(0, 255, 0, 0.1)') : 'rgba(243, 156, 18, 0.1)',
                        color: insc.status === 'active' ? (isExpired ? '#f87171' : '#4ade80') : '#f39c12'
                      }}>
                        {insc.status === 'active' ? (isExpired ? 'Vencido' : 'Activo') : 'Pendiente'}
                      </span>
                    </td>
                    <td style={{ padding: '1rem', textAlign: 'right' }}>
                      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                        <button onClick={() => sendEmailReceipt(insc)} style={{ background: 'transparent', border: 'none', color: '#60a5fa', cursor: 'pointer' }} title="Enviar Recibo por Email">
                          <Mail size={18} />
                        </button>
                        <button onClick={() => handleOpenModal(insc)} style={{ background: 'transparent', border: 'none', color: '#60a5fa', cursor: 'pointer' }} title="Editar">
                          <Edit2 size={18} />
                        </button>
                        <button onClick={() => handleDelete(insc.id)} style={{ background: 'transparent', border: 'none', color: '#f87171', cursor: 'pointer' }} title="Eliminar">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
              {paginatedInscriptions.length === 0 && (
                <tr>
                  <td colSpan="5" style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                    No se encontraron miembros con esos criterios.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        </>
        )}
      </div>

      {isModalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(5px)', zIndex: 1100, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1rem' }}>
          <div style={{ width: '100%', maxWidth: '600px', maxHeight: '90vh', overflowY: 'auto', backgroundColor: 'var(--bg-dark)', border: '1px solid var(--accent-gold)', borderRadius: '12px', padding: '2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', position: 'relative' }}>
            <h3 style={{ marginTop: 0, color: 'var(--text-light)', borderBottom: '1px solid rgba(212, 175, 55, 0.3)', paddingBottom: '1rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {editingInscription ? 'EDITAR EXCEPCIÓN DE MIEMBRO' : 'NUEVO PAGO POR VENTANILLA'}
            </h3>
            <button type="button" onClick={handleCloseModal} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.5rem', borderRadius: '50%', transition: 'background-color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
              <X size={24} />
            </button>
            <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.2rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 'bold' }}>Nombre del Guerrero</label>
                  <input type="text" style={{ width: '100%', padding: '0.8rem', backgroundColor: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-color)', borderRadius: '6px', color: 'var(--text-light)', outline: 'none' }} name="nombre" value={formData.nombre} onChange={handleChange} required />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 'bold' }}>Correo Electrónico (Fundamental)</label>
                  <input type="email" style={{ width: '100%', padding: '0.8rem', backgroundColor: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-color)', borderRadius: '6px', color: 'var(--text-light)', outline: 'none' }} name="email" value={formData.email} onChange={handleChange} required />
                  <small style={{ color: 'var(--accent-gold)', display: 'block', marginTop: '0.25rem', fontSize: '0.8rem' }}>* El usuario usará este correo para registrarse e iniciar sesión.</small>
                </div>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 'bold' }}>Plan / Suscripción</label>
                  <select style={{ width: '100%', padding: '0.8rem', backgroundColor: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-color)', borderRadius: '6px', color: 'var(--text-light)', outline: 'none' }} name="planId" value={formData.planId} onChange={handleChange} required>
                    <option value="" style={{ color: '#000' }}>Selecciona un plan...</option>
                    {plans.map(p => (
                      <option key={p.id} value={p.id} style={{ color: '#000' }}>{p.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 'bold' }}>Duración (Meses)</label>
                  <input type="number" style={{ width: '100%', padding: '0.8rem', backgroundColor: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-color)', borderRadius: '6px', color: 'var(--text-light)', outline: 'none' }} name="durationMonths" min="1" value={formData.durationMonths} onChange={handleChange} required />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 'bold' }}>Fecha de Vencimiento Excepcional</label>
                  <input type="date" style={{ width: '100%', padding: '0.8rem', backgroundColor: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-color)', borderRadius: '6px', color: 'var(--text-light)', outline: 'none', colorScheme: 'dark' }} name="expiresAtDate" value={formData.expiresAtDate} onChange={handleChange} required />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 'bold' }}>Estado de la cuenta</label>
                  <select style={{ width: '100%', padding: '0.8rem', backgroundColor: 'rgba(0,0,0,0.3)', border: '1px solid var(--border-color)', borderRadius: '6px', color: 'var(--text-light)', outline: 'none' }} name="status" value={formData.status} onChange={handleChange}>
                    <option value="active" style={{ color: '#000' }}>Activo (Plan Pagado)</option>
                    <option value="pending" style={{ color: '#000' }}>Pendiente de Pago</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
                <button type="button" onClick={handleCloseModal} style={{ padding: '0.8rem 1.5rem', background: 'transparent', color: 'var(--text-light)', border: '1px solid var(--border-color)', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>Cancelar</button>
                <button type="submit" style={{ padding: '0.8rem 1.5rem', background: 'var(--accent-gold)', color: '#000', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)' }}>Guardar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminMembers;
