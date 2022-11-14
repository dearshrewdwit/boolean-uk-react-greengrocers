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
      // Checks if the item is already in cart and if it is increases quantity by one 

    const updatedCart = cartItems.map((cartItem) => {
      if (cartItem.id === newItem.id) {
         return { ...cartItem, quantity : ++cartItem.quantity}
      }
      return cartItem

    })
    setCartItems(updatedCart)

    } else { 
    // If item is not in the cart it pushes it in and updates the cartItems List
     const newCartItems = [...cartItems]
     newItem.quantity = 1
     newCartItems.push(newItem)
     setCartItems(newCartItems)

   }}
   

  const addButton = (newItem) => {
    const updatedCart = cartItems.map((cartItem) => {
      // uses same method as addToCart button and increases quantity

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
    // This if statement allows item quantity to be decreased in cart till it reaches 1
      const updatedCart = cartItems.map((cartItem) => {
      if (cartItem.id === newItem.id) {
      // // uses same method as addToCart button and decreases quantity
        return { ...cartItem, quantity : --cartItem.quantity }
        }
        return cartItem
    })
    setCartItems(updatedCart)
    } else {
    const cartWithoutRemoved = cartItems.filter((cartItem)=> {
    // This filter allows the item to fully be removed from the cart once its quantitiy is less than 1
      return cartItem !== newItem
        })
      setCartItems(cartWithoutRemoved) 
      }
    }

    const cartTotal = () => {
    // This works out the cart total using price * quantity of the items in the cart
     
      let totalPrice = 0
  
      cartItems.forEach((item)=>{
       totalPrice +=  item.price * item.quantity
  
      })
     
      const formatCurrency = new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
     })
    // This return statement allows total to be formatted before it is displayed
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
