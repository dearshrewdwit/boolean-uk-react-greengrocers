import './styles/reset.css'
import './styles/index.css'

import initialStoreItems from './store-items'
import { useState } from 'react';

/*
 Here's what a store item should look like
 {
 id: '001-beetroot',
 name: 'beetroot',
 price: 0.35
 }

 What should a cart item look like? 🤔
 */

export default function App() {
  
  const [storeItems, setStoreItems] = useState(initialStoreItems);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    let newArray = [...cartItems]
    const itemIndexInCart = newArray.findIndex(cartItem => cartItem.name === item.name)
    if (itemIndexInCart !== -1) {
      newArray[itemIndexInCart].quantity = newArray[itemIndexInCart].quantity + 1
    }
    else {
      item.quantity = 1
      newArray = [...newArray, item]
    }
    setCartItems([...newArray])
  }

  const incrementItem = (item) => {
    let newArray = [...cartItems]
    const itemIndexInCart = newArray.findIndex(cartItem => cartItem.name === item.name)
    if (itemIndexInCart !== -1) {
      newArray[itemIndexInCart].quantity = newArray[itemIndexInCart].quantity + 1
      setCartItems([...newArray])
    }
  }

  const decrementItem = (item) => {
    let newArray = [...cartItems]
    const itemIndexInCart = newArray.findIndex(cartItem => cartItem.name === item.name)
    if (itemIndexInCart !== -1) {
      newArray[itemIndexInCart].quantity = newArray[itemIndexInCart].quantity - 1
      if (newArray[itemIndexInCart].quantity <= 0) {
        newArray = newArray.filter(cartItem => cartItem.name !== item.name)
      }
      setCartItems([...newArray])
    }
  }

  let total = 0
  cartItems.map(item => (
    total += item.quantity * item.price
  ))

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {storeItems.map((item, index) => (
          <li
            key={index}>
            <div className="store--item-icon">
              <img src={`/assets/icons/${item.id}.svg`} alt={item.name}/>
            </div>
            <button onClick={() => addToCart(item)}>Add to cart</button>
          </li>
          ))}
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {cartItems.map((item, index) => (
              <li
              key={index}>
              <img
                className="cart--item-icon"
                src={`assets/icons/${item.id}.svg`}
                alt={`${item.name}`}
              />
              <p>{item.name}</p>
              <button 
                className="quantity-btn remove-btn center"
                onClick={() => decrementItem(item)}>-</button>
              <span className="quantity-text center">{item.quantity}</span>
              <button 
                className="quantity-btn add-btn center"
                onClick={() => incrementItem(item)}>+</button>
            </li>

            ))}
          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">{`£${total.toFixed(2)}`}</span>
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
