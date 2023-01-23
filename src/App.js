import './styles/reset.css'
import './styles/index.css'

import initialStoreItems from './store-items'
import { useState } from 'react'
import Header from './Header'
import Cart from './Cart'
import Total from './Total'
//import Total from './Total'
/*
Here's what a store item should look like
{
  id: '001-beetroot',
  name: 'beetroot',
  price: 0.35
}

What should a cart item look like? 🤔
*/
//const initialStoreItems = []

console.log(initialStoreItems)

export default function App() {
  const [storeItems, setstoreItems] = useState(initialStoreItems)
  const [cartItems, setCartItems] = useState([])
  // Setup state here...
  // add item to cart
  //create new array that inludes the items
   //checks if item already exists in cart
   // if exists returns true,
    //define quantity
  const addItemToCart = item => {
    console.log("push items", item)
    const exists = cartItems.find(cartItem => cartItem.id === item.id)
    if (exists) {
      const updateCartItem = cartItems.map(selectedItem => {
        if (selectedItem.id === item.id) {
          return { ...selectedItem, quantity: selectedItem.quantity + 1 }
        }
        return selectedItem
      })
      setCartItems(updateCartItem)
    } else {
      const newCartItem = { ...item, quantity: 1 }
      setCartItems([...cartItems, newCartItem])
    }
  }

  //decrease button
 
  //checks the quantity
   //if it is more than 1; decrease -1
  //if its equal to 1; remove it
  const decreaseButton = cartItem => {
    if (cartItem.quantity > 1) {
      const updatedCartItems = cartItems.map(targetCartItem => {
        if (targetCartItem.name === cartItem.name && targetCartItem.quantity) {
          return {...targetCartItem, quantity: targetCartItem.quantity - 1}
        }
        return targetCartItem
      })
      setCartItems(updatedCartItems)
    } else {
      const removeFromCart = cartItems.filter( targetCartItem => targetCartItem.name !== cartItem.name)
   setCartItems(removeFromCart)
 }
}

  //increse button
  const increaseButton = cartItem => {
     const updatedCartItems = cartItems.map(selectedItem => {
      if (selectedItem.name === cartItem.name ) {
        console.log("increase item", selectedItem)
        return{...selectedItem, quantity: selectedItem.quantity +1}
      } else {
        return selectedItem
      } 
     })
     setCartItems(updatedCartItems)
  }
//total
  const cartTotal = () => {
    let total = 0
    cartItems.forEach(item => (total += item.quantity * item.price))
      console.log("total item", cartItems)
    return `£${total.toFixed(2)}`
  }

  console.log(cartItems)
  return (
    <>
      <Header storeItems={storeItems} addItemToCart={addItemToCart}/>
      <main id="cart">
        <h2>Your Cart</h2>
        <Cart cartItems={cartItems} 
        decreaseButton={decreaseButton}
        increaseButton={increaseButton} />
       <Total cartTotal={cartTotal}/>
      </main>
      <div>
        Icons made by
        <a
          href="https://www.flaticon.com/authors/icongeek26"
          title="Icongeek26"
        >
          Icongeek26
        </a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </>
  )
}
