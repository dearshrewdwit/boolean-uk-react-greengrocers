import { useState } from 'react'
import './styles/reset.css'
import './styles/index.css'
import StoreSection from './StoreItems'

// import initialStoreItems from './store-items'
// import storeItems from './StoreItems.js'
import InsideCart from './InsideCart.js'


export default function App() {
  // Setup state here...
  const cart = [];
  const [cartItem, setCartItem] = useState(cart);

  return (
    <>
      <StoreSection setCartItem={setCartItem}/>

      <InsideCart cart={cart} />

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