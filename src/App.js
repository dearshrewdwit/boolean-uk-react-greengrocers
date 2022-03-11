import './styles/reset.css'
import './styles/index.css'

import initialStoreItems from './store-items'
import { useEffect, useState } from 'react'
import Store from './Store'
import Cart from './Cart'
import Filters from './Filters'
import Total from './Total'
// import ExtraInfo from './ExtraInfo'

export default function App() {
  const [items, setItems] = useState(initialStoreItems)
  const [cart, setCart] = useState([])
  const [selectedInfo, setSelectedInfo] = useState(null)

  console.log(selectedInfo)

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
          <Store
            items={items}
            cart={cart}
            setCart={setCart}
            selectedInfo={selectedInfo}
            setSelectedInfo={setSelectedInfo}
          />
        </ul>
        {/* {selectedInfo !== null && (
          <ExtraInfo
            selectedInfo={selectedInfo}
            setSelectedInfo={setSelectedInfo}
            items={items}
          />
        )} 
        {selectedInfo === null && (
          <ExtraInfo
            items={items}
            cart={cart}
            setCart={setCart}
            setSelectedInfo={setSelectedInfo}
          />
        )} */}
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
            <Total cart={cart} />
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
