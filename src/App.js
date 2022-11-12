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

export default function App() {
  const [ cartItems, setCartItem] = useState([])

  const addToCart = (newItem) => {
  
   if (cartItems.find(item => item.id === newItem.id)) {
    console.log("hey girl swirl")
   
    // need to tell it to not add another item to cart and increase quantity 
  } else { 
    const newCartItems = [...cartItems]
    newCartItems.push(newItem)
    setCartItem(newCartItems)
    console.log("item added", newItem)
  
  }
    
  }
  

  return (
    <>
      <Store  addToCart = {addToCart}/>
      <Cart cartItems = {cartItems} setCartItem = {setCartItem} />
      <Footer />

    </>
  )
}
