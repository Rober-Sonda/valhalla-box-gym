import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { Save } from 'lucide-react';

const AdminFooterSettings = () => {
  const [settings, setSettings] = useState({
    whatsapp: '542317533963',
    address: 'Urquiza 671, 9 de Julio (6500)',
    mapsUrl: 'https://www.google.com/maps/search/Urquiza+671,+9+de+Julio,+Buenos+Aires,+Argentina',
    instagramUrl: 'https://www.instagram.com/valhallaboxgym',
    slogan: 'Forjando guerreros a través de disciplina, fuerza y comunidad.',
    copyright: 'Valhalla Box Gym. Todos los derechos reservados.'
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const docSnap = await getDoc(doc(db, 'settings', 'footer'));
        if (docSnap.exists()) {
          setSettings(docSnap.data());
        }
      } catch (error) {
        console.error("Error fetching footer settings:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSettings();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await setDoc(doc(db, 'settings', 'footer'), settings, { merge: true });
      alert("Configuración del pie de página guardada con éxito.");
    } catch (error) {
      console.error("Error saving footer settings:", error);
      alert("Error al guardar la configuración.");
    }
  };

  if (loading) return <p>Cargando configuración...</p>;

  return (
    <div style={{ marginTop: '2rem', backgroundColor: 'rgba(0,0,0,0.3)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}>
      <h3 style={{ marginTop: 0, borderBottom: '1px solid rgba(212, 175, 55, 0.2)', paddingBottom: '1rem', marginBottom: '1.5rem', color: 'var(--accent-gold)', display: 'flex', alignItems: 'center', gap: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
        Configuración del Pie de Página (Footer)
      </h3>
      
      <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        
        {/* Identidad de Marca */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', backgroundColor: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.02)' }}>
          <h4 style={{ margin: 0, color: 'var(--text-light)', fontSize: '1rem' }}>Identidad de Marca</h4>
          <div>
            <label className="form-label">Slogan / Frase debajo del Logo</label>
            <input type="text" className="admin-input" name="slogan" value={settings.slogan} onChange={handleChange} required />
          </div>
          <div>
            <label className="form-label">Texto de Copyright (Pie final)</label>
            <input type="text" className="admin-input" name="copyright" value={settings.copyright} onChange={handleChange} required />
          </div>
        </div>

        {/* Contacto y Redes */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', backgroundColor: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.02)' }}>
          <h4 style={{ margin: 0, color: 'var(--text-light)', fontSize: '1rem', gridColumn: '1 / -1' }}>Contacto y Redes Sociales</h4>
          <div>
            <label className="form-label">WhatsApp <small>(con código de país, ej: 5491112345678)</small></label>
            <input type="text" className="admin-input" name="whatsapp" value={settings.whatsapp} onChange={handleChange} required />
          </div>
          <div>
            <label className="form-label">URL de Instagram</label>
            <input type="url" className="admin-input" name="instagramUrl" value={settings.instagramUrl} onChange={handleChange} required />
          </div>
        </div>

        {/* Ubicación */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', backgroundColor: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.02)' }}>
          <h4 style={{ margin: 0, color: 'var(--text-light)', fontSize: '1rem' }}>Ubicación del Salón</h4>
          <div>
            <label className="form-label">Dirección Física (Texto a mostrar)</label>
            <input type="text" className="admin-input" name="address" value={settings.address} onChange={handleChange} required />
          </div>
          <div>
            <label className="form-label">Enlace de Google Maps (URL)</label>
            <input type="url" className="admin-input" name="mapsUrl" value={settings.mapsUrl} onChange={handleChange} required />
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
          <button type="submit" className="admin-btn-primary" style={{ padding: '0.8rem 2rem', fontSize: '1rem' }}>
            <Save size={18} /> Guardar Cambios
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminFooterSettings;
