import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  OAuthProvider,
  signInWithPopup,
  signInWithCustomToken
} from 'firebase/auth';
import { auth } from '../firebase';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const signup = async (email, password, displayName) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(userCredential.user, { displayName });
    return userCredential;
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const loginWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const loginWithTwitter = () => {
    const provider = new TwitterAuthProvider();
    return signInWithPopup(auth, provider);
  };

  // Redireccionar al Backend (ACTUALMENTE COMENTADO/DESACTIVADO A PEDIDO DEL USUARIO)
  const loginWithTiktok = () => {
    /*
    const apiUrl = "https://us-central1-valhalla-box-gym-app.cloudfunctions.net/api"; 
    window.location.href = `${apiUrl}/auth/tiktok?redirect_to=${encodeURIComponent(window.location.origin)}`;
    */
    alert("Inició el flujo de TikTok, actualmente desactivado.");
  };

  const loginWithInstagram = () => {
    /*
    const apiUrl = "https://us-central1-valhalla-box-gym-app.cloudfunctions.net/api"; 
    window.location.href = `${apiUrl}/auth/instagram?redirect_to=${encodeURIComponent(window.location.origin)}`;
    */
    console.log("Instagram OAuth redirigido a Facebook Login en la UI."); // Ahora se usa Facebook nativamente en el Modal
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    loginWithGoogle,
    loginWithFacebook,
    loginWithTwitter,
    loginWithTiktok,
    loginWithInstagram,
    signup,
    loginWithCustomToken: (token) => Object.keys(token).length ? signInWithCustomToken(auth, token) : null,
    logout,
    isAuthModalOpen,
    setIsAuthModalOpen
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
