import React, { useState, useEffect, createContext, useContext } from 'react';
import coursesData from '../data/courses.json';

const CartContext = createContext();

export default function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return !!cart.find((item) => item.id === id);
  };

  const cartHandler = (id) => {
    const isIn = cart.find((item) => item.id === id);
    
    if (!isIn) {
      const item = coursesData.find((item) => item.id === id);
      setCart([...cart, item]);
      return true;
    } else {
      const newCart = cart.filter((item) => item.id !== id);
      setCart(newCart);
      return false;
    }
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, clearCart, isInCart, cartHandler }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };
