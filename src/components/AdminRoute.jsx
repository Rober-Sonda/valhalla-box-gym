import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ADMIN_EMAILS = ['valhalla.escaldo@gmail.com', 'rober.junin@gmail.com'];

const AdminRoute = ({ children }) => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // If there is no user or the user is not an admin, redirect
    if (!currentUser || !ADMIN_EMAILS.includes(currentUser.email)) {
      navigate('/', { replace: true });
    }
  }, [currentUser, navigate]);

  if (!currentUser || !ADMIN_EMAILS.includes(currentUser.email)) {
    return null; // Don't render anything while redirecting
  }

  return children;
};

export default AdminRoute;
