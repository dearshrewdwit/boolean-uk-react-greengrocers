import './styles/reset.css'
import './styles/index.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

import initialStoreItems from './store-items'
import { useState } from 'react'


export default function App() {
  // Setup state here...
  const [cartItems, setCartItems] = useState([])
  const [storeItems, setStoreItems] = useState(initialStoreItems)
  const [filter, setFilter] = useState('')

  return (
    <>
      <Header initialStoreItems={initialStoreItems} cartItems={cartItems} setCartItems={setCartItems} storeItems={storeItems} setStoreItems={setStoreItems} filter={filter} setFilter={setFilter}/>
      <Main cartItems={cartItems} setCartItems={setCartItems}/>
      <Footer />
    </>
  )
}
