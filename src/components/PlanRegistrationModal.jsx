import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { X, FileText, Dumbbell, Landmark, Banknote, Copy, Check, ChevronDown, Smartphone, ArrowRight, ArrowLeft, Droplet, Moon, CalendarDays, Target, Activity } from 'lucide-react';
import { db } from '../firebase';
import { collection, doc, setDoc, serverTimestamp } from 'firebase/firestore';
import './PlanRegistrationModal.css';

const WHATSAPP_NUMBER = '542317533963';
const GOOGLE_SHEET_WEBHOOK = 'https://script.google.com/macros/s/AKfycbxs3pJ6TT6Zeh1pm9efghfdMLLlr5GOQt0Q9VtMNa4vzamVq3Lk7wAab5mUOeBst_ey/exec'; // PEGAR AQUÍ LA URL DEL WEBHOOK DE GOOGLE APPS SCRIPT

const PlanRegistrationModal = ({ plan, isOpen, onClose }) => {
  const { currentUser } = useAuth();
  
  const [currentStep, setCurrentStep] = useState(1);
  const [isUploading, setIsUploading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [addEscaldo, setAddEscaldo] = useState(false);

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    dni: '',
    telefono: '',
    direccion: '',
    genero: '',
    pago: 'transferencia',
    duration: 1,
    // Nuevos campos Escaldo
    fechaNacimiento: '',
    fechaInicio: '',
    peso: '',
    cintura: '',
    piernas: '',
    brazos: '',
    altura: '',
    tipoPlanificacion: '',
    intolerancias: '',
    hidratacion: '',
    horasSueno: '',
    trabajo: '',
    diasEntrenamiento: '',
    objetivo: '',
    lesiones: ''
  });

  const isEscaldoActive = plan?.id === 'escaldo' || addEscaldo;
  const totalSteps = isEscaldoActive ? 4 : 2;

  useEffect(() => {
    if (isOpen) {
      setAddEscaldo(false);
      setCurrentStep(1);
    }
  }, [isOpen, plan]);

  const handleCopyAlias = () => {
    navigator.clipboard.writeText('robersonda.mp');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    if (currentUser && isOpen) {
      setFormData(prev => ({
        ...prev,
        nombre: currentUser.displayName || prev.nombre,
        email: currentUser.email || prev.email
      }));
    }
  }, [currentUser, isOpen]);

  if (!isOpen || !plan) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    const form = document.getElementById('registration-form');
    if (form.reportValidity()) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
  };

  const getDurationLabel = (months) => {
    if (months === 1) return 'Mensual';
    if (months === 3) return 'Trimestral';
    if (months === 6) return 'Semestral';
    if (months === 12) return 'Anual';
    return `${months} Meses`;
  };

  const getBasePriceForDuration = (months) => {
    if (!plan) return 0;
    const customPrices = {
      'escaldo': { 3: 100000, 6: 210000, 12: 430000 },
      'vikingo': { 3: 100000, 6: 210000, 12: 430000 },
      'guerrero': { 3: 100000, 6: 215000, 12: 400000 },
      'berserker': { 3: 120000, 6: 230000, 12: 484000 }
    };
    let baseTotal = 0;
    if (months > 1 && customPrices[plan.id]?.[months]) {
      baseTotal = customPrices[plan.id][months];
    } else {
      const numericPrice = Number(plan.price.replace(/\./g, ''));
      baseTotal = numericPrice * months;
    }
    if (addEscaldo && plan?.id !== 'escaldo') {
      if (months > 1 && customPrices['escaldo']?.[months]) {
        baseTotal += customPrices['escaldo'][months];
      } else {
        baseTotal += (39000 * months);
      }
    }
    return baseTotal;
  };

  const calculateTotal = () => {
    let baseTotal = getBasePriceForDuration(formData.duration);
    const isEfectivo = formData.pago === 'efectivo' && plan?.id !== 'escaldo';
    if (isEfectivo) {
      baseTotal = baseTotal * 0.90;
    }
    return baseTotal;
  };

  const generatePDFAndSend = async (e) => {
    e.preventDefault();
    
    // Evitar que el form se envíe antes de tiempo si el usuario aprieta 'Enter' en un input
    if (currentStep < totalSteps) {
      handleNext();
      return;
    }
    
    setIsUploading(true);

    try {
      const newDocRef = doc(collection(db, "inscriptions"));
      const docId = newDocRef.id;
      
      const totalAmount = calculateTotal();
      const isEfectivo = formData.pago === 'efectivo' && plan?.id !== 'escaldo';

      const finalPriceFormatted = new Intl.NumberFormat('es-AR').format(totalAmount);
      const basePlanName = addEscaldo ? `${plan.name} + ESCALDO` : plan.name;
      const finalPlanName = `${basePlanName} (${getDurationLabel(formData.duration)})`;

      const startDate = new Date();
      const expiresAt = new Date();
      expiresAt.setMonth(expiresAt.getMonth() + formData.duration);

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
          period: plan.period || '',
          id: plan.id
        },
        startDate: startDate.toISOString(),
        expiresAt: expiresAt.toISOString(),
        durationMonths: formData.duration,
        status: 'active',
        createdAt: serverTimestamp()
      };

      const savePromise = setDoc(newDocRef, inscriptionData);
      const fallbackTimer = new Promise((resolve) => setTimeout(resolve, 2000));
      
      try {
        await Promise.race([savePromise, fallbackTimer]);
      } catch(err) {
        console.warn("Ignorando error o timeout de DB:", err);
      }

      // Si es Escaldo, mandamos a Google Sheets
      if (isEscaldoActive && GOOGLE_SHEET_WEBHOOK) {
        const sheetData = {
          plan: basePlanName,
          duracion: getDurationLabel(formData.duration),
          nombre: formData.nombre,
          dni: formData.dni,
          celular: formData.telefono,
          email: formData.email,
          direccion: formData.direccion,
          genero: formData.genero,
          fechaNacimiento: formData.fechaNacimiento,
          fechaInicio: formData.fechaInicio,
          peso: formData.peso,
          cintura: formData.cintura,
          piernas: formData.piernas,
          brazos: formData.brazos,
          altura: formData.altura,
          tipoPlanificacion: formData.tipoPlanificacion,
          intolerancias: formData.intolerancias,
          hidratacion: formData.hidratacion,
          horasSueno: formData.horasSueno,
          trabajo: formData.trabajo,
          diasEntrenamiento: formData.diasEntrenamiento,
          objetivo: formData.objetivo,
          lesiones: formData.lesiones
        };
        
        try {
          await fetch(GOOGLE_SHEET_WEBHOOK, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'text/plain' }, // text/plain evita preflight CORS
            body: JSON.stringify(sheetData)
          });
        } catch(err) {
          console.error("Error al enviar a Google Sheets:", err);
        }
      }

      const inscriptionUrl = `${window.location.origin}/inscripcion/${docId}`;
      const message = 
        `⚔️ ¡Skål Valhalla! Soy *${formData.nombre}* (DNI: ${formData.dni}).\n` +
        `Me he registrado desde la web para el plan *${basePlanName}*.\n\n` +
        `⏳ *Duración*: ${getDurationLabel(formData.duration)}\n` +
        `💰 *Método de Pago*: ${isEfectivo ? (addEscaldo ? 'Efectivo (-10% extra)' : 'Efectivo (10% OFF)') : 'Transferencia'}\n` +
        `💳 *Total a coordinar*: $${finalPriceFormatted}\n\n` +
        `🪓 *MI PASE OFICIAL*: ${inscriptionUrl}`;

      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      
      if (formData.pago === 'mercadopago') {
        try {
          const apiUrl = "https://us-central1-valhalla-box-gym-app.cloudfunctions.net/api";
            
          const res = await fetch(`${apiUrl}/checkout/preference`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              items: [{ title: finalPlanName, quantity: 1, unit_price: totalAmount }],
              payer: { name: formData.nombre, email: formData.email },
              redirectUrl: window.location.origin
            })
          });
          
          if (!res.ok) throw new Error("Error generating preference");
          
          const data = await res.json();
          localStorage.setItem('pendingWhatsApp', whatsappUrl);
          
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
          
          {totalSteps > 1 && (
            <div className="wizard-progress mt-3">
              <span style={{color: 'var(--accent-gold)', fontSize: '0.9rem', fontWeight: 'bold'}}>
                Paso {currentStep} de {totalSteps}
              </span>
              <div className="progress-bar-bg mt-1" style={{width: '100%', height: '4px', backgroundColor: 'var(--border-color)', borderRadius: '2px'}}>
                <div className="progress-bar-fill" style={{width: `${(currentStep / totalSteps) * 100}%`, height: '100%', backgroundColor: 'var(--accent-gold)', borderRadius: '2px', transition: 'width 0.3s ease'}}></div>
              </div>
            </div>
          )}
        </div>

        <form id="registration-form" onSubmit={generatePDFAndSend} className="auth-form plan-form">
          
          {/* PASO 1: DATOS PERSONALES */}
          {currentStep === 1 && (
            <div className="wizard-step">
              <div className="form-group mb-3">
                <label style={{ display: 'block', marginBottom: '8px', textAlign: 'center', color: 'var(--text-light)' }}>Duración del Plan</label>
                <div className="duration-pills-container">
                  <div className={`duration-pill ${formData.duration === 1 ? 'active' : ''}`} onClick={() => setFormData({...formData, duration: 1})}>
                    Batalla <br/><span style={{fontSize: '0.85rem', fontWeight: 'normal'}}>1 Mes</span><br/><strong style={{display: 'block', marginTop: '4px'}}>${new Intl.NumberFormat('es-AR').format(getBasePriceForDuration(1))}</strong>
                  </div>
                  <div className={`duration-pill ${formData.duration === 3 ? 'active' : ''}`} onClick={() => setFormData({...formData, duration: 3})}>
                    Incursión <br/><span style={{fontSize: '0.85rem', fontWeight: 'normal'}}>3 Meses</span><br/><strong style={{display: 'block', marginTop: '4px'}}>${new Intl.NumberFormat('es-AR').format(getBasePriceForDuration(3))}</strong>
                  </div>
                  <div className={`duration-pill ${formData.duration === 6 ? 'active' : ''}`} onClick={() => setFormData({...formData, duration: 6})}>
                    Campaña <br/><span style={{fontSize: '0.85rem', fontWeight: 'normal'}}>6 Meses</span><br/><strong style={{display: 'block', marginTop: '4px'}}>${new Intl.NumberFormat('es-AR').format(getBasePriceForDuration(6))}</strong>
                  </div>
                  <div className={`duration-pill ${formData.duration === 12 ? 'active' : ''}`} onClick={() => setFormData({...formData, duration: 12})}>
                    Saga <br/><span style={{fontSize: '0.85rem', fontWeight: 'normal'}}>1 Año</span><br/><strong style={{display: 'block', marginTop: '4px'}}>${new Intl.NumberFormat('es-AR').format(getBasePriceForDuration(12))}</strong>
                  </div>
                </div>
              </div>
              
              <div className="form-group-row">
                <div className="form-group flex-fill">
                  <label>Nombre Completo</label>
                  <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Ragnar Lothbrok" required />
                </div>
                <div className="form-group flex-fill">
                  <label>DNI</label>
                  <input type="text" name="dni" value={formData.dni} onChange={handleChange} placeholder="00.000.000" required />
                </div>
              </div>

              <div className="form-group-row">
                <div className="form-group flex-fill">
                  <label>Celular</label>
                  <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} placeholder="+54 9 00 0000 0000" required />
                </div>
                <div className="form-group flex-fill">
                  <label>Dirección</label>
                  <input type="text" name="direccion" value={formData.direccion} onChange={handleChange} placeholder="Tu dirección" required />
                </div>
              </div>

              <div className="form-group-row">
                <div className="form-group flex-fill">
                  <label>Correo Electrónico</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="tu@correo.com" required />
                </div>
                <div className="form-group flex-fill">
                  <label>Género</label>
                  <div style={{ position: 'relative' }}>
                    <select name="genero" value={formData.genero} onChange={handleChange} required>
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
            </div>
          )}

          {/* PASO 2: METRICAS ESCALDO */}
          {currentStep === 2 && isEscaldoActive && (
            <div className="wizard-step">
              <h4 className="text-center mb-3 text-gold">Métricas Actuales</h4>
              <p className="text-muted text-center mb-4" style={{fontSize:'0.9rem'}}>Estos datos son esenciales para armar tu plan nutricional y rutina 100% personalizados.</p>
              
              <div className="form-group-row">
                <div className="form-group flex-fill">
                  <label>Fecha de Nacimiento</label>
                  <input type="date" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleChange} required />
                </div>
                <div className="form-group flex-fill">
                  <label>Fecha de Inicio (Estimada)</label>
                  <input type="date" name="fechaInicio" value={formData.fechaInicio} onChange={handleChange} required />
                </div>
              </div>

              <div className="form-group-row">
                <div className="form-group flex-fill">
                  <label>Peso Actual (kg)</label>
                  <input type="number" step="0.1" name="peso" value={formData.peso} onChange={handleChange} placeholder="Ej: 75.5" required />
                </div>
                <div className="form-group flex-fill">
                  <label>Altura (cm)</label>
                  <input type="number" name="altura" value={formData.altura} onChange={handleChange} placeholder="Ej: 178" required />
                </div>
              </div>

              <h5 className="mt-3 mb-2" style={{color: 'var(--text-light)'}}>Medidas Corporales (cm)</h5>
              <div className="form-group-row">
                <div className="form-group flex-fill">
                  <label>Cintura</label>
                  <input type="text" name="cintura" value={formData.cintura} onChange={handleChange} placeholder="Ej: 80" required />
                </div>
                <div className="form-group flex-fill">
                  <label>Piernas</label>
                  <input type="text" name="piernas" value={formData.piernas} onChange={handleChange} placeholder="Ej: 55" required />
                </div>
                <div className="form-group flex-fill">
                  <label>Brazos</label>
                  <input type="text" name="brazos" value={formData.brazos} onChange={handleChange} placeholder="Ej: 35" required />
                </div>
              </div>
            </div>
          )}

          {/* PASO 3: HÁBITOS ESCALDO */}
          {currentStep === 3 && isEscaldoActive && (
            <div className="wizard-step">
              <h4 className="text-center mb-3 text-gold">Hábitos y Objetivos</h4>
              
              <div className="form-group-row">
                <div className="form-group flex-fill">
                  <label>Tipo de Planificación Nutricional</label>
                  <div style={{ position: 'relative' }}>
                    <select name="tipoPlanificacion" value={formData.tipoPlanificacion} onChange={handleChange} required>
                      <option value="" disabled>Seleccionar tipo</option>
                      <option value="Descenso de grasa">Descenso de grasa</option>
                      <option value="Aumento de masa muscular">Aumento de masa muscular</option>
                      <option value="Mantenimiento / Recomposición">Mantenimiento / Recomposición</option>
                      <option value="Rendimiento deportivo">Rendimiento deportivo</option>
                    </select>
                    <ChevronDown size={20} style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--text-muted)' }} />
                  </div>
                </div>
                <div className="form-group flex-fill">
                  <label>Trabajo Habitual</label>
                  <div style={{ position: 'relative' }}>
                    <select name="trabajo" value={formData.trabajo} onChange={handleChange} required>
                      <option value="" disabled>Seleccionar tipo</option>
                      <option value="Muy Activo (ej: Albañil)">Muy Activo (movimiento constante)</option>
                      <option value="Activo (ej: Vendedor local)">Activo (de pie varias horas)</option>
                      <option value="Pasivo (ej: Oficina)">Pasivo / Sedentario (oficina)</option>
                    </select>
                    <ChevronDown size={20} style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--text-muted)' }} />
                  </div>
                </div>
              </div>

              <div className="form-group-row">
                <div className="form-group flex-fill">
                  <label>Intolerancias/Alergias alimentarias</label>
                  <input type="text" name="intolerancias" value={formData.intolerancias} onChange={handleChange} placeholder="Ej: Lactosa, Gluten, Ninguna" required />
                </div>
              </div>

              <h5 className="mt-4 mb-3 text-gold text-center">Hábitos Diarios</h5>
              
              <div className="form-group mb-3">
                <label style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px', color: 'var(--text-light)' }}><Droplet size={18} className="text-gold"/> Hidratación</label>
                <div className="duration-pills-container">
                  {['< 1 Litro', '1 a 2 Litros', '2 a 3 Litros', 'Más de 3L'].map(val => (
                    <label key={val} className={`duration-pill ${formData.hidratacion === val ? 'active' : ''}`} style={{ margin: 0, position: 'relative' }}>
                      <input type="radio" name="hidratacion" value={val} checked={formData.hidratacion === val} onChange={handleChange} required style={{ position: 'absolute', opacity: 0, width: '100%', height: '100%', cursor: 'pointer', margin: 0, left: 0, top: 0 }} />
                      {val}
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-group mb-3">
                <label style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px', color: 'var(--text-light)' }}><Moon size={18} className="text-gold"/> Horas de Sueño</label>
                <div className="duration-pills-container">
                  {['< 5 horas', '5 a 6 horas', '7 a 8 horas', '+ 8 horas'].map(val => (
                    <label key={val} className={`duration-pill ${formData.horasSueno === val ? 'active' : ''}`} style={{ margin: 0, position: 'relative' }}>
                      <input type="radio" name="horasSueno" value={val} checked={formData.horasSueno === val} onChange={handleChange} required style={{ position: 'absolute', opacity: 0, width: '100%', height: '100%', cursor: 'pointer', margin: 0, left: 0, top: 0 }} />
                      {val}
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-group mb-4">
                <label style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px', color: 'var(--text-light)' }}><CalendarDays size={18} className="text-gold"/> Días de Entrenamiento a la semana</label>
                <div className="duration-pills-container">
                  {['2 Días', '3 Días', '4 Días', '5 o más'].map(val => (
                    <label key={val} className={`duration-pill ${formData.diasEntrenamiento === val ? 'active' : ''}`} style={{ margin: 0, position: 'relative' }}>
                      <input type="radio" name="diasEntrenamiento" value={val} checked={formData.diasEntrenamiento === val} onChange={handleChange} required style={{ position: 'absolute', opacity: 0, width: '100%', height: '100%', cursor: 'pointer', margin: 0, left: 0, top: 0 }} />
                      {val}
                    </label>
                  ))}
                </div>
              </div>

              <h5 className="mt-4 mb-3 text-gold text-center">Físico y Metas</h5>

              <div className="form-group-row">
                <div className="form-group flex-fill">
                  <label style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}><Target size={18} className="text-gold"/> Objetivo Principal</label>
                  <textarea name="objetivo" value={formData.objetivo} onChange={handleChange} placeholder="Ej: Mejorar fuerza, llegar a 80kg, marcar abdominales..." rows="2" required style={{resize: 'vertical', backgroundColor: 'rgba(0,0,0,0.2)', border: '1px solid rgba(197, 160, 89, 0.3)'}}></textarea>
                </div>
              </div>

              <div className="form-group-row">
                <div className="form-group flex-fill">
                  <label style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}><Activity size={18} className="text-gold"/> Lesiones o Dificultades Físicas</label>
                  <textarea name="lesiones" value={formData.lesiones} onChange={handleChange} placeholder="Ej: Dolor en rodilla derecha al correr, Ninguna..." rows="2" required style={{resize: 'vertical', backgroundColor: 'rgba(0,0,0,0.2)', border: '1px solid rgba(197, 160, 89, 0.3)'}}></textarea>
                </div>
              </div>
            </div>
          )}

          {/* PASO FINAL: PAGO */}
          {currentStep === totalSteps && (
            <div className="wizard-step">
              <h4 className="text-center mb-3 text-gold">Método de Pago</h4>
              <div className="form-group-row mt-2 d-block">
                <div className="form-group w-100">
                  <div className="payment-toggle mt-2">
                    <div className={`toggle-option ${formData.pago === 'transferencia' ? 'active' : ''}`} onClick={() => setFormData({...formData, pago: 'transferencia'})}>
                      <div className="toggle-watermark"><Landmark size={36} /></div>
                      <span className="toggle-content">Banco/Alias</span>
                    </div>
                    <div className={`toggle-option ${formData.pago === 'mercadopago' ? 'active' : ''}`} onClick={() => setFormData({...formData, pago: 'mercadopago'})}>
                      <div className="toggle-watermark"><Smartphone size={36} /></div>
                      <span className="toggle-content">App MercadoPago</span>
                    </div>
                    <div 
                      className={`toggle-option ${(formData.pago === 'efectivo' && plan?.id !== 'escaldo') ? 'active' : ''} ${plan?.id === 'escaldo' ? 'disabled' : ''}`}
                      onClick={() => { if (plan?.id !== 'escaldo') setFormData({...formData, pago: 'efectivo'}) }}
                      style={plan?.id === 'escaldo' ? { opacity: 0.4, cursor: 'not-allowed', filter: 'grayscale(1)' } : {}}
                      title={plan?.id === 'escaldo' ? 'No disponible en planes a distancia' : ''}
                    >
                      <div className="toggle-watermark"><Banknote size={36} /></div>
                      <span className="toggle-content">Efectivo (-10%)</span>
                    </div>
                  </div>
                </div>
              </div>

              {(formData.pago === 'efectivo' && plan?.id !== 'escaldo') && (
                <div className="p-3 mb-3 text-center mt-2" style={{ backgroundColor: 'rgba(197, 160, 89, 0.1)', border: '1px solid rgba(197, 160, 89, 0.3)', borderRadius: '8px' }}>
                  <strong className="text-gold" style={{ fontSize: '1.1rem' }}>
                    ¡{formData.duration > 1 ? 'Precio Promocional + ' : ''}10% de Descuento Extra!
                  </strong><br />
                  <span style={{ display: 'block', marginTop: '10px', color: 'var(--text-light)' }}>El precio final a abonar en el establecimiento será de:</span>
                  <div style={{ fontSize: '1.6rem', fontWeight: 'bold', color: 'var(--accent-gold)', margin: '15px auto', padding: '12px', backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: '8px', maxWidth: '300px', border: '1px solid rgba(197, 160, 89, 0.2)' }}>
                    ${new Intl.NumberFormat('es-AR').format(calculateTotal())}
                    <div style={{fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 'normal', marginTop: '4px'}}>
                      por su plan {getDurationLabel(formData.duration)} {addEscaldo && <span style={{fontSize: '0.8rem', color: 'var(--text-muted)'}}> (Plan + Nutrición)</span>}
                    </div>
                  </div>
                </div>
              )}

              {(formData.pago === 'transferencia' || plan?.id === 'escaldo') && (
                <div className="p-3 mb-3 text-center mt-2" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
                  <strong style={{ fontSize: '1.1rem' }}>Alias para transferencia (Banco):</strong> <br />
                  <div className="d-flex-center mt-2 mb-2">
                    <code style={{ fontSize: '1.3em', color: 'var(--accent-gold)' }}>robersonda.mp</code>
                    <button type="button" onClick={handleCopyAlias} style={{ background: 'var(--bg-dark)', border: '1px solid var(--border-color)', borderRadius: '4px', cursor: 'pointer', padding: '6px', display: 'flex', marginLeft: '10px' }} title="Copiar Alias">
                      {copied ? <Check size={18} color="var(--accent-gold)" /> : <Copy size={18} color="var(--text-muted)" />}
                    </button>
                  </div>
                  <span style={{ display: 'block', marginTop: '10px', color: 'var(--text-light)' }}>Monto exacto a transferir:</span>
                  <div style={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#fff', margin: '15px auto', padding: '12px', backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: '8px', maxWidth: '300px', border: '1px solid rgba(255,255,255,0.1)' }}>
                    ${new Intl.NumberFormat('es-AR').format(calculateTotal())}
                    <div style={{fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 'normal', marginTop: '4px'}}>
                      por su plan {getDurationLabel(formData.duration)}
                    </div>
                  </div>
                  <small className="text-muted" style={{display: 'block', marginTop: '10px'}}>Se coordinará enviando el comprobante por WhatsApp.</small>
                </div>
              )}

              {formData.pago === 'mercadopago' && (
                <div className="p-3 mb-3 text-center mt-2" style={{ backgroundColor: 'rgba(0, 158, 227, 0.1)', border: '1px solid rgba(0, 158, 227, 0.3)', borderRadius: '8px' }}>
                  <strong style={{ color: '#009EE3', fontSize: '1.1rem' }}>Abonar con Mercado Pago</strong><br />
                  <span style={{ display: 'block', marginTop: '10px', color: 'var(--text-light)' }}>Al presionar "FORJAR ALIANZA", serás redirigido de forma segura a <strong>Mercado Pago</strong> para abonar el monto exacto:</span>
                  <div style={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#fff', margin: '15px auto', padding: '12px', backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: '8px', maxWidth: '300px', border: '1px solid rgba(255,255,255,0.1)' }}>
                    ${new Intl.NumberFormat('es-AR').format(calculateTotal())}
                    <div style={{fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 'normal', marginTop: '4px'}}>
                      por su plan {getDurationLabel(formData.duration)}
                    </div>
                  </div>
                </div>
              )}

              <div className="disclaimer-info mt-3">
                <FileText size={18} className="text-gold" />
                <span>Al forjar tu alianza, tu información se subirá a nuestro sistema y se generará un enlace oficial que enviaremos a nuestro WhatsApp para asentar tu base en el Bastión. {isEscaldoActive && "Tus datos nutricionales se enviarán a tu coach automáticamente."}</span>
              </div>
            </div>
          )}

          <div className="form-actions mt-4" style={{display: 'flex', gap: '1rem', justifyContent: 'space-between'}}>
            {currentStep > 1 && (
              <button type="button" className="btn-outline d-flex-center" onClick={handleBack} disabled={isUploading} style={{flex: 1}}>
                <ArrowLeft size={20} /> ANTERIOR
              </button>
            )}
            {currentStep === 1 && (
              <button type="button" className="btn-outline d-flex-center" onClick={onClose} disabled={isUploading} style={{flex: 1}}>
                CANCELAR
              </button>
            )}
            
            {currentStep < totalSteps ? (
              <button type="button" className="btn-primary d-flex-center" onClick={handleNext} style={{flex: 2}}>
                SIGUIENTE <ArrowRight size={20} />
              </button>
            ) : (
              <button type="submit" className="btn-primary d-flex-center" disabled={isUploading} style={{flex: 2}}>
                {isUploading ? 'FORJANDO...' : 'FORJAR ALIANZA'}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlanRegistrationModal;
