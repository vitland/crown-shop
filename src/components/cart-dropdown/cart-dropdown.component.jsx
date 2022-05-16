import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { Button } from '../button/button.component'
import Checkout from '../../routes/checkout/checkout.component';
import CartItem from '../cart-item/cart-item.component';

import {CartDropdownContainer, CartItems} from './cart-dropdown.styles';

const CartDropdown = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);
  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>CHECK OUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
