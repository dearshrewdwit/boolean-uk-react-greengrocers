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
  const [ cartItems, setCartItems] = useState([])

   const addToCart = (newItem) => {
  
   if (cartItems.find(item => item.id === newItem.id)) {

    return {...cartItems, quantity: ++cartItems.quantity }
    console.log(cartItems.quantity)

   } else { 
     const newCartItems = [...cartItems]
     newCartItems.push(newItem)
     setCartItems(newCartItems)
     console.log("item added", newItem)
  
   }}
 
  // need to make 2 functions for increase and decrease
  // once code for add cart button is working  can copy into these 2 functions
  const addButton = (item) => {}
  const minusButton = (item) => {}
  

  return (
    <>
      <Store  addToCart = {addToCart}/>
      <Cart cartItems = {cartItems}  addButton = {addButton} minusButton = {minusButton} quantity = {cartItems.quantity} />
      <Footer />

    </>
  )
}
