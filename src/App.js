import './styles/reset.css'
import './styles/index.css'
import Footer from './Components/Footer'

import initialStoreItems from './store-items'
import { useState } from 'react'
import Total from './Components/Total'

/*
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
  const [storeItems, setStoreItems] = useState(initialStoreItems)
  const [cartItems, setCartItems] = useState([])
  console.log(cartItems)

  //function to add storeitem to cart
  const AddToCart = item => {
    //checks if item already exists in cart
    const exists = cartItems.find(cartItem => cartItem.id === item.id)
    if (exists) {
      // if exists returns true,
      const updateCartItem = cartItems.map(targetCartItem => {
        if (targetCartItem.id === item.id) {
          return { ...targetCartItem, quantity: targetCartItem.quantity + 1 }
        }

        return targetCartItem
      })
      setCartItems(updateCartItem)
    } else {
      const newCartItem = { ...item, quantity: 1 }
      setCartItems([...cartItems, newCartItem])
    }
  }
  const DecreaseQuantity = cartItem => {
    const updatedCartItems = cartItems.map(targetCartItem => {
      if (targetCartItem.id === cartItem.id) {
        return {
          ...targetCartItem,
          quantity: targetCartItem.quantity - 1
        }
      }
      setCartItems(updatedCartItems)

      {
        /*setCartItems(cartItems.filter(targetCartItem => item !== targetCartItem))*/
      }
    })
  }
  const IncreaseQuantity = cartItem => {
    const updatedCartItems = cartItems.map(targetCartItem => {
      if (targetCartItem.name === cartItem.name) {
        return { ...targetCartItem, quantity: targetCartItem.quantity + 1 }
      } else {
        return targetCartItem
      }
    })
    setCartItems(updatedCartItems)
  }

  const total = cartItems.reduce((amount, cartItem) => {
    return (amount += cartItem.price * cartItem.quantity)
  }, 0)

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {/* Wrtite some code here... */}
          {storeItems.map(item => (
            <li key={item.id}>
              <div class="store--item-icon">
                <img src={`/assets/icons/${item.id}.svg`} alt={item.name} />
              </div>
              <button onClick={() => AddToCart(item)}>Add to cart</button>
            </li>
          ))}
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {/* Wrtite some code here... */}
            {cartItems.map(cartItem => (
              <li key={cartItem.id}>
                <img
                  class="cart--item-icon"
                  src={`assets/icons/${cartItem.id}.svg`}
                  alt={cartItem.name}
                />
                <p>{cartItem.name}</p>
                <button
                  class="quantity-btn remove-btn center"
                  onClick={() => DecreaseQuantity(cartItem)}
                >
                  -
                </button>
                <span class="quantity-text center">{cartItem.quantity}</span>
                <button
                  class="quantity-btn add-btn center"
                  onClick={() => IncreaseQuantity(cartItem)}
                >
                  +
                </button>
              </li>
            ))}
          </ul>
        </div>
        <Total total={total} />
      </main>
      <Footer />
    </>
  )
}
