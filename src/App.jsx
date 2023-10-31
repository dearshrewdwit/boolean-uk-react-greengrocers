import './styles/reset.css'
import './styles/index.css'

import initialStoreItems from './store-items'
import { useState } from 'react'

//importing the jsx
import Header from './components/Header'
import Main from './components/Main'

/*
 Here's what a store item should look like
 {
 id: '001-beetroot',
 name: 'beetroot',
 price: 0.35
 }

 What should a cart item look like? 🤔
 */


export default function App() {
  // Setup state here...
  const [storeItem,setStoreItem] = useState(initialStoreItems)
  const [cartItem , setCartItem] = useState([])

  return (
    <>
      <Header storeItem={storeItem} cartItem={cartItem}
      setCartItem={setCartItem}/>
      <Main cartItem={cartItem} setCartItem={setCartItem}/>
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
