import './styles/reset.css'
import './styles/index.css'

import initialStoreItems from './store-items'
import { useState } from 'react'
import Store from './components/storeItem'
import Cart from './components/cartItem'
import Footer from './components/footer'

export default function App() {
  // Setup state here...
  const [store, setStoreItems] = useState(initialStoreItems)
  const [cart, setCart] = useState([])

  const capitalize = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase()

  const fruits = ["apple", "apricot", "bananas", "berry", "blueberry"]
  const filteredForFruits = store.filter(item => fruits.includes(item.name))
  const vegetables = ["beetroot", "carrot", "avocado", "bell pepper", "eggplant"]
  const filteredForVegetables = store.filter(item => vegetables.includes(item.name))

  const addToCart = (storeItem) => {
    const cartCheck = cart.find((cartItem) => cartItem.name === storeItem.name)
    if (!!cartCheck) return false
    storeItem.quantity = 1
    setCart([...cart, storeItem])
  }
  
  const increaseQuantity = (itemToChange) => {
    setCart(cart.map((cartItem) => {
      if (cartItem.name === itemToChange.name) {
        return {
          ...cartItem,
          quantity: cartItem.quantity + 1
        }
      } else {
        return cartItem
      }
    }))
  }
  
  const decreaseQuantity = (itemToChange) => {
    if (itemToChange.quantity === 1) {
      removeFromCart(itemToChange)
      return
    }

    setCart(cart.map((cartItem) => {
      if (cartItem.name === itemToChange.name) {
        return {
          ...cartItem,
          quantity: Math.max(cartItem.quantity - 1, 0)
        }
      } else {
        return cartItem
      }
    }))
  }

  const changeQuantity = (cartItem, difference) => {
    if (difference > 0) {
      increaseQuantity(cartItem)
    } else if (difference < 0) {
      decreaseQuantity(cartItem)
    }
  }

  const removeFromCart = (itemToRemove) => setCart(cart.filter((cartItem) => cartItem.name !== itemToRemove.name))

  return (
    <>
      <Store storeItems={store} addToCart={addToCart} />
      <Cart cartItems={cart} changeQuantity={changeQuantity}/>
      <Footer />
    </>
  )
}
