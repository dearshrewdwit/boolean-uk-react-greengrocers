import { useState } from 'react';

import './styles/reset.css'
import './styles/index.css'


import Store from './Store'
import Item from './Item';
import CartItem from './Cart-Item';



/*
Here's what a store item should look like
{
  id: '001-beetroot',
  name: 'beetroot',
  price: 0.35
}

What should a cart item look like? 🤔
*/

// console.log(initialStoreItems)

export default function App() {
  const [cart, setCartItems] = useState([])
  const addToCart = newItem => {
    if (cart.find(item => item.id === newItem.id)) {

      const updateQuantity = cart.map(item => {
        console.log(item)
        if (item.id === newItem.id) {
          return { ...item, quantity: item.quantity + 1 }
        }
        else {
          return item
        }
      })
      setCartItems(updateQuantity)
      console.log('items is already in cart', cart)
    }
    else {
      const itemToAdd = { ...newItem, quantity: 1 }
      setCartItems([...cart, itemToAdd])
      console.log('new Item in Cart', cart)
    }
  }

  const handleDecrement = removeItem => {
    const updateQuantitySubb = cart.map(item => {
      if (item.id === removeItem.id) {
        const quantityDecrement = { ...item, quantity: item.quantity - 1 }
        if (removeItem.quantity === 1) {
          return ''
        }
        else {
          return quantityDecrement
        }
      }
      return item
    })
    setCartItems(updateQuantitySubb.filter(item => item !== ''))

  }
  const handleIncrement = item => {
    const updatedCart = cart.map(cartItem => {
      if (item.id === cartItem.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 }
      }
      return cartItem
    })
    setCartItems(updatedCart)
  }
  
  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <Store addToCart={addToCart} />
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {cart.map((item, index) => (
              <CartItem cartItem={item} key={index} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
            ))}
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
    </>
  )
}
