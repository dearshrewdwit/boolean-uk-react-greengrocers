import { useState } from 'react'

import './styles/reset.css'
import './styles/index.css'

import Store from './components/Store.js'
import Cart from './components/Cart.js'


import storeItems from './store-items'

/*
Here's what a store item should look like
{
  id: '001-beetroot',
  name: 'beetroot',
  price: 0.35
}

What should a cart item look like? 🤔
*/

console.log(storeItems)

export default function App() {
  // Setup state here...
  const [cartItems, setCartItems] = useState([])

  const addItemToCart = (item) => {
    const existingItem = cartItems.find((exist) => exist.item === item)
    if (existingItem !== undefined) {
      increaseQuantity(existingItem)
    } else {
      setCartItems([...cartItems, {item: item, quantity: 1}])
    }
    
  }

  const increaseQuantity = (cartItem) => {
    cartItem.quantity++
    setCartItems([...cartItems])
  }

  const decreaseQuantity = (cartItem) => {
    if (cartItem.quantity === 1) {
      removeItemFromCart(cartItem)
    } else {
      cartItem.quantity--
      setCartItems([...cartItems])
    }
  }

  const removeItemFromCart = (cartItem) => {
    setCartItems(cartItems.filter((existingCartItem) => cartItem != existingCartItem))
  }

  return (
    <>
      <Store addItemToCart={addItemToCart}/>
      <Cart
        cartItems={cartItems}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />
      <div className='footer'>
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
