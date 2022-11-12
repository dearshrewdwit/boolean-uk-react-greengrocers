import { useState } from 'react'
import './styles/reset.css'
import './styles/index.css'

import Store from './Store'
import Cart from './Cart'
import Footer from './Footer'

import initialStoreItems from './store-items'

/*
Here's what a store item should look like
{
  id: '001-beetroot',
  name: 'beetroot',
  price: 0.35,
  (need to add the quantity prop)
}
*/

console.log(initialStoreItems)

export default function App() {
  const [ cartItems, setCartItem] = useState([])

  const addToCart = (item) => {
    
    const newCartItems = [...cartItems]
    newCartItems.push(item)
    setCartItem(newCartItems)
    console.log("item is added", item)

  }
  

  return (
    <>
      <Store  addToCart = {addToCart}/>
      <Cart cartItems = {cartItems} setCartItem = {setCartItem} />
      <Footer />

    </>
  )
}
