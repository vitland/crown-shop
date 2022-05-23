import { useDispatch, useSelector } from 'react-redux'
import { setVisibility } from '../../store/cart/cart.action'
import { selectCartCount, selectIsVisible } from '../../store/cart/cart.selector'

import {CartIconContainer, ShoppingIcon, ItemCount} from './cart-icon.styles'


const CartIcon = () => {
  const dispatch = useDispatch()
  const isVisible = useSelector(selectIsVisible)
  const cartCount = useSelector(selectCartCount)
console.log(isVisible)
  const toggleVisibility = () =>  dispatch(setVisibility(!isVisible) )
  return (
    <CartIconContainer onClick={toggleVisibility}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon