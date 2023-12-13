import './styles/reset.css'
import './styles/index.css'

import initialStoreItems from './store-items'
import { useState } from 'react'
import Store from './components/storeItem'
import Cart from './components/cartItem'
import Footer from './components/footer'

/*
 Here's what a store item should look like
 {
 id: '001-beetroot',
 name: 'beetroot',
 price: 0.35
 }

 What should a cart item look like? 🤔
 */

// console.log(initialStoreItems)

export default function App() {
  // Setup state here...
  const [store, setStoreItems] = useState(initialStoreItems)
  const [cart, setCart] = useState([])

  const capitalize = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase()

  const fruits = ["apple", "apricot", "bananas", "berry", "blueberry"]
  const filteredForFruits = store.filter(item => fruits.includes(item.name))
  const vegetables = ["beetroot", "carrot", "avocado", "bell pepper", "eggplant"]
  const filteredForVegetables = store.filter(item => vegetables.includes(item.name))

  return (
    <>
      <Store storeItems={store} />
      <Cart cartItems={cart} />
      <Footer />
    </>
  )
}
