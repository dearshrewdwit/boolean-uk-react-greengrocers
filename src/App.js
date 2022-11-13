import './styles/reset.css'
import './styles/index.css'

import initialStoreItems from './store-items'
import Store from './Store'
import { useState } from 'react'
import Cart from './Cart'
import Total from './Total'

console.log(initialStoreItems)

export default function App() {
  // Setup state here...
  const [cart, setCart] = useState([])
  //const [quantity, setQuantity]= useState(1)

  //  Adding item into Cart
  function addToCart(item) {
    // check if the item is already in the cart
    // if it is increase the quantity by 1 and return
    const itemFound = cart.find(itemFromCart => itemFromCart.id === item.id)
    if (itemFound) {
      const others = cart.filter(itemFromCart => itemFromCart.id !== item.id)
      itemFound.quantity += 1
      setCart([...others, itemFound])
    } else {
      const cartItem = { ...item, quantity: 1 }
      setCart([...cart, cartItem])
    }
  }
  // item increase  in the cart
  const handleIncrement = item => {
    const updatedCart = cart.map(cartItem => {
      if (item.id === cartItem.id) {
        return { ...cartItem, quantity: ++cartItem.quantity }
      }
      return cartItem
    })
    setCart(updatedCart)
  }

  // item decrease in the cart and remove from the list when its 0
  const handleDecrement = item => {
    const updatedCart = cart.map(cartItem => {
      if (item.id === cartItem.id) {
        const itemFound = { ...cartItem, quantity: --cartItem.quantity }
        // if the quantity is 0 remove from the list else itemfound, decrease the quantity
        if (item.quantity === 0) {
          return null
        } else {
          return itemFound
        }
      }
      return cartItem
    })
    //  update the cart and check if the there is no item = null
    setCart(updatedCart.filter(item => item !== null))
  }
  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <Store addToCart={addToCart} />
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <Cart
          cart={cart}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />

        <Total cart={cart} />
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
