import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { collection, query, where, getDocs, orderBy, limit, doc, getDoc, setDoc } from 'firebase/firestore';
import { Shield, Clock, AlertTriangle, CheckCircle, Calendar, Download, Edit2, Save, X, LogOut } from 'lucide-react';
import './ProfileDashboard.css';

const ProfileDashboard = () => {
  const { currentUser, logout } = useAuth();
  const [activePlan, setActivePlan] = useState(null);
  const [userProfile, setUserProfile] = useState({
    nickname: '',
    birthdate: '',
    gender: ''
  });
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [loading, setLoading] = useState(true);
  const [notifications, setNotifications] = useState([]);
  const [showExpiryModal, setShowExpiryModal] = useState(false);

  useEffect(() => {
    const fetchUserPlan = async () => {
      if (!currentUser) return;
      try {
        let q = query(
          collection(db, 'inscriptions'),
          where('email', '==', currentUser.email),
          orderBy('createdAt', 'desc'),
          limit(1)
        );
        let querySnapshot = await getDocs(q);

        // Fallback para inscripciones antiguas que puedan no tener email guardado
        if (querySnapshot.empty) {
          q = query(
            collection(db, 'inscriptions'),
            where('userId', '==', currentUser.uid),
            orderBy('createdAt', 'desc'),
            limit(1)
          );
          querySnapshot = await getDocs(q);
        }
        
        if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0].data();
          setActivePlan({ id: querySnapshot.docs[0].id, ...doc });
        }

        // Fetch user profile data
        const userDocRef = doc(db, 'users', currentUser.uid);
        const userDocSnap = await getDoc(userDocRef);
        if (userDocSnap.exists()) {
          setUserProfile(userDocSnap.data());
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserPlan();
  }, [currentUser]);

  useEffect(() => {
    // Fetch notifications
    const fetchNotifs = async () => {
      try {
        const q = query(collection(db, 'notifications'), orderBy('createdAt', 'desc'), limit(10));
        const snapshot = await getDocs(q);
        const allNotifs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        
        // Filter by target (all or specific plan) and < 24h old
        const now = new Date();
        const yesterday = new Date(now.getTime() - (24 * 60 * 60 * 1000));
        
        const validNotifs = allNotifs.filter(n => {
          const createdAt = n.createdAt?.toDate ? n.createdAt.toDate() : new Date(0);
          const isRecent = createdAt > yesterday;
          const isTargeted = n.target === 'all' || (activePlan && n.target === activePlan.plan?.id);
          return isRecent && isTargeted;
        });

        setNotifications(validNotifs);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };
    
    if (currentUser) {
      fetchNotifs();
    }
  }, [currentUser, activePlan]);

  const getDaysRemaining = (expiresAt) => {
    if (!expiresAt) return null;
    const now = new Date();
    const expiryDate = new Date(expiresAt);
    const diffTime = expiryDate - now;
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const daysRemaining = activePlan ? getDaysRemaining(activePlan.expiresAt) : null;

  // Handle expiry modal logic
  useEffect(() => {
    if (daysRemaining !== null && daysRemaining <= 5 && daysRemaining > 0 && activePlan?.status !== 'pending' && currentUser) {
      const hasSeen = sessionStorage.getItem(`expiry_modal_seen_${currentUser.uid}`);
      if (!hasSeen) {
        setShowExpiryModal(true);
        sessionStorage.setItem(`expiry_modal_seen_${currentUser.uid}`, 'true');
      }
    }
  }, [daysRemaining, activePlan, currentUser]);

  if (loading) {
    return (
      <div className="profile-loading">
        <Shield size={48} className="spin-slow text-gold" />
        <p>Buscando en los registros del Valhalla...</p>
      </div>
    );
  }

  if (!currentUser) {
    return (
      <div className="profile-container" style={{paddingTop: '120px', minHeight: '60vh'}}>
        <div className="profile-card text-center" style={{maxWidth: '500px', margin: '0 auto'}}>
          <Shield size={64} className="text-muted mx-auto mb-3" />
          <h2>Debes iniciar sesión para ver tu perfil.</h2>
        </div>
      </div>
    );
  }

  const getStatusColor = (daysRemaining, status) => {
    if (status === 'pending') return '#f39c12'; // Naranja
    if (daysRemaining !== null && daysRemaining <= 0) return '#e74c3c'; // Rojo
    if (daysRemaining !== null && daysRemaining <= 5) return '#f1c40f'; // Amarillo
    return '#2ecc71'; // Verde
  };

  const isExpired = daysRemaining !== null && daysRemaining <= 0;
  
  // Retrocompatibilidad: Si el plan no tiene expiresAt, calculamos uno genérico de 30 días desde createdAt
  let displayExpiry = activePlan?.expiresAt ? new Date(activePlan.expiresAt) : null;
  if (!displayExpiry && activePlan?.createdAt) {
    displayExpiry = new Date(activePlan.createdAt.seconds * 1000);
    displayExpiry.setDate(displayExpiry.getDate() + 30);
  }

  return (
    <div className="profile-page">
      <div className="container profile-container">
        
        <div className="profile-header">
          <div className="profile-avatar">
            {currentUser.photoURL ? (
              <img src={currentUser.photoURL} alt="Avatar" />
            ) : (
              <div className="avatar-placeholder">{currentUser.displayName?.charAt(0) || 'G'}</div>
            )}
          </div>
          <div className="profile-title">
            <h1>SALÓN DE <span className="text-gold">{userProfile.nickname || currentUser.displayName?.split(' ')[0] || 'GUERRERO'}</span></h1>
            <p className="text-muted">{currentUser.email}</p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', marginLeft: 'auto', alignSelf: 'center', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
            {!isEditingProfile && (
              <button className="btn-outline" onClick={() => setIsEditingProfile(true)} style={{ padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Edit2 size={16} /> Completar Perfil
              </button>
            )}
            <button className="btn-outline" onClick={logout} style={{ padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#f87171', borderColor: 'rgba(248,113,113,0.3)' }}>
              <LogOut size={16} /> Salir
            </button>
          </div>
        </div>

        {isEditingProfile && (
          <div className="profile-card mb-4" style={{ backgroundColor: 'var(--bg-dark)', border: '1px solid var(--accent-gold)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h3 style={{ margin: 0, color: 'var(--text-light)' }}>Mis Datos de Guerrero</h3>
              <button onClick={() => setIsEditingProfile(false)} style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
                <X size={20} />
              </button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Apodo / Nick</label>
                <input type="text" value={userProfile.nickname} onChange={(e) => setUserProfile({...userProfile, nickname: e.target.value})} style={{ width: '100%', padding: '0.5rem', backgroundColor: 'rgba(0,0,0,0.5)', border: '1px solid var(--border-color)', color: 'var(--text-light)', borderRadius: '4px' }} placeholder="Tu nombre de batalla" />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Fecha de Nacimiento</label>
                <input type="date" value={userProfile.birthdate} onChange={(e) => setUserProfile({...userProfile, birthdate: e.target.value})} style={{ width: '100%', padding: '0.5rem', backgroundColor: 'rgba(0,0,0,0.5)', border: '1px solid var(--border-color)', color: 'var(--text-light)', borderRadius: '4px' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Género</label>
                <select value={userProfile.gender} onChange={(e) => setUserProfile({...userProfile, gender: e.target.value})} style={{ width: '100%', padding: '0.5rem', backgroundColor: 'rgba(0,0,0,0.5)', border: '1px solid var(--border-color)', color: 'var(--text-light)', borderRadius: '4px' }}>
                  <option value="">Seleccionar...</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Femenino">Femenino</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>
            </div>
            <button className="btn-primary mt-3" onClick={async () => {
              try {
                await setDoc(doc(db, 'users', currentUser.uid), userProfile, { merge: true });
                setIsEditingProfile(false);
              } catch(e) { console.error(e); alert('Error guardando perfil'); }
            }} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Save size={16} /> Guardar Perfil
            </button>
          </div>
        )}

        {notifications.length > 0 && (
          <div className="profile-card mb-4" style={{ backgroundColor: 'rgba(255, 68, 68, 0.05)', border: '1px solid #ff4444' }}>
            <h3 style={{ color: '#ff4444', display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0, marginBottom: '1rem' }}>
              <AlertTriangle size={20} /> Anuncios de la Tribu
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {notifications.map(notif => (
                <div key={notif.id} style={{ padding: '1rem', backgroundColor: 'var(--bg-dark)', borderRadius: '8px', borderLeft: '3px solid #ff4444' }}>
                  <h4 style={{ margin: 0, marginBottom: '0.5rem', color: 'var(--text-light)' }}>{notif.title}</h4>
                  <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem' }}>{notif.message}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {!activePlan ? (
          <div className="profile-card empty-state">
            <Shield size={64} className="text-muted mb-3 mx-auto" />
            <h3>Aún no has forjado tu alianza</h3>
            <p className="text-muted mb-4">No tienes ningún plan activo en el sistema. Visita la sección de Tarifas para unirte al Valhalla.</p>
            <div style={{ padding: '1rem', backgroundColor: 'rgba(197, 160, 89, 0.1)', border: '1px solid var(--accent-gold)', borderRadius: '8px', marginBottom: '1.5rem', textAlign: 'left' }}>
              <p style={{ color: 'var(--text-light)', margin: 0, fontSize: '0.9rem' }}>
                <strong>¿Pagaste por ventanilla o transferencia?</strong><br/>
                Comunícate con el administrador y envíale tu comprobante para que tu plan sea activado manualmente en esta plataforma.
              </p>
            </div>
            <a href="/#pricing" className="btn-primary" style={{display: 'inline-block'}}>VER TARIFAS</a>
          </div>
        ) : (
          <div className="profile-dashboard-grid">
            
            {/* Tarjeta de Estado Principal */}
            <div className="profile-card main-status-card" style={{ borderTop: `4px solid ${getStatusColor(daysRemaining, activePlan.status)}` }}>
              <div className="status-header">
                <h2>TU ALIANZA ACTUAL</h2>
                <div className="status-badge" style={{ backgroundColor: `${getStatusColor(daysRemaining, activePlan.status)}20`, color: getStatusColor(daysRemaining, activePlan.status) }}>
                  {activePlan.status === 'pending' ? 'PENDIENTE DE PAGO' : (isExpired ? 'VENCIDO' : 'ACTIVO')}
                </div>
              </div>
              
              <div className="plan-name-display">
                <h3>{activePlan.plan?.name || 'Plan Desconocido'}</h3>
              </div>

              {activePlan.status !== 'pending' && !isExpired && daysRemaining !== null && daysRemaining <= 5 && (
                <div className="expiry-warning">
                  <AlertTriangle size={20} />
                  <span>¡Tu alianza expira en {daysRemaining} días! Prepárate para renovar.</span>
                </div>
              )}

              <div className="dates-grid">
                <div className="date-item">
                  <div className="date-icon"><Calendar size={18} /></div>
                  <div className="date-info">
                    <span className="date-label">Fecha de Inicio</span>
                    <span className="date-value">
                      {activePlan.startDate 
                        ? new Date(activePlan.startDate).toLocaleDateString('es-AR') 
                        : (activePlan.createdAt ? new Date(activePlan.createdAt.seconds * 1000).toLocaleDateString('es-AR') : 'N/A')}
                    </span>
                  </div>
                </div>
                <div className="date-item">
                  <div className="date-icon"><Clock size={18} /></div>
                  <div className="date-info">
                    <span className="date-label">Fecha de Vencimiento</span>
                    <span className="date-value" style={{ color: daysRemaining <= 5 ? 'var(--accent-gold)' : 'inherit' }}>
                      {displayExpiry ? displayExpiry.toLocaleDateString('es-AR') : 'N/A'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tarjeta de Detalles del Plan */}
            <div className="profile-card details-card">
              <h3>Detalles del Pago</h3>
              <ul className="details-list">
                <li>
                  <span className="detail-label">Método de Pago:</span>
                  <span className="detail-value" style={{textTransform: 'capitalize'}}>{activePlan.pago}</span>
                </li>
                <li>
                  <span className="detail-label">Monto Abonado:</span>
                  <span className="detail-value font-bold text-gold">${activePlan.precioFinal || activePlan.plan?.price}</span>
                </li>
                {activePlan.durationMonths && (
                  <li>
                    <span className="detail-label">Duración Adquirida:</span>
                    <span className="detail-value">{activePlan.durationMonths} Meses</span>
                  </li>
                )}
              </ul>
              
              <a href={`/inscripcion/${activePlan.id}`} target="_blank" rel="noreferrer" className="btn-outline w-100 mt-4 d-flex-center" style={{gap: '8px'}}>
                <Download size={18} /> VER PASE OFICIAL
              </a>
            </div>

            {/* Tarjeta de Beneficios */}
            <div className="profile-card benefits-card md-col-span-2">
              <h3>Tus Beneficios en el Valhalla</h3>
              <div className="benefits-grid">
                {activePlan.plan?.name?.toLowerCase().includes('escaldo') && (
                  <div className="benefit-item">
                    <CheckCircle className="text-gold" size={24} />
                    <div>
                      <h4>Plan Nutricional 100%</h4>
                      <p className="text-muted">Seguimiento personalizado mensual de tus métricas y dieta.</p>
                    </div>
                  </div>
                )}
                
                {(activePlan.plan?.name?.toLowerCase().includes('guerrero') || activePlan.plan?.id === 'guerrero') && (
                  <div className="benefit-item">
                    <CheckCircle className="text-gold" size={24} />
                    <div>
                      <h4>Sala de Musculación</h4>
                      <p className="text-muted">Acceso libre 1 vez al día de Lunes a Sábados con rutinas guiadas.</p>
                    </div>
                  </div>
                )}

                {(activePlan.plan?.name?.toLowerCase().includes('vikingo') || activePlan.plan?.id === 'vikingo') && (
                  <div className="benefit-item">
                    <CheckCircle className="text-gold" size={24} />
                    <div>
                      <h4>Acceso a Clases</h4>
                      <p className="text-muted">Kick Boxing, G.A.P, y Crosstraining disponibles.</p>
                    </div>
                  </div>
                )}

                {(activePlan.plan?.name?.toLowerCase().includes('berserker') || activePlan.plan?.id === 'berserker') && (
                  <div className="benefit-item">
                    <CheckCircle className="text-gold" size={24} />
                    <div>
                      <h4>Pase Total</h4>
                      <p className="text-muted">Acceso irrestricto a Musculación y todas las Clases del Valhalla.</p>
                    </div>
                  </div>
                )}

                <div className="benefit-item">
                  <CheckCircle className="text-gold" size={24} />
                  <div>
                    <h4>APP Exclusiva</h4>
                    <p className="text-muted">Control de tus rutinas desde tu celular.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}
      </div>

      {showExpiryModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'var(--overlay-dark)', zIndex: 9999, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
          <div className="profile-card text-center" style={{ width: '100%', maxWidth: '400px', border: '2px solid #f1c40f', backgroundColor: '#1a1a1a' }}>
            <AlertTriangle size={64} style={{ color: '#f1c40f', margin: '0 auto 1rem auto' }} />
            <h2 style={{ color: '#f1c40f', marginBottom: '1rem' }}>¡Atención Guerrero!</h2>
            <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              Tu alianza en el Valhalla vence en <strong>{daysRemaining} días</strong>.
            </p>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
              Recuerda renovar tu pago por ventanilla para seguir entrenando sin interrupciones.
            </p>
            <button className="btn-primary w-100" onClick={() => setShowExpiryModal(false)}>
              ENTENDIDO
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDashboard;
