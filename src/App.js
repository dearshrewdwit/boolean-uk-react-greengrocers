import './styles/reset.css'
import './styles/index.css'
import Store from './Store.js'
import Cart from './Cart.js'
import { useState } from 'react'

import initialStoreItems from './store-items'
// LOGIC -
// Store items are within store-items.js / this is like the state in the last challenge
// 2.) Render Store items with .map function (I think this should be done in another component file??)
//  2.a) Create new component file
//  2.b) Create function called List Items
//  2.c) Pass initalStoreItems to the props from app js
//  2.d) Map around initalStoreItems
//  2.e) Remember ICONS from Public, Assets
//  2.e) Export default
//  2.f) Give classname "item-list store--item-list"

// 3.) Create on click event for add to cart button (THIS SHOULD BE IN THE STORE ITEM COMPONENT) TICK
// 3.a) When button is clicked, send to cart to render (from state > props) HOW DO I DO THIS??? TICK

// 4.) Cart
//  4.a) Create object that stores values from the passed props TICK
//  4.a) Create list items with items passed into it from props TICK
//  4.b) Another .map function looping around the state TICK
//  4.c) Pull the values from the array into to list items TICK

// 5.) Quantity (maybe in it's own component as it is being called several times)
//  5.a) Create buttons for +, -, and number in cart
//  5.b) Pass the number in the cart to total component

// 6.) Total
//  6.a)

export default function App() {
  const [storeItems, setStoreItems] = useState(initialStoreItems)
  const [cartItems, setCartItems] = useState([])

  const handleAddToCart = fruit => {
    const newCartItems = [...cartItems]
    const index = cartItems.findIndex((element) => element.id === fruit.id)
    if (index === -1) {
      fruit.quantity = 1
      newCartItems.push(fruit)
      setCartItems(newCartItems)
    } else {
      fruit.quantity++
      setCartItems(newCartItems)
    }
  };

  const handleQuantity = cartFruit => {
    console.log(cartFruit)
    const updatedCartItem = cartFruit
    console.log(cartItems, cartFruit)

  }


  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          <Store storeItems={storeItems} cartItems={handleAddToCart} />
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            <Cart cartItems={cartItems} handleQuantity={handleQuantity} />
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
