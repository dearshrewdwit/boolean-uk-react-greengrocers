import './styles/reset.css'
import './styles/index.css'

import { useState } from 'react'
import Cart from './components/cart'
import Store from './components/Store'

export default function App() {
  const [cartItems, setCartItems] = useState([])

  return (
    <>
      <Store cartItems={cartItems} setCartItems={setCartItems}/>
      <Cart cartItems={cartItems} setCartItems={setCartItems}/>
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
