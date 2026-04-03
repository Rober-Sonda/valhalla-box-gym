import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { X, FileText, Dumbbell } from 'lucide-react';
import { db } from '../firebase';
import { collection, doc, setDoc, serverTimestamp } from 'firebase/firestore';
import './PlanRegistrationModal.css';
const WHATSAPP_NUMBER = '542317533963';

const PlanRegistrationModal = ({ plan, isOpen, onClose }) => {
  const { currentUser } = useAuth();
  
  // States para el formulario
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    dni: '',
    telefono: '',
    direccion: '',
    genero: ''
  });
  
  const [isUploading, setIsUploading] = useState(false);

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
      
      const inscriptionData = {
        userId: currentUser?.uid || null,
        nombre: formData.nombre,
        email: formData.email,
        dni: formData.dni,
        telefono: formData.telefono,
        direccion: formData.direccion,
        genero: formData.genero,
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
        `🪓 *AQUÍ ESTÁ MI PASE OFICIAL DE INSCRIPCIÓN*: ${inscriptionUrl}`;

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
              <label>Identificación (DNI)</label>
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
              <label>Teléfono Celular</label>
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
              <label>Dirección Terrenal</label>
              <input
                type="text"
                name="direccion"
                value={formData.direccion}
                onChange={handleChange}
                placeholder="Calle Vikinga 123, Ciudad"
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
            </div>
          </div>

          <div className="disclaimer-info mt-3">
            <FileText size={18} className="text-gold" />
            <span>Al forjar inscripción, tu información se subirá a nuestro sistema y se generará un enlace oficial que enviaremos a nuestro WhatsApp para asentar tu base en el Bastión.</span>
          </div>

          <div className="form-actions mt-4">
            <button type="button" className="btn-outline w-100 d-flex-center" onClick={onClose} disabled={isUploading}>
              CANCELAR
            </button>
            <button type="submit" className="btn-primary w-100 d-flex-center" disabled={isUploading}>
              {isUploading ? 'FORJANDO...' : 'FORJAR INSCRIPCIÓN'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlanRegistrationModal;
