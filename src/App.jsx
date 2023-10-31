import './styles/reset.css'
import './styles/index.css'

import initialStoreItems from './store-items'
import { useState } from 'react'
import StoreItem from './components/storeItem'

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
  // Setup state here...
  const [store, setStoreItems] = useState(initialStoreItems)
  const [cart, setCart] = useState([])

  const capitalize = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase()

  const fruits = ["apple", "apricot", "bananas", "berry", "blueberry"]
  const filteredForFruits = store.filter(item => fruits.includes(item.name))
  const vegetables = ["beetroot", "carrot", "avocado", "bell pepper", "eggplant"]
  const filteredForVegetables = store.filter(item => vegetables.includes(item.name))

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {
            store.map((item, index) => <StoreItem item={item} index={index} />)
          }
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {cart.map((item, index) => <CartItem item={item} index={index} />)}
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
