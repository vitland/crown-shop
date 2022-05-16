import {CardItemContainer, Img, ItemDetails, Name} from './cart-item.styles';

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;

  return (
    <CardItemContainer>
        <Img as={'img'} src={imageUrl} alt={`${name}`} srcset="" />
        <ItemDetails>
            <Name>{name}</Name>
            <span className='price'>{quantity} x {price}$</span>
        </ItemDetails>
      
    </CardItemContainer>
  );
};

export default CartItem;
