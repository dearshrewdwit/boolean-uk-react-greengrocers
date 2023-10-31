import './styles/reset.css'
import './styles/index.css'

import initialStoreItems from './store-items'
import { useState } from 'react'
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

  const [storeItems] = useState(initialStoreItems)
  console.log(storeItems)
  const [cartItems, setCartItems] = useState([])

  const addCartItem = (itemClicked) => {
    if (cartItems.some((item) => item.name === itemClicked.name)) {
      const foundItem = cartItems.find(item => item.id === itemClicked.id)
      foundItem.quantity+=1
      console.log(foundItem)
    } else {
      const newItem = {
        ...itemClicked,
        quantity: 1,
      }
      console.log(newItem, cartItems)
      setCartItems([...cartItems, newItem])
    }
  }

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {storeItems.map((item) => (
            <li key={item.name}>
              <div className="store--item-icon">
                <img src={`/assets/icons/${item.id}.svg`} alt={item.name} />
              </div>
              <button
                onClick={() => { addCartItem(item) }}
              >Add to cart</button>
            </li>
          ))}
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {cartItems.map((item) => (
              <li key={item.name}>
                <img
                  className="cart--item-icon"
                  src={`/assets/icons/${item.id}.svg`}
                  alt={item.name}
                />
                <p>{item.name}</p>
                <button className="quantity-btn remove-btn center">-</button>
                <span className="quantity-text center">{item.quantity}</span>
                <button className="quantity-btn add-btn center">+</button>
              </li>
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
