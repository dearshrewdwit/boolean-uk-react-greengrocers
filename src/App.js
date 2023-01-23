import { useState } from 'react'
import React from 'react'
import './styles/reset.css'
import './styles/index.css'
import Cart from './Cart.js'
import Store from './Store.js'
import Footer from './Footer.js'

import initialStoreItems from './store-items'

/*n
Here's what a store item should look like
{
  id: '001-beetroot',
  name: 'beetroot',
  price: 0.35
}

What should a cart item look like? 🤔
*/

console.log(initialStoreItems)

export default function App() {
  // Setup state here...

  const [cartItems, setCartItems] = useState([])

  const addToCart = newItem => {
    if (cartItems.find(item => item.id === newItem.id)) {
      const updatedCart = cartItems.map(cartItem => {
        if (cartItem.id === newItem.id) {
          return { ...cartItem, quantity: ++cartItem.quantity }
        }
        return cartItem
      })
      setCartItems(updatedCart)
    } else {
      const newCartItems = [...cartItems]
      newItem.quantity = 1
      newCartItems.push(newItem)
      setCartItems(newCartItems)
    }
  }

  const plusBtn = newItem => {
    const updatedCart = cartItems.map(cartItem => {
      if (cartItem.id === newItem.id) {
        return { ...cartItem, quantity: ++cartItem.quantity }
      }
      return cartItem
    })
    setCartItems(updatedCart)
  }

  const minusBtn = newItem => {
    if (newItem.quantity > 1) {
      const updatedCart = cartItems.map(cartItem => {
        if (cartItem.id === newItem.id) {
          return { ...cartItem, quantity: --cartItem.quantity }
        }
        return cartItem
      })
      setCartItems(updatedCart)
    } else {
      const cartNotChanged = cartItems.filter(cartItem => {
        return cartItem !== newItem
      })
      setCartItems(cartNotChanged)
    }
  }
  const cartTotal = () => {
    let totalPrice = 0

    cartItems.forEach(item => {
      totalPrice += item.price * item.quantity
    })

    const formatCurrency = new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP'
    })
    return formatCurrency.format(totalPrice)
  }

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {/* Wrtite some code here... */}
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {/* Wrtite some code here... */}
          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">£0.00</span>
          </div>
        </div>
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
      <Store addToCart={addToCart} />
      <Cart
        cartItems={cartItems}
        plusBtn={plusBtn}
        minusBtn={minusBtn}
        cartTotal={cartTotal}
      />
      <Footer />
    </>
  )
}
