import './styles/reset.css'
import './styles/index.css'
import { useState } from 'react'

import CartItem from './components/CartItem'
import StoreItem from './components/StoreItem'
import Total from './components/Total'

export default function App() {

  // STATE
  const [cartItems, setCartItems] = useState([])

  const displayFruit = item => {

  }

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <StoreItem cartItems={cartItems} setCartItems={setCartItems} />
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <CartItem cartItems={cartItems} setCartItems={setCartItems} />
        <Total cartItems={cartItems} setCartItems={setCartItems} />
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
