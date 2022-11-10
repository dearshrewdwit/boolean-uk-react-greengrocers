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

  return (
    <>
      <Store />
      <Cart />
      <Footer />
    </>
  )
}
