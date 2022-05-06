import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout-item.styles.scss';

const CheckoutItem = ({ checkoutItem }) => {
  const { name, imageUrl, price, quantity } = checkoutItem;
  const { removeItemFromCart, addItemToCart, removeOneItemFromCartHander } =
    useContext(CartContext);


  const addItemToCartHandler = () => { addItemToCart(checkoutItem) }
  const removeItemFromCartHandler = () => { removeOneItemFromCartHander(checkoutItem)}
  const clearCart = () => { removeItemFromCart(checkoutItem) }

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} srcset="" />
      </div>

      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={removeItemFromCartHandler}
        >
          &#10094;
        </div>
        <span className="value"> {quantity}</span>
        <div className="arrow" onClick={addItemToCartHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>

      <div className="remove-button" onClick={clearCart}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
