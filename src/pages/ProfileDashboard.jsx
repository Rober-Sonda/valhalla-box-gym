import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { collection, query, where, getDocs, orderBy, limit } from 'firebase/firestore';
import { Shield, Clock, AlertTriangle, CheckCircle, Calendar, Download } from 'lucide-react';
import './ProfileDashboard.css';

const ProfileDashboard = () => {
  const { currentUser } = useAuth();
  const [activePlan, setActivePlan] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserPlan = async () => {
      if (!currentUser) return;
      try {
        const q = query(
          collection(db, 'inscriptions'),
          where('userId', '==', currentUser.uid),
          orderBy('createdAt', 'desc'),
          limit(1)
        );
        const querySnapshot = await getDocs(q);
        
        if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0].data();
          setActivePlan({ id: querySnapshot.docs[0].id, ...doc });
        }
      } catch (error) {
        console.error("Error fetching user plan:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserPlan();
  }, [currentUser]);

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

  const getDaysRemaining = (expiresAt) => {
    if (!expiresAt) return null;
    const now = new Date();
    const expiryDate = new Date(expiresAt);
    const diffTime = expiryDate - now;
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const getStatusColor = (daysRemaining, status) => {
    if (status === 'pending') return '#f39c12'; // Naranja
    if (daysRemaining !== null && daysRemaining <= 0) return '#e74c3c'; // Rojo
    if (daysRemaining !== null && daysRemaining <= 5) return '#f1c40f'; // Amarillo
    return '#2ecc71'; // Verde
  };

  const daysRemaining = activePlan ? getDaysRemaining(activePlan.expiresAt) : null;
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
            <h1>SALÓN DE <span className="text-gold">{currentUser.displayName?.split(' ')[0] || 'GUERRERO'}</span></h1>
            <p className="text-muted">{currentUser.email}</p>
          </div>
        </div>

        {!activePlan ? (
          <div className="profile-card empty-state">
            <Shield size={64} className="text-muted mb-3 mx-auto" />
            <h3>Aún no has forjado tu alianza</h3>
            <p className="text-muted mb-4">No tienes ningún plan activo en el sistema. Visita la sección de Tarifas para unirte al Valhalla.</p>
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
    </div>
  );
};

export default ProfileDashboard;
