import React, { useState, useEffect } from 'react';
import { jsPDF } from 'jspdf';
import { useAuth } from '../context/AuthContext';
import { X, FileText, Dumbbell } from 'lucide-react';
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
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
      // 1. Generar el documento PDF
      const doc = new jsPDF();
      
      // Fondo oscuro
      doc.setFillColor(15, 15, 17); // bg-dark
      doc.rect(0, 0, 210, 297, 'F');
      
      // Borde interior dorado
      doc.setDrawColor(197, 160, 89);
      doc.setLineWidth(1);
      doc.rect(5, 5, 200, 287);

      // Borde decorativo fino (interior)
      doc.setLineWidth(0.3);
      doc.rect(7, 7, 196, 283);

      // Configuración de texto y alineación
      doc.setTextColor(197, 160, 89);
      doc.setFontSize(28);
      // Título Central
      doc.text("VALHALLA BOX GYM", 105, 35, { align: "center", fontStyle: "bold" });
      
      doc.setFontSize(14);
      doc.setTextColor(200, 200, 200);
      doc.text("--------------------------------------------", 105, 45, { align: "center" });
      doc.text("COMPROBANTE DE INSCRIPCION AL BASTION", 105, 52, { align: "center", fontStyle: "italic" });
      doc.text("--------------------------------------------", 105, 59, { align: "center" });

      // Titulo de Plan
      doc.setFontSize(22);
      doc.setTextColor(197, 160, 89);
      doc.text(`PLAN ELEGIDO: ${plan.name.toUpperCase()}`, 105, 80, { align: "center", fontStyle: "bold" });
      doc.setFontSize(16);
      doc.setTextColor(255, 255, 255);
      doc.text(`Pase Mensual: $${plan.price}`, 105, 90, { align: "center" });

      // Línea separadora
      doc.setDrawColor(50, 50, 50);
      doc.line(20, 105, 190, 105);

      // Datos del Usuario
      doc.setFontSize(18);
      doc.setTextColor(197, 160, 89);
      doc.text("DATOS DEL GUERRERO", 20, 120);
      
      doc.setFontSize(14);
      doc.setTextColor(220, 220, 220);
      
      // Lista de datos
      const lineSpacing = 12;
      let currentY = 135;
      
      doc.text(`Nombre Completo: ${formData.nombre}`, 20, currentY);
      currentY += lineSpacing;
      doc.text(`DNI / Identificación: ${formData.dni}`, 20, currentY);
      currentY += lineSpacing;
      doc.text(`Teléfono Móvil: ${formData.telefono}`, 20, currentY);
      currentY += lineSpacing;
      doc.text(`Correo Registrado: ${formData.email}`, 20, currentY);
      currentY += lineSpacing;
      doc.text(`Dirección Activa: ${formData.direccion}`, 20, currentY);
      currentY += lineSpacing;
      doc.text(`Género: ${formData.genero}`, 20, currentY);

      // Footer de la hoja
      doc.line(20, 250, 190, 250);
      doc.setFontSize(12);
      doc.setTextColor(150, 150, 150);
      doc.text("Subido al sistema y expedido por Valhalla Gym. Skål!", 105, 260, { align: "center" });
      
      const date = new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
      doc.text(`Fecha de Iniciación: ${date}`, 105, 270, { align: "center" });

      // Opcional: auto-descarga local para ellos:
      doc.save(`Valhalla_Gym_Plan_${plan.name}_${formData.nombre.replace(/\s+/g, '_')}.pdf`);

      // 2. Convertir el PDF a Blob para Firebase Storage
      const pdfBlob = doc.output('blob');
      const filename = `inscriptions/Pase_${formData.nombre.replace(/\s+/g, '_')}_${Date.now()}.pdf`;
      const storageRef = ref(storage, filename);
      
      await uploadBytes(storageRef, pdfBlob);
      const publicPdfUrl = await getDownloadURL(storageRef);

      // 3. Generar mensaje de WhatsApp
      const message = 
        `⚔️ ¡Skål Valhalla! Soy *${formData.nombre}* (DNI: ${formData.dni}).\n` +
        `Me he registrado desde la web para el plan *${plan.name}*.\n\n` +
        `Mi correo de guerrero es: ${formData.email}\n` +
        `Teléfono: ${formData.telefono}\n` +
        `Dirección: ${formData.direccion}\n` +
        `Género: ${formData.genero}\n\n` +
        `🪓 *AQUÍ ESTÁ MI PASE OFICIAL DE INSCRIPCIÓN (PDF)*: ${publicPdfUrl}`;

      // 4. Redirigir a WhatsApp
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      
      window.open(whatsappUrl, '_blank');
      onClose(); // Cerrar el modal

    } catch (error) {
      console.error("Error al subir el PDF o generar el enlace:", error);
      alert("Hubo un error forjando el PDF en nuestro servidor. Intenta de nuevo.");
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
            <span>Al forjar inscripción, el documento PDF oficial se subirá a nuestro sistema en la nube y se anexará su código de enlace seguro a tu envío de WhatsApp.</span>
          </div>

          <button type="submit" className="btn-primary w-100 mt-4 d-flex-center" disabled={isUploading}>
            {isUploading ? 'FORJANDO PASE EN LA NUBE...' : 'FORJAR INSCRIPCIÓN'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PlanRegistrationModal;
