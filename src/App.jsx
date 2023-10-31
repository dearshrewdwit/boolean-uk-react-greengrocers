import './styles/reset.css'
import './styles/index.css'

import initialStoreItems from './store-items'
import Header from './components/Header'
import Main from './components/Main'
import {useState} from 'react'


/*
 Here's what a store item should look like
 {
 id: '001-beetroot',
 name: 'beetroot',
 price: 0.35
 }

 What should a cart item look like? 🤔
 */

console.log(initialStoreItems)

export default function App() {
  const [storeItems] = useState(initialStoreItems)
  const [cartItems, setCartItems] = useState([])
  const [filteredItems, setFilteredItems] = useState(storeItems)
  // Setup state here...

  return (
    <>
      <Header
        storeItems={storeItems}
        cartItems={cartItems}
        setCartItems={setCartItems}
        filteredItems={filteredItems}
        setFilteredItems={setFilteredItems}
      />
      <Main 
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
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
