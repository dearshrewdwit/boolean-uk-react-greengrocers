import './styles/reset.css'
import './styles/index.css'

import { useState } from 'react'
import StoreItems from './components/StoreItems'
import Cart from './components/Cart'

export default function App() {
const [cart, setCart] = useState([])

const total = () => {
  let price = 0
  for (const item of cart) {
    price += (item.price*item.quantity)
  }
  return "£" + price.toFixed(2)
}
console.log("rendering app..")
console.log(cart)
  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <StoreItems cart={cart} setCart={setCart}/>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <Cart cart={cart} setCart={setCart} />
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">{total()}</span>
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
