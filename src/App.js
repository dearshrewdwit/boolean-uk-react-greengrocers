import './styles/reset.css'
import './styles/index.css'

import initialStoreItems from './store-items'
import { useEffect, useState } from 'react'
import Store from './Store'
import Cart from './Cart'
import Filters from './Filters'

console.log(initialStoreItems)

export default function App() {
  const [items, setItems] = useState(initialStoreItems)
  const [cart, setCart] = useState([])

  // This is pretty obvious
  const total = () => {
    let totalPrice = 0.0
    for (const item of cart) {
      totalPrice += item.price * item.quantity
    }
    return totalPrice.toFixed(2)
  }

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <Filters
          setItems={setItems}
          initialStoreItems={initialStoreItems}
          items={items}
        />
        <ul className="item-list store--item-list">
          <Store items={items} cart={cart} setCart={setCart} />
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            <Cart cart={cart} setCart={setCart} />
          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">£{total()}</span>
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
