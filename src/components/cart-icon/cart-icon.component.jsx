
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

import {CartIconContainer, ShoppingIcon, ItemCount} from './cart-icon.styles'


const CartIcon = () => {
  const {isVisible, setIsVisible, cartCount} = useContext(CartContext)
  const toggleVisibility = () =>  setIsVisible(!isVisible) 
  return (
    <CartIconContainer onClick={toggleVisibility}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon