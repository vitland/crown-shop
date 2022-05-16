import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import {CheckoutItemContainer, Name,Quantity, Arrow, Value, Price, RemoveButton, Image, ImageContainer} from './checkout-item.styles';

const CheckoutItem = ({ checkoutItem }) => {
  const { name, imageUrl, price, quantity } = checkoutItem;
  const { removeItemFromCart, addItemToCart, removeOneItemFromCartHander } =
    useContext(CartContext);


  const addItemToCartHandler = () => { addItemToCart(checkoutItem) }
  const removeItemFromCartHandler = () => { removeOneItemFromCartHander(checkoutItem)}
  const clearCart = () => { removeItemFromCart(checkoutItem) }

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Image as={'img'} src={imageUrl} alt={`${name}`} srcset="" />
      </ImageContainer>

      <Name>{name}</Name>
      <Quantity>
        <Arrow
          onClick={removeItemFromCartHandler}
        >
          &#10094;
        </Arrow>
        <Value> {quantity}</Value>
        <Arrow onClick={addItemToCartHandler}>
          &#10095;
        </Arrow>
      </Quantity>
      <Price>${price}</Price>

      <RemoveButton onClick={clearCart}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
