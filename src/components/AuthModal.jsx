import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { X, Dumbbell } from 'lucide-react';
import './AuthModal.css';

const AuthModal = ({ isOpen, onClose }) => {
  const { login, signup } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isLogin) {
        await login(email, password);
      } else {
        await signup(email, password, name || 'Guerrero');
      }
      onClose(); // Close modal on success
    } catch (err) {
      setError(
        err.code === 'auth/email-already-in-use' 
          ? 'El guerrero ya está registrado en nuestros salones.' 
          : err.code === 'auth/wrong-password' || err.code === 'auth/user-not-found' || err.code === 'auth/invalid-credential'
          ? 'Credenciales incorrectas. ¿Olvidaste tu juramento?'
          : 'Error al conectar con los dioses. Intenta de nuevo.'
      );
    }
    setLoading(false);
  };

  return (
    <div className="auth-modal-overlay" onClick={onClose}>
      <div className="auth-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="auth-close-btn" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="auth-header">
          <Dumbbell className="text-gold mb-2 mx-auto" size={32} />
          <h2>{isLogin ? 'ENTRA AL VALHALLA' : 'ÚNETE A LA TRIBU'}</h2>
          <p className="text-muted">
            {isLogin 
              ? 'Regresa a tu lugar de entrenamiento' 
              : 'Forja tu legado con nosotros'}
          </p>
        </div>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && (
            <div className="form-group">
              <label>Nombre de Guerrero</label>
              <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Ej. Ragnar" 
                required={!isLogin}
              />
            </div>
          )}
          
          <div className="form-group">
            <label>Correo Electrónico</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="tu@correo.com" 
              required 
            />
          </div>
          
          <div className="form-group">
            <label>Contraseña secreta</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="••••••••" 
              required 
              minLength="6"
            />
          </div>

          <button type="submit" className="btn-primary w-100 mt-2" disabled={loading}>
            {loading ? 'CARGANDO...' : (isLogin ? 'INICIAR SESIÓN' : 'FORJAR ALIANZA')}
          </button>
        </form>

        <div className="auth-toggle">
          <p>
            {isLogin ? '¿Aún no eres miembro? ' : '¿Ya tienes un lugar en la mesa? '}
            <button 
              type="button" 
              className="toggle-mode-btn" 
              onClick={() => {
                setIsLogin(!isLogin);
                setError('');
              }}
            >
              {isLogin ? 'Regístrate aquí' : 'Inicia Sesión'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
