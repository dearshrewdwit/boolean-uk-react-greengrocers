import { useState } from 'react'

import './styles/reset.css'
import './styles/index.css'

import Store from './components/Store'
import Cart from './components/Cart'
import Footer from './components/Footer'

export default function App() {
  // Setup state here...
  const [cart, setCart] = useState([])

  const addToCart = storeItem => {
    // Using find to see if the storeItem is already in the cart
    const found = cart.find(cartItem => cartItem.id === storeItem.id)
    // If found is a truthy value, we do nothing (stops user from adding multiples of one item)
    if (found) return

    const newCartItem = { ...storeItem, quantity: 1 }
    setCart([...cart, newCartItem])
  }

  const editCartItem = (cartItem, operation) => {
    let updatedCart

    if (operation === 'decrement') {
      updatedCart = cart.map(item => {
        if (item.name === cartItem.name) {
          const copy = { ...item, quantity: item.quantity - 1 }
          if (copy.quantity === 0) return null
          return copy
        }
        return item
      })
    } else if (operation === 'increment') {
      updatedCart = cart.map(item => {
        if (item.name === cartItem.name) {
          return { ...item, quantity: item.quantity + 1 }
        }
        return item
      })
    }

    setCart(updatedCart.filter(item => item !== null))
  }

  return (
    <>
      <Store addToCart={addToCart} />
      <Cart cart={cart} editCartItem={editCartItem} />
      <Footer />
    </>
  )
}
