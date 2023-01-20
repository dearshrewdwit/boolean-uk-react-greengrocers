import './styles/reset.css'
import './styles/index.css'
import Store from "./Store.js"
import { useState } from 'react'

import initialStoreItems from './store-items'

/*
Here's what a store item should look like
{
  id: '001-beetroot',
  name: 'beetroot',
  price: 0.35
}

What should a cart item look like? 🤔
*/

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

// 3.) Create on click event for add to cart button (THIS SHOULD BE IN THE STORE ITEM COMPONENT)
// 3.a) When button is clicked, send to cart to render (from state > props) HOW DO I DO THIS???

// 4.) Cart
//  4.a) Create object that stores values from the passed props
//  4.a) Create list items with items passed into it from props
//  4.b) Another .map function looping around the state

// 5.) Quantity (maybe in it's own component as it is being called several times)
//  5.a) Create buttons for +, -, and number in cart
//  5.b) Pass the number in the cart to total component

// 6.) Total
//  6.a) 

export default function App() {
  const [storeItems, setStoreItems] = useState(initialStoreItems)
  // Setup state here...

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {/* Wrtite some code here... */}
          <Store storeItems={storeItems} />
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
    </>
  )
}
