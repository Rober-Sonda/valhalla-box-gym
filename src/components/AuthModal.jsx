import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { X, Dumbbell } from 'lucide-react';
import './AuthModal.css';

const AuthModal = ({ isOpen, onClose }) => {
  const { login, signup, loginWithGoogle, loginWithFacebook, loginWithTwitter, loginWithTiktok } = useAuth();
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
      onClose();
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

  const handleSocialLogin = async (loginFn, providerName) => {
    setError('');
    setLoading(true);
    try {
      await loginFn();
      onClose();
    } catch (err) {
      setError(`Error al conectar con ${providerName}. Intenta nuevamente.`);
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

        <div className="divider-container">
          <div className="divider-line"></div>
          <span className="divider-text">O ENTRA CON</span>
          <div className="divider-line"></div>
        </div>

        {/* Social Login Buttons */}
        <div className="social-btn-group">
          {/* Google */}
          <button
            type="button"
            className="google-btn w-100"
            onClick={() => handleSocialLogin(loginWithGoogle, 'Google')}
            disabled={loading}
          >
            <svg className="google-icon" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Continuar con Google
          </button>

          {/* Facebook */}
          <button
            type="button"
            className="google-btn facebook-btn w-100"
            onClick={() => handleSocialLogin(loginWithFacebook, 'Facebook')}
            disabled={loading}
          >
            <svg className="google-icon" viewBox="0 0 24 24">
              <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Continuar con Facebook
          </button>

          {/* Twitter / X */}
          <button
            type="button"
            className="google-btn twitter-btn w-100"
            onClick={() => handleSocialLogin(loginWithTwitter, 'Twitter/X')}
            disabled={loading}
          >
            <svg className="google-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            Continuar con Twitter / X
          </button>

          {/* TikTok */}
          <button
            type="button"
            className="google-btn tiktok-btn w-100"
            onClick={() => handleSocialLogin(loginWithTiktok, 'TikTok')}
            disabled={loading}
          >
            <svg className="google-icon" viewBox="0 0 448 512" fill="currentColor">
              <path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.18 121.18 0 0 0 1.86 22.17h0A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z"/>
            </svg>
            Continuar con TikTok
          </button>
        </div>

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
