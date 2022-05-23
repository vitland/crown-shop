import { createAction } from '../../utils/reducer/reducer.utils';
import { CART_ACTION_TYPES } from './cart.types';

export const setCartItems = (cartItems) =>
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems);
export const setVisibility = (bool) =>
  createAction(CART_ACTION_TYPES.SET_VISIBILITY, bool);

const addCartItem = (cartItems, productToAdd) => {
    console.log(cartItems)
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

export const addItemToCart = (productToAdd, cartItems) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (productToRemove, cartItems) => {
  const newCartItems = removeFromCartItem(cartItems, productToRemove);
  return  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeOneItemFromCartHandler = (productToRemove, cartItems) => {
  const newCartItems = removeOneItemFromCart(cartItems, productToRemove);
  return  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
