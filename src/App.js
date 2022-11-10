import { useState } from 'react'

import './styles/reset.css'
import './styles/index.css'

import Store from './components/Store'
import Cart from './components/Cart'
import Footer from './components/Footer'

/*
Here's what a store item should look like
{
  id: '001-beetroot',
  name: 'beetroot',
  price: 0.35
}

What should a cart item look like? 🤔
*/

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

  console.log(cart)

  return (
    <>
      <Store addToCart={addToCart} />
      <Cart cart={cart} />
      <Footer />
    </>
  )
}
