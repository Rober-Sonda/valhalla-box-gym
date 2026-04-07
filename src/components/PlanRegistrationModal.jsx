import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { X, FileText, Dumbbell, Landmark, Banknote, Copy, Check, ChevronDown } from 'lucide-react';
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

  const handleCopyAlias = () => {
    navigator.clipboard.writeText('valhalla.box.gym');
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generatePDFAndSend = async (e) => {
    e.preventDefault();
    setIsUploading(true);

    try {
      // Generar una referencia y un ID síncronamente para poder usar window.open de inmediato
      const newDocRef = doc(collection(db, "inscriptions"));
      const docId = newDocRef.id;
      
      const numericPrice = Number(plan.price.replace(/\./g, ''));
      const discountedPrice = numericPrice * 0.9;
      const isEfectivo = formData.pago === 'efectivo';
      const finalPriceFormatted = new Intl.NumberFormat('es-AR').format(isEfectivo ? discountedPrice : numericPrice);

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
          name: plan.name,
          price: plan.price,
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
        `Me he registrado desde la web para el plan *${plan.name}*.\n\n` +
        `💰 *Método de Pago*: ${isEfectivo ? 'Efectivo (10% OFF)' : 'Transferencia'}\n` +
        `💳 *Total a coordinar*: $${finalPriceFormatted}\n\n` +
        `🪓 *MI PASE OFICIAL*: ${inscriptionUrl}`;

      // Redirigir a WhatsApp usando redireccion directa para evitar bloqueos
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      
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

          <div className="form-group-row mt-2 d-block">
            <div className="form-group w-100">
              <label>Método de Pago (Para coordinar por WhatsApp)</label>
              <div className="payment-toggle mt-2">
                <div 
                  className={`toggle-option ${formData.pago === 'transferencia' ? 'active' : ''}`}
                  onClick={() => setFormData({...formData, pago: 'transferencia'})}
                >
                  <div className="toggle-watermark">
                    <Landmark size={36} />
                  </div>
                  <span className="toggle-content">Transferencia</span>
                </div>
                <div 
                  className={`toggle-option ${formData.pago === 'efectivo' ? 'active' : ''}`}
                  onClick={() => setFormData({...formData, pago: 'efectivo'})}
                >
                  <div className="toggle-watermark">
                    <Banknote size={36} />
                  </div>
                  <span className="toggle-content">Efectivo (-10%)</span>
                </div>
              </div>
            </div>
          </div>

          {formData.pago === 'efectivo' && (
            <div className="p-3 mb-3 text-center mt-2" style={{ backgroundColor: 'rgba(197, 160, 89, 0.1)', border: '1px solid rgba(197, 160, 89, 0.3)', borderRadius: '8px' }}>
              <strong className="text-gold">¡10% de Descuento Aplicado!</strong><br />
              El precio final a abonar será de <strong>${new Intl.NumberFormat('es-AR').format(Number(plan.price.replace(/\./g, '')) * 0.9)}</strong> {plan.period}
            </div>
          )}

          {formData.pago === 'transferencia' && (
            <div className="p-3 mb-3 text-center mt-2" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
              <strong>Alias para transferencia:</strong> <br />
              <div className="d-flex-center mt-2 mb-2">
                <code style={{ fontSize: '1.3em', color: 'var(--accent-gold)' }}>valhalla.box.gym</code>
                <button 
                  type="button" 
                  onClick={handleCopyAlias}
                  style={{ background: 'var(--bg-dark)', border: '1px solid var(--border-color)', borderRadius: '4px', cursor: 'pointer', padding: '6px', display: 'flex', marginLeft: '10px' }}
                  title="Copiar Alias"
                >
                  {copied ? <Check size={18} color="var(--accent-gold)" /> : <Copy size={18} color="var(--text-muted)" />}
                </button>
              </div>
              <small className="text-muted">El pago final es de ${plan.price}. Se coordinará enviando el comprobante por WhatsApp.</small>
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
