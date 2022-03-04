import './styles/reset.css'
import './styles/index.css'
import { useState } from 'react'
import React from 'react'

import initialStoreItems from './Store-items'
import Store from './components/Store.js'
import Cart from './components/Cart.js'

export default function App() {
  const [store, setStore] = useState(initialStoreItems)
  const [cart, setCart] = useState([])

  // making a new array of a cart by adding items
  const addNewItem = item => {
    setCart([...cart, item])
    console.log('hello'.item)
  }

  // updating items
  const onIncreaseClick = target => {
    const updatedQuantity = cart.map(item =>
      item.id === target.id ? { ...item, quantity: item.quantity + 1 } : item
    )
    setCart(updatedQuantity)
  }

  // removing items
  const onDecreaseClick = target => {
    if (target.quantity === 1) {
      const updatedQuantity = cart.filter(item => item.id !== target.id)
      setCart(updatedQuantity)
    } else {
      const updatedQuantity = cart.map(item =>
        item.id === target.id ? { ...item, quantity: item.quantity - 1 } : item
      )
      setCart(updatedQuantity)
    }
  }
  

  // below is a combination about both of the above functions in one
  function addToCart(item) {
    cart.some(element => element.id === item.id)
      ? onIncreaseClick(item)
      : addNewItem(item)
  }

