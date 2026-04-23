import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { X, Trash2, ShieldCheck, Phone, Landmark, Smartphone } from 'lucide-react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import './CartDrawer.css';

const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart, isCartOpen, setIsCartOpen } = useCart();
  const { currentUser, setIsAuthModalOpen } = useAuth();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [pago, setPago] = useState('transferencia');
  const navigate = useNavigate();

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
        cart.map(item => `- ${item.quantity}x ${item.name} ${item.selectedSize ? `(Talle/Medida: ${item.selectedSize})` : ''} ($${item.price}) = $${item.quantity * item.price}`).join('\n') +
        `\n\nTotal del Botín: $${cartTotal}\n\n*Método de pago:* ${pago === 'mercadopago' ? 'Mercado Pago (App)' : 'Transferencia / Billetera Virtual'}\n*Alias/Destino:* robersonda.mp`;

      const whatsappUrl = `https://wa.me/542317533963?text=${encodeURIComponent(message)}`;
      
      if (pago === 'mercadopago') {
        try {
          const apiUrl = "https://us-central1-valhalla-box-gym-app.cloudfunctions.net/api";
            
          const res = await fetch(`${apiUrl}/checkout/preference`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              items: cart.map(item => ({
                title: item.name + (item.selectedSize ? ` (${item.selectedSize})` : ''),
                quantity: item.quantity,
                unit_price: item.price
              })),
              payer: {
                name: order.userName,
                email: order.userEmail
              },
              redirectUrl: window.location.origin
            })
          });
          
          if (!res.ok) throw new Error("Error generating preference");
          
          const data = await res.json();
          window.open(whatsappUrl, '_blank');
          
          clearCart();
          setIsCartOpen(false);
          setIsCheckingOut(false);
          
          window.location.href = data.init_point;
          return;
        } catch (err) {
          console.error(err);
          alert("Hubo un error al conectar con Mercado Pago. Intenta nuevamente.");
          setIsCheckingOut(false);
          return;
        }
      }
      
      clearCart();
      setIsCartOpen(false);
      setIsCheckingOut(false);
      
      // Abrir chat con admin
      window.location.href = whatsappUrl;

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
                onClick={() => {
                  setIsCartOpen(false);
                  navigate('/armeria');
                }}
              >
                IR A LA ARMERÍA
              </button>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.cartItemId} className="cart-item">
                <div 
                  className="cart-item-img" 
                  style={{ backgroundImage: `url(${item.images ? item.images[0] : item.image})` }}
                ></div>
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  {item.selectedSize && <p style={{ fontSize: '0.8rem', color: 'var(--accent-gold)' }}>Talle/Medida: {item.selectedSize}</p>}
                  <p className="cart-item-price">${item.price}</p>
                  <div className="cart-item-controls">
                    <div className="quantity-ctrl">
                      <button onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}>+</button>
                    </div>
                    <button 
                      className="remove-btn" 
                      onClick={() => removeFromCart(item.cartItemId)}
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
            <div className="payment-toggle mt-3 mb-3">
              <div 
                className={`toggle-option ${pago === 'transferencia' ? 'active' : ''}`}
                onClick={() => setPago('transferencia')}
                style={{ padding: '0.8rem' }}
              >
                <div className="toggle-watermark">
                  <Landmark size={24} />
                </div>
                <span className="toggle-content" style={{ fontSize: '0.9rem' }}>Banco/Alias</span>
              </div>
              <div 
                className={`toggle-option ${pago === 'mercadopago' ? 'active' : ''}`}
                onClick={() => setPago('mercadopago')}
                style={{ padding: '0.8rem' }}
              >
                <div className="toggle-watermark">
                  <Smartphone size={24} />
                </div>
                <span className="toggle-content" style={{ fontSize: '0.9rem' }}>App MercadoPago</span>
              </div>
            </div>

            <button 
              className="btn-primary w-100 mt-2 d-flex align-center justify-center gap-2" 
              onClick={handleCheckout}
              disabled={isCheckingOut}
            >
              {isCheckingOut ? 'PROCESANDO...' : (pago === 'mercadopago' ? 'PAGAR CON MERCADOPAGO Y AVISAR' : 'RECLAMAR BOTÍN VÍA WHATSAPP')}
            </button>
            
            {pago === 'transferencia' ? (
              <div className="mt-3 text-center" style={{ padding: '1rem', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', backgroundColor: 'rgba(0,0,0,0.2)' }}>
                <p className="text-muted mb-1" style={{ fontSize: '0.8rem' }}>Paga fácilmente transfiriendo al ALIAS (Banco):</p>
                <p className="text-gold font-bold" style={{ fontSize: '1rem', letterSpacing: '1px' }}>robersonda.mp</p>
              </div>
            ) : (
              <div className="mt-3 text-center" style={{ padding: '1rem', border: '1px solid rgba(0, 158, 227, 0.3)', borderRadius: '4px', backgroundColor: 'rgba(0, 158, 227, 0.1)' }}>
                <p className="text-muted mb-1" style={{ fontSize: '0.8rem' }}>Se abrirá <strong>Mercado Pago</strong> para transferir y <strong>WhatsApp</strong> para avisar. Total: <span className="text-gold font-bold">${cartTotal}</span></p>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
