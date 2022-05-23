import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from '../../store/cart/cart.action'
import { selectCartItems } from '../../store/cart/cart.selector'
import { Button, BUTTON_STYLES_CLASS } from '../button/button.component'
import {ProductCartContainer, Footer, Name, Price}from './product-card.styles'


const ProductCard = ({product}) => {
  const dispatch = useDispatch()
    const {name, price, imageUrl} = product
    const cartItems = useSelector(selectCartItems)
    const addProductToCart = () => dispatch(addItemToCart(product, cartItems))
    
  return (
    <ProductCartContainer>
        <img src={imageUrl} alt={`${name}`} />
        <Footer>
            <Name>{name}</Name>
            <Price>{price}</Price>
        </Footer>
        <Button buttonType={BUTTON_STYLES_CLASS.inverted} onClick={addProductToCart}>Add to cart</Button>
    </ProductCartContainer>
  )
}

export default ProductCard