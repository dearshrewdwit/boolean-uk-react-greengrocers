import './styles/reset.css'
import './styles/index.css'

import Store from './components/Store'
import Cart from './components/Cart'
import Footer from './components/Footer'

import {useState} from 'react'

export default function App() {
  const [cartItems, setCartItems] = useState([])

  const addOneToQuantity = (item) => {
    // Crazy immutable state update method taken from the slides
      const updatedCart = cartItems.map((cartItem) => {
        if (item.name === cartItem.name) {
        return {...cartItem, quantity: ++cartItem.quantity }
        }
        return cartItem
      })
      setCartItems(updatedCart)
  }

  const removeOneQuantity = (item) => {
    if (item.quantity <= 1) {
      // Crazy immutable state removal method taken from the slides
      const cartWithoutRemoved = cartItems.filter(function(cartItems) {
        return item !== cartItems
          })
        setCartItems(cartWithoutRemoved) 
    } else { 
      // Crazy immutable state update method taken from the slides 
      const updatedCart = cartItems.map((cartItem) => {
        if (item.name === cartItem.name) {
        return {...cartItem, quantity: --cartItem.quantity }
        }
        return cartItem
      })
      setCartItems(updatedCart)
    }
  }

  return (
    <>
      <Store addOneToQuantity={addOneToQuantity} cartItems={cartItems} setCartItems={setCartItems} />
      <Cart cartItems={cartItems} addOneToQuantity={addOneToQuantity} removeOneQuantity={removeOneQuantity}/>
      <Footer />
    </>
  )
}
