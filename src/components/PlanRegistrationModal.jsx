import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { X, FileText, Dumbbell, Landmark, Banknote, Copy, Check, ChevronDown, Smartphone } from 'lucide-react';
import { db } from '../firebase';
import { collection, doc, setDoc, serverTimestamp } from 'firebase/firestore';
import './PlanRegistrationModal.css';
const WHATSAPP_NUMBER = '542317533963';

const PlanRegistrationModal = ({ plan, isOpen, onClose }) => {
  const { currentUser } = useAuth();
  
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    dni: '',
    telefono: '',
    direccion: '',
    genero: '',
    pago: 'transferencia'
  });
  
  const [isUploading, setIsUploading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [addEscaldo, setAddEscaldo] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setAddEscaldo(false);
    }
  }, [isOpen]);

  const handleCopyAlias = () => {
    navigator.clipboard.writeText('robersonda.mp');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Pre-llenar si hay currentUser
  useEffect(() => {
    if (currentUser && isOpen) {
      setFormData(prev => ({
        ...prev,
        nombre: currentUser.displayName || '',
        email: currentUser.email || ''
      }));
    }
  }, [currentUser, isOpen]);

  if (!isOpen || !plan) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const generatePDFAndSend = async (e) => {
    e.preventDefault();
    setIsUploading(true);

    try {
      // Generar una referencia y un ID síncronamente para poder usar window.open de inmediato
      const newDocRef = doc(collection(db, "inscriptions"));
      const docId = newDocRef.id;
      
      const numericPrice = Number(plan.price.replace(/\./g, ''));
      const isEfectivo = formData.pago === 'efectivo' && plan?.id !== 'escaldo';

      let totalAmount = numericPrice;
      if (isEfectivo) {
        totalAmount = numericPrice * 0.9;
      }
      if (addEscaldo) {
        totalAmount += 39000;
      }

      const finalPriceFormatted = new Intl.NumberFormat('es-AR').format(totalAmount);
      const finalPlanName = addEscaldo ? `${plan.name} + ESCALDO` : plan.name;

      const inscriptionData = {
        userId: currentUser?.uid || null,
        nombre: formData.nombre,
        email: formData.email,
        dni: formData.dni,
        telefono: formData.telefono,
        direccion: formData.direccion,
        genero: formData.genero,
        pago: formData.pago,
        precioFinal: finalPriceFormatted,
        plan: {
          name: finalPlanName,
          price: finalPriceFormatted,
          period: plan.period || ''
        },
        createdAt: serverTimestamp()
      };

      // Guardar resolviendo de manera segura. Si Firestore se queda colgado, forzamos avance a los 2 segundos.
      const savePromise = setDoc(newDocRef, inscriptionData);
      const fallbackTimer = new Promise((resolve) => setTimeout(resolve, 2000));
      
      try {
        await Promise.race([savePromise, fallbackTimer]);
      } catch(err) {
        console.warn("Ignorando error o timeout de DB para no bloquear al usuario:", err);
      }

      // Crear URL dinámica
      const inscriptionUrl = `${window.location.origin}/inscripcion/${docId}`;

      // Generar mensaje de WhatsApp
      const message = 
        `⚔️ ¡Skål Valhalla! Soy *${formData.nombre}* (DNI: ${formData.dni}).\n` +
        `Me he registrado desde la web para el plan *${finalPlanName}*.\n\n` +
        `💰 *Método de Pago*: ${isEfectivo ? (addEscaldo ? 'Efectivo (-10% al plan base)' : 'Efectivo (10% OFF)') : 'Transferencia'}\n` +
        `💳 *Total a coordinar*: $${finalPriceFormatted}\n\n` +
        `🪓 *MI PASE OFICIAL*: ${inscriptionUrl}`;

      // Redirigir a WhatsApp usando redireccion directa
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      
      if (formData.pago === 'mercadopago') {
        try {
          const apiUrl = "https://us-central1-valhalla-box-gym-app.cloudfunctions.net/api";
            
          const res = await fetch(`${apiUrl}/checkout/preference`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              items: [{
                title: finalPlanName,
                quantity: 1,
                unit_price: totalAmount
              }],
              payer: {
                name: formData.nombre,
                email: formData.email
              },
              redirectUrl: window.location.origin
            })
          });
          
          if (!res.ok) throw new Error("Error generating preference");
          
          const data = await res.json();
          window.open(whatsappUrl, '_blank');
          window.location.href = data.init_point;
          onClose();
          return;
        } catch (err) {
          console.error(err);
          alert("Hubo un error al conectar con Mercado Pago. Intenta nuevamente.");
          setIsUploading(false);
          return;
        }
      }
      
      window.location.href = whatsappUrl;
      onClose();

    } catch (error) {
      console.error("Error al generar la inscripción:", error);
      alert("Hubo un error en el servidor: " + error.message + ". \nIntenta de nuevo.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="auth-modal-overlay" onClick={onClose}>
      {/* Reusamos la clase auth-modal-content para mantener la consistencia estética */}
      <div className="auth-modal-content plan-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="auth-close-btn" onClick={onClose} type="button">
          <X size={24} />
        </button>

        <div className="auth-header">
          <Dumbbell className="text-gold mb-2 mx-auto" size={32} />
          <h2>DATOS DE <span className="text-gold">INSCRIPCIÓN</span></h2>
          <p className="text-muted">
            Plan Elegido: <strong>{plan.name} (${plan.price}{plan.period})</strong>
          </p>
        </div>

        <form onSubmit={generatePDFAndSend} className="auth-form plan-form">
          
          <div className="form-group-row">
            <div className="form-group flex-fill">
              <label>Nombre Completo</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Ragnar Lothbrok"
                required
              />
            </div>

            <div className="form-group flex-fill">
              <label>DNI</label>
              <input
                type="text"
                name="dni"
                value={formData.dni}
                onChange={handleChange}
                placeholder="00.000.000"
                required
              />
            </div>
          </div>

          <div className="form-group-row">
            <div className="form-group flex-fill">
              <label>Celular</label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="+54 9 00 0000 0000"
                required
              />
            </div>

            <div className="form-group flex-fill">
              <label>Dirección</label>
              <input
                type="text"
                name="direccion"
                value={formData.direccion}
                onChange={handleChange}
                placeholder="Tu dirección"
                required
              />
            </div>
          </div>

          <div className="form-group-row">
            <div className="form-group flex-fill">
              <label>Correo Electrónico</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@correo.com"
                required
              />
            </div>

            <div className="form-group flex-fill">
              <label>Género</label>
              <div style={{ position: 'relative' }}>
                <select
                  name="genero"
                  value={formData.genero}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Selecciona tu género</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Femenino">Femenino</option>
                  <option value="Prefiero no decirlo">Prefiero no decirlo</option>
                </select>
                <ChevronDown size={20} style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--text-muted)' }} />
              </div>
            </div>
          </div>

          {plan?.id !== 'escaldo' && (
            <div className="form-group-row mt-3 mb-2">
              <div 
                className="disclaimer-info w-100" 
                style={{ cursor: 'pointer', borderLeft: addEscaldo ? '3px solid var(--accent-gold)' : '3px solid var(--border-color)', backgroundColor: addEscaldo ? 'rgba(197, 160, 89, 0.15)' : 'rgba(0,0,0,0.2)', transition: 'all 0.3s ease' }}
                onClick={() => setAddEscaldo(!addEscaldo)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '100%' }}>
                  <div style={{ width: '20px', height: '20px', minWidth: '20px', border: '2px solid var(--accent-gold)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: addEscaldo ? 'var(--accent-gold)' : 'transparent', transition: 'all 0.3s ease' }}>
                    {addEscaldo && <Check size={14} color="#000" />}
                  </div>
                  <div>
                    <strong style={{ color: 'var(--text-light)', display: 'block', marginBottom: '2px' }}>Sumar Plan Nutricional ESCALDO</strong>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Añadir seguimiento nutricional y de rutina 100% personalizado por +$39.000/mes</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="form-group-row mt-2 d-block">
            <div className="form-group w-100">
              <label>Método de Pago (Para coordinar por WhatsApp)</label>
              {plan?.id === 'escaldo' && (
                <div className="p-2 mb-2 text-center" style={{ backgroundColor: 'rgba(70, 130, 180, 0.1)', border: '1px solid rgba(70, 130, 180, 0.3)', borderRadius: '4px', fontSize: '0.85rem' }}>
                  <strong className="text-light">Atención:</strong> El Plan Escaldo (A Distancia) se abona exclusivamente por transferencia.
                </div>
              )}
              <div className="payment-toggle mt-2">
                <div 
                  className={`toggle-option ${formData.pago === 'transferencia' || plan?.id === 'escaldo' ? 'active' : ''}`}
                  onClick={() => setFormData({...formData, pago: 'transferencia'})}
                >
                  <div className="toggle-watermark">
                    <Landmark size={36} />
                  </div>
                  <span className="toggle-content">Banco/Alias</span>
                </div>
                <div 
                  className={`toggle-option ${formData.pago === 'mercadopago' && plan?.id !== 'escaldo' ? 'active' : ''} ${plan?.id === 'escaldo' ? 'disabled' : ''}`}
                  onClick={() => {
                    if (plan?.id !== 'escaldo') setFormData({...formData, pago: 'mercadopago'})
                  }}
                  style={plan?.id === 'escaldo' ? { opacity: 0.4, cursor: 'not-allowed', filter: 'grayscale(1)' } : {}}
                  title={plan?.id === 'escaldo' ? 'Usar transferencia para planes a distancia' : ''}
                >
                  <div className="toggle-watermark">
                    <Smartphone size={36} />
                  </div>
                  <span className="toggle-content">App MercadoPago</span>
                </div>
                <div 
                  className={`toggle-option ${(formData.pago === 'efectivo' && plan?.id !== 'escaldo') ? 'active' : ''} ${plan?.id === 'escaldo' ? 'disabled' : ''}`}
                  onClick={() => {
                    if (plan?.id !== 'escaldo') setFormData({...formData, pago: 'efectivo'})
                  }}
                  style={plan?.id === 'escaldo' ? { opacity: 0.4, cursor: 'not-allowed', filter: 'grayscale(1)' } : {}}
                  title={plan?.id === 'escaldo' ? 'No disponible en planes a distancia' : ''}
                >
                  <div className="toggle-watermark">
                    <Banknote size={36} />
                  </div>
                  <span className="toggle-content">Efectivo (-10%)</span>
                </div>
              </div>
            </div>
          </div>

          {(formData.pago === 'efectivo' && plan?.id !== 'escaldo') && (
            <div className="p-3 mb-3 text-center mt-2" style={{ backgroundColor: 'rgba(197, 160, 89, 0.1)', border: '1px solid rgba(197, 160, 89, 0.3)', borderRadius: '8px' }}>
              <strong className="text-gold">¡10% de Descuento Aplicado! {addEscaldo && <span style={{fontSize: '0.8rem', color: 'var(--text-muted)'}}>(Al plan base)</span>}</strong><br />
              El precio final a abonar será de <strong>${new Intl.NumberFormat('es-AR').format((Number(plan.price.replace(/\./g, '')) * 0.9) + (addEscaldo ? 39000 : 0))}</strong> {plan.period}
            </div>
          )}

          {(formData.pago === 'transferencia' || plan?.id === 'escaldo') && (
            <div className="p-3 mb-3 text-center mt-2" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
              <strong>Alias para transferencia (Banco):</strong> <br />
              <div className="d-flex-center mt-2 mb-2">
                <code style={{ fontSize: '1.3em', color: 'var(--accent-gold)' }}>robersonda.mp</code>
                <button 
                  type="button" 
                  onClick={handleCopyAlias}
                  style={{ background: 'var(--bg-dark)', border: '1px solid var(--border-color)', borderRadius: '4px', cursor: 'pointer', padding: '6px', display: 'flex', marginLeft: '10px' }}
                  title="Copiar Alias"
                >
                  {copied ? <Check size={18} color="var(--accent-gold)" /> : <Copy size={18} color="var(--text-muted)" />}
                </button>
              </div>
              <small className="text-muted">El pago final es de ${new Intl.NumberFormat('es-AR').format(Number(plan.price.replace(/\./g, '')) + (addEscaldo ? 39000 : 0))}. Se coordinará enviando el comprobante.</small>
            </div>
          )}

          {formData.pago === 'mercadopago' && plan?.id !== 'escaldo' && (
            <div className="p-3 mb-3 text-center mt-2" style={{ backgroundColor: 'rgba(0, 158, 227, 0.1)', border: '1px solid rgba(0, 158, 227, 0.3)', borderRadius: '8px' }}>
              <strong style={{ color: '#009EE3' }}>Transferencia directa por Mercado Pago</strong><br />
              Al presionar "FORJAR ALIANZA", se abrirá una nueva pestaña con la <strong>App de Mercado Pago</strong> para que transfieras el monto exacto (${new Intl.NumberFormat('es-AR').format(Number(plan.price.replace(/\./g, '')) + (addEscaldo ? 39000 : 0))}), y también te llevaremos a WhatsApp para que nos pases el comprobante.
            </div>
          )}

          <div className="disclaimer-info mt-3">
            <FileText size={18} className="text-gold" />
            <span>Al forjar tu alianza, tu información se subirá a nuestro sistema y se generará un enlace oficial que enviaremos a nuestro WhatsApp para asentar tu base en el Bastión.</span>
          </div>

          <div className="form-actions mt-4">
            <button type="button" className="btn-outline w-100 d-flex-center" onClick={onClose} disabled={isUploading}>
              CANCELAR
            </button>
            <button type="submit" className="btn-primary w-100 d-flex-center" disabled={isUploading}>
              {isUploading ? 'FORJANDO...' : 'FORJAR ALIANZA'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlanRegistrationModal;
