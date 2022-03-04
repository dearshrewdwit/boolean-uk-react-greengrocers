import React, { useState } from 'react'

import './styles/reset.css'
import './styles/index.css'

import Cart from './components/Cart'
import Store from './components/Store'

import { CartContext } from './helper/CartContext'

const App = () => {
  const [cart, setCart] = useState([])

  return (
    <>
      <CartContext.Provider value={{ cart, setCart }}>
        <Store />
        <Cart />
      </CartContext.Provider>
    </>
  )
}

export default App
