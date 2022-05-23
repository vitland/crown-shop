import { createSelector } from 'reselect';

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => {
    return cart.cartItems}
);
export const selectIsVisible = createSelector(
  [selectCartReducer],
  (cart) => cart.isVisible
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((sum, current) => sum + current.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((sum, current) => sum + current.quantity * current.price, 0)
);
