import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  // Load from locale storage initially
  const [cart, setCart] = useState(() => {
    const localData = localStorage.getItem('valhalla_cart');
    return localData ? JSON.parse(localData) : [];
  });
  
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('valhalla_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const cartItemId = `${product.id}-${product.selectedSize || 'none'}`;
      const existing = prevCart.find(item => item.cartItemId === cartItemId);
      if (existing) {
        return prevCart.map(item => 
          item.cartItemId === cartItemId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, cartItemId, quantity: 1 }];
    });
    setIsCartOpen(true); // Auto open when adding
  };

  const removeFromCart = (cartItemId) => {
    setCart((prevCart) => prevCart.filter(item => item.cartItemId !== cartItemId));
  };

  const updateQuantity = (cartItemId, quantity) => {
    if (quantity < 1) return;
    setCart((prevCart) => 
      prevCart.map(item => item.cartItemId === cartItemId ? { ...item, quantity } : item)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
    cartCount,
    isCartOpen,
    setIsCartOpen
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
