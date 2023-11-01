import './styles/reset.css'
import './styles/index.css'

import initialStoreItems from './store-items'
import { useState } from 'react'

// IMPORT COMPONENTS
import Header from './components/Header'
import Main from './components/Main'

export default function App() {

  const [store, setStore] = useState(initialStoreItems)
  const [cartItem, setCartItem] = useState([])

  // EXTENSION 1 
  // const [itemType, setItemType] = useState([])


  return (
    <>
      <Header store ={store} cartItem={cartItem} setCartItem={setCartItem} />
      {/* <div>
        <h2>Filter</h2>
        <button onClick={() => y()}>Fruit</button>
        <button>Vegetables</button>
      </div> */}
      <Main cartItem={cartItem} setCartItem={setCartItem} />
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
