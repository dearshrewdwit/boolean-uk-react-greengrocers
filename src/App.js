import './styles/reset.css'
import './styles/index.css'

import { useState } from 'react'
import initialStoreItems from './store-items'
import Store from './Store'
import Cart from './Cart'

/*
Here's what a store item should look like
{
  id: '001-beetroot',
  name: 'beetroot',
  price: 0.35
}

What should a cart item look like? 🤔
*/

// console.log('INITIAL from App.js: ', initialStoreItems)

export default function App() {
  // STATES
  const [store, setStore] = useState(initialStoreItems)
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0.0)

  // Check if item is already in cart

  // Both the <StoreItem/> and <Cart/> components will need to access the cart state

  // If not in cart: add to cart state
  const addToCart = storeItem => {
    setCart(
      cart.map(targetStoreItem => {
        if (targetStoreItem === storeItem) {
          console.log("It's the same")
          // If this condition is true, then the item is already in cart
          // TODO: Call a function that increments the quantity
        } else {
          // Else: the item isn't already in the cart
          return { ...cart, targetStoreItem }
        }
      })
    )
  }

  // If in cart, increment quantity:
  // cart.ITEM_TO_INCREMENT
  // setCart(updatedCart)

  return (
    <>
      <Store store={store} setStore={setStore} addToCart={addToCart} />
      <Cart addToCart={addToCart} />
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
