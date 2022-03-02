import React, { useState } from 'react'

import './styles/reset.css'
import './styles/index.css'

import Cart from './components/Cart'
import Store from './components/Store'
// const initialStoreItems = []

const App = () => {
  // const [storeItems, setStoreItems] = useState(initialStoreItems[0])
  // const [cartItems, setCartItems] = useState([])

  return (
    <>
      <Store />
      <Cart />
    </>
  )
}

export default App
