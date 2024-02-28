import { useState, useEffect } from 'react'
import './styles/reset.css'
import './styles/index.css'
import Header from "./Components/Header/Header.jsx"
import Cart from "./Components/Cart/Cart.jsx"
import Credit from "./Components/Credit/Credit.jsx"
import initialStoreItems from './store-items'


/*
 Here's what a store item should look like
 {
 id: '001-beetroot',
 name: 'beetroot',
 price: 0.35
 }

 What should a cart item look like? 🤔
 */

console.log(initialStoreItems)

export default function App() {
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    const initialCart = []
    initialStoreItems?.forEach((entry) => {
      initialCart.push({...entry, quantity: 0})
    })
    setCartItems(initialCart)
  },[])

  const addItemToCart = (itemId) => {
    const updateItem = cartItems
    updateItem[updateItem.findIndex((i) => i.id === itemId)].quantity += 1
    setCartItems([...updateItem])
  }

  const removeItemFromCart = (itemId) => {
    const updateItem = cartItems
    updateItem[updateItem.findIndex((i) => i.id === itemId)].quantity -= 1
    setCartItems([...updateItem])
  }

  return (
    <>
      <Header storeItems={initialStoreItems} addFunction={addItemToCart}/>
      <Cart cart={cartItems} increment={addItemToCart} decrement={removeItemFromCart}/>
      <Credit/>
    </>
  )
}
