import { useDispatch, useSelector } from 'react-redux';

import {
  addItemToCart,
  removeItemFromCart,
  removeOneItemFromCartHandler,
} from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

import {
  CheckoutItemContainer,
  Name,
  Quantity,
  Arrow,
  Value,
  Price,
  RemoveButton,
  Image,
  ImageContainer,
} from './checkout-item.styles';

const CheckoutItem = ({ checkoutItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems)
  const { name, imageUrl, price, quantity } = checkoutItem;

  const addItemToCartHandler = () => dispatch(addItemToCart(checkoutItem,cartItems));
  const removeItemFromCartHandler = () =>
    dispatch(removeOneItemFromCartHandler(checkoutItem,cartItems));
  const clearCart = () => dispatch(removeItemFromCart(checkoutItem,cartItems));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Image as={'img'} src={imageUrl} alt={`${name}`} srcset="" />
      </ImageContainer>

      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={removeItemFromCartHandler}>&#10094;</Arrow>
        <Value> {quantity}</Value>
        <Arrow onClick={addItemToCartHandler}>&#10095;</Arrow>
      </Quantity>
      <Price>${price}</Price>

      <RemoveButton onClick={clearCart}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
