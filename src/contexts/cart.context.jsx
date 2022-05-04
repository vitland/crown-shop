import React, { createContext, useState } from 'react'

export const CartContext = createContext({
    cartItems: [],
    isVisible: false,
    setIsVisible: ()=>{}
})

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([])
    const [isVisible, setIsVisible] = useState(false)
    const value = {cartItems, setCartItems, isVisible, setIsVisible}

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}


