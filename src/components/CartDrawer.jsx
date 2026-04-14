import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { X, Trash2, ShieldCheck, Phone } from 'lucide-react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import './CartDrawer.css';

const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart, isCartOpen, setIsCartOpen } = useCart();
  const { currentUser, setIsAuthModalOpen } = useAuth();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  if (!isCartOpen) return null;

  const handleCheckout = async () => {
    if (!currentUser) {
      setIsCartOpen(false);
      setIsAuthModalOpen(true);
      return;
    }

    if (cart.length === 0) return;

    setIsCheckingOut(true);

    try {
      // 1. Guardar orden en la Base de Datos (en segundo plano para evitar bloqueos)
      const order = {
        userId: currentUser.uid,
        userName: currentUser.displayName || 'Guerrero Valhalla',
        userEmail: currentUser.email,
        items: cart,
        total: cartTotal,
        date: new Date().toISOString(),
        status: 'pending'
      };

      addDoc(collection(db, 'orders'), order).catch(err => console.error("Error BD:", err));

      // 2. Formatear mensaje para WhatsApp al Administrador
      const message = `¡Skål! Soy ${order.userName}, y quiero forjar mi armadura con este pedido:\n\n` +
        cart.map(item => `- ${item.quantity}x ${item.name} ($${item.price}) = $${item.quantity * item.price}`).join('\n') +
        `\n\nTotal del Botín: $${cartTotal}`;

      const whatsappUrl = `https://wa.me/542317533963?text=${encodeURIComponent(message)}`;
      
      clearCart();
      setIsCartOpen(false);
      setIsCheckingOut(false);
      
      // Abrir chat con admin
      window.open(whatsappUrl, '_blank');

    } catch (error) {
      console.error('Error procesando el pedido:', error);
      alert('Hubo un error al forjar tu pedido. Intenta nuevamente.');
    }

    setIsCheckingOut(false);
  };

  return (
    <>
      <div className="cart-overlay" onClick={() => setIsCartOpen(false)}></div>
      <div className="cart-drawer">
        <div className="cart-header">
          <h2>TU BOTÍN</h2>
          <button className="cart-close" onClick={() => setIsCartOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <ShieldCheck size={48} className="text-muted mx-auto mb-3" />
              <p>Tu botín está vacío, guerrero.</p>
              <button 
                className="btn-outline w-100 mt-4" 
                onClick={() => setIsCartOpen(false)}
              >
                VOLVER A LA ARMERÍA
              </button>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="cart-item">
                <div 
                  className="cart-item-img" 
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p className="cart-item-price">${item.price}</p>
                  <div className="cart-item-controls">
                    <div className="quantity-ctrl">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                    <button 
                      className="remove-btn" 
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total del Botín:</span>
              <span className="text-gold font-bold">${cartTotal}</span>
            </div>
            <button 
              className="btn-primary w-100 mt-3 d-flex align-center justify-center gap-2" 
              onClick={handleCheckout}
              disabled={isCheckingOut}
            >
              {isCheckingOut ? 'PROCESANDO...' : 'RECLAMAR BOTÍN'}
            </button>
            <p className="text-muted text-center mt-2" style={{ fontSize: '0.8rem' }}>
              Finalizarás el pedido por WhatsApp directamente con La Tribu.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
