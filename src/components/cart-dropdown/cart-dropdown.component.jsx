import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Checkout from '../../routes/checkout/checkout.component';
import { Button } from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);
  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckoutHandler}>CHECK OUT</Button>
    </div>
  );
};

export default CartDropdown;
