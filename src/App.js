import { useState } from 'react';

import './styles/reset.css'
import './styles/index.css'


import Store from './Store'



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
  const [cartItems, setCartItems] = useState(cartItems)
  function addToCart(item){
    const itemPresent = cartItems.find(itemInCart => 
      itemInCart.id === item.id 
    )
    if(itemPresent) {
      const other = cartItems.filter(itemInCart => itemInCart.id !== item.id)
      itemPresent.quantity += 1
      setCartItems([...other, itemPresent])
      console.log(cartItems)
    }
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
