import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Button } from '../button/button.component'
import CartItem from '../cart-item/cart-item.component';

import {CartDropdownContainer, CartItems} from './cart-dropdown.styles';
import { selectCartItems } from '../../store/cart/cart.selector';

const CartDropdown = () => {
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems)
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
