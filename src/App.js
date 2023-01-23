import { useState } from 'react'
import './styles/reset.css'
import './styles/index.css'
import StoreSection from './StoreItems'

import cart from './cart-items.js'
import storeItems from './StoreItems.js'
import InsideCart from './InsideCart.js'


export default function App() {
  // Setup state here...

  const [cartItem, setCartItem] = useState(0);

  return (
    <>
      <StoreSection setCartItem={setCartItem} cartItem={cartItem} cart={cart}/>

      <InsideCart cart={cart} cartItem={cartItem} setCartItem={setCartItem}/>

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