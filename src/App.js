import { useState } from 'react'
import './styles/reset.css'
import './styles/index.css'

import Store from './Store'
import Cart from './Cart'
import Footer from './Footer'


export default function App() {
  const [ cartItems, setCartItems] = useState([])

   const addToCart = (newItem) => {
  
   if (cartItems.find(item => item.id === newItem.id)) {

    const updatedCart = cartItems.map((cartItem) => {

      if (cartItem.id === newItem.id) {
   return { ...cartItem, quantity : ++cartItem.quantity }
      }
      return cartItem
    })
    setCartItems(updatedCart)
    console.log(cartItems)
   } else { 
     const newCartItems = [...cartItems]
     newItem.quantity = 1
     newCartItems.push(newItem)
     setCartItems(newCartItems)
     console.log("item added", newItem)
  
   }}
   
  const addButton = (newItem) => {
    const updatedCart = cartItems.map((cartItem) => {

      if (cartItem.id === newItem.id) {
   return { ...cartItem, quantity : ++cartItem.quantity }
      }
      return cartItem
    })
    setCartItems(updatedCart)
    console.log(cartItems)
   }

  
  const minusButton = (newItem) => {
    
     if(newItem.quantity > 1){
      const updatedCart = cartItems.map((cartItem) => {
     if (cartItem.id === newItem.id) {
   return { ...cartItem, quantity : --cartItem.quantity }
      }
      return cartItem
    })
    setCartItems(updatedCart)
  } else {
    const cartWithoutRemoved = cartItems.filter((cartItem)=> {
      return cartItem !== newItem
        })
      setCartItems(cartWithoutRemoved) 
      }
    }

    const cartTotal = () => {
     
      let totalPrice = 0
  
      cartItems.forEach((item)=>{
       totalPrice +=  item.price * item.quantity
  
      })
     
      const formatCurrency = new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
     })
      
    return formatCurrency.format(totalPrice)
  
    }

  return (
    <>
      <Store  addToCart = {addToCart}/>
      <Cart cartItems = {cartItems}  addButton = {addButton} minusButton = {minusButton} cartTotal = {cartTotal} />
      <Footer />

    </>
  )
}
