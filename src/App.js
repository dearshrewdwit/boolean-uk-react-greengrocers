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
    // 1. Check if storeItem is already in cart- if so, increase the quantity by 1
    // 2. If it's not, add to cart and set quantity to 1
    // 3. Set cart to reflect updates
    const newCart = [...cart, storeItem]
    setCart(newCart)
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
