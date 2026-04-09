import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { Dumbbell, ArrowLeft, Loader2, User, Phone, MapPin, Mail, Copy } from 'lucide-react';
import './InscripcionView.css';

const InscripcionView = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchInscripcion = async () => {
      try {
        const docRef = doc(db, 'inscriptions', id);
        
        // Timeout preventivo si Firebase se queda pensando (offline / adblocker)
        const timeoutPromise = new Promise((_, reject) => 
          setTimeout(() => reject(new Error('timeout')), 10000)
        );
        
        const docSnap = await Promise.race([
          getDoc(docRef),
          timeoutPromise
        ]);

        if (docSnap.exists()) {
          setData(docSnap.data());
        } else {
          setError('El pase de inscripción no se ha encontrado. Es posible que el proceso se haya interrumpido antes de guardarse.');
        }
      } catch (err) {
        console.error("Error fetching doc:", err);
        if (err.message === 'timeout') {
          setError('La conexión con nuestra base de datos tardó demasiado. Verifica tu conexión o intenta desactivar bloqueadores de anuncios.');
        } else {
          setError('Ocurrió un error al buscar el pase. Es posible que falten permisos en la Base de Datos.');
        }
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchInscripcion();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="inscripcion-view loading-view">
        <Loader2 className="spinner text-gold" size={48} />
        <h2 className="mt-4">RECUPERANDO PASE...</h2>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="inscripcion-view error-view">
        <Dumbbell className="text-muted mb-4" size={48} />
        <h2 className="text-gold">ENLACE INVÁLIDO</h2>
        <p>{error}</p>
        <Link to="/" className="btn-primary mt-4">VOLVER AL BASTIÓN</Link>
      </div>
    );
  }

  const date = data.createdAt?.toDate ? data.createdAt.toDate().toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }) : 'Fecha no disponible';

  const handleCopyData = () => {
    if (!data) return;
    
    const textData = `🛡️ VALHALLA BOX GYM - NUEVO PASE
-------------------------------
PLAN: ${data.plan.name.toUpperCase()}
VALOR: $${data.plan.price}

⚔️ DATOS DEL GUERRERO:
Nombre: ${data.nombre}
DNI: ${data.dni}
Teléfono: ${data.telefono}
Correo: ${data.email}
Dirección: ${data.direccion}
Género: ${data.genero}
Fecha exp.: ${date}
-------------------------------`;

    navigator.clipboard.writeText(textData)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      })
      .catch(err => console.error("Error al copiar: ", err));
  };

  return (
    <div className="inscripcion-view">
      <div className="inscripcion-card">
        <div className="inscripcion-header">
          <Dumbbell className="text-gold mb-2 mx-auto" size={48} />
          <h1 className="title">VALHALLA BOX GYM</h1>
          <div className="divider"></div>
          <p className="subtitle">COMPROBANTE DE INSCRIPCIÓN AL BASTIÓN</p>
          <div className="divider"></div>
        </div>

        <div className="plan-details">
          <h2 className="plan-title">PLAN ELEGIDO: <span className="text-gold">{data.plan.name.toUpperCase()}</span></h2>
          <p className="plan-price">Pase Mensual: ${data.plan.price}</p>
        </div>

        <div className="user-details">
          <h3 className="section-title text-gold">DATOS DEL GUERRERO</h3>
          
          <div className="data-grid">
            <div className="data-item">
              <User size={18} className="text-gold" />
              <div>
                <span className="data-label">Nombre Completo</span>
                <span className="data-value">{data.nombre}</span>
              </div>
            </div>

            <div className="data-item">
              <User size={18} className="text-gold" />
              <div>
                <span className="data-label">DNI / Identificación</span>
                <span className="data-value">{data.dni}</span>
              </div>
            </div>

            <div className="data-item">
              <Phone size={18} className="text-gold" />
              <div>
                <span className="data-label">Teléfono Móvil</span>
                <span className="data-value">{data.telefono}</span>
              </div>
            </div>

            <div className="data-item">
              <Mail size={18} className="text-gold" />
              <div>
                <span className="data-label">Correo Registrado</span>
                <span className="data-value">{data.email}</span>
              </div>
            </div>

            <div className="data-item">
              <MapPin size={18} className="text-gold" />
              <div>
                <span className="data-label">Dirección Activa</span>
                <span className="data-value">{data.direccion}</span>
              </div>
            </div>

            <div className="data-item">
              <User size={18} className="text-gold" />
              <div>
                <span className="data-label">Género</span>
                <span className="data-value">{data.genero}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="inscripcion-footer">
          <div className="divider"></div>
          <p className="footer-text">Subido al sistema y expedido por Valhalla Gym. Skål!</p>
          <p className="footer-date">Fecha de Iniciación: {date}</p>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        <button onClick={handleCopyData} className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: 'pointer', border: 'none', fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '1px' }}>
          <Copy size={18} />
          {copied ? '¡Copiado al portapapeles!' : 'Copiar Datos del Pase'}
        </button>
        <Link to="/" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
          <ArrowLeft size={18} />
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
};

export default InscripcionView;
