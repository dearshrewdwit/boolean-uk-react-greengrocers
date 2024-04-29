import './styles/reset.css'
import './styles/index.css'
import { useState } from 'react'

// import initialStoreItems from './store-items'

import Store from './Components/Store'
import Cart from './Components/Cart'
import Total from './Components/Total'

export default function App() {  
  const [cartProds, setCartProds] = useState([])


  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <button>Sort by name</button>
        <button style={{marginLeft: '10px' }}>Sort by Type</button>
        <button style={{marginLeft: '10px' }}>Sort by price</button>
        <Store  cartProds={cartProds} setCartProds={setCartProds} />
      </header>

      <main id="cart">
        <Cart cartProds={cartProds} setCartProds={setCartProds} />
        <Total cartProds={cartProds} />
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
