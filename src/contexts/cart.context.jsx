import React, { createContext, useEffect, useState } from 'react';

const addCartItem = (cartItems, productToAdd) => {
  const extistingItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (extistingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeOneItemFromCart = (cartItems, productToRemove) => {
  if (productToRemove.quantity > 1) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
  return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
};

const removeFromCartItem = (cartItems, productToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
};

export const CartContext = createContext({
  cartItems: [],
  isVisible: false,
  setIsVisible: () => {},
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  removeOneItemFromCartHander: () => {},
  sumOfCartItemsFunc: () => {},
  cartCount: 0,
  cartTotal:0
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeFromCartItem(cartItems, productToRemove));
  };

  const removeOneItemFromCartHander = (productToRemove) => {
    setCartItems(removeOneItemFromCart(cartItems, productToRemove));
  };

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (sum, current) => sum + current.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (sum, current) => sum + (current.quantity * current.price),
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);


  const value = {
    cartItems,
    setCartItems,
    isVisible,
    setIsVisible,
    addItemToCart,
    removeItemFromCart,
    removeOneItemFromCartHander,
    cartCount,
    cartTotal
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
