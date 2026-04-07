import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Dumbbell } from 'lucide-react';
import './AuthHandler.css'; // Opcional, podemos usar estilos en línea o crear el archivo luego

const AuthHandler = () => {
  const [searchParams] = useSearchParams();
  const { loginWithCustomToken } = useAuth();
  const navigate = useNavigate();
  const [status, setStatus] = useState("Procesando entrada al Valhalla...");

  useEffect(() => {
    const handleAuth = async () => {
      const token = searchParams.get('token');
      const error = searchParams.get('error');

      if (error) {
        setStatus(`Error al forjar la alianza: ${error}`);
        setTimeout(() => navigate('/'), 3000);
        return;
      }

      if (token) {
        try {
          await loginWithCustomToken(token);
          setStatus("¡Bienvenido, guerrero!");
          setTimeout(() => navigate('/'), 1500);
        } catch (err) {
          console.error(err);
          setStatus("El token tribal es inválido o ha caducado.");
          setTimeout(() => navigate('/'), 3000);
        }
      } else {
        setStatus("No se enviaron las llaves necesarias.");
        setTimeout(() => navigate('/'), 2000);
      }
    };

    handleAuth();
  }, [searchParams, loginWithCustomToken, navigate]);

  return (
    <div className="auth-handler-container d-flex-center flex-column min-vh-100" style={{ backgroundColor: 'var(--bg-dark)' }}>
      <Dumbbell className="text-gold mb-3" size={48} />
      <h2 className="text-light">{status}</h2>
      <p className="text-muted mt-2">Por favor aguarda un instante...</p>
    </div>
  );
};

export default AuthHandler;
