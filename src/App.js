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
  const [cart, setCart] = useState([
    /* {
      id: '002-carrot',
      name: 'carrot',
      price: 0.35,
      quantity: 1
    },
    {
      id: '006-bananas',
      name: 'bananas',
      price: 0.35,
      quantity: 1
    } */
  ])
  const [total, setTotal] = useState(0.0)

  console.log('the cart is: ', cart)

  // Check if item is already in cart
  // <StoreItem/> Will need to access addToCart via props
  // If not in cart: add to cart state

  const addToCart = targetStoreItem => {
    console.log('Add to cart: ', targetStoreItem)
    // Check if item is already in cart
    let alreadyInCart = false
    cart.forEach(cartItem => {
      if (cartItem.id === targetStoreItem.id) {
        console.log(targetStoreItem.name, ' is already in cart!')
        alreadyInCart = true
      }
    })

    // Executes if the item is already in cart
    if (alreadyInCart) {
      const cartUpdatedQuantity = cart.map(cartItem => {
        // For the target item, increase the quantity by 1
        if (cartItem.id === targetStoreItem.id) {
          const updatedcartItem = { ...cartItem }
          updatedcartItem.quantity += 1
          console.log('updatedCartItem: ', updatedcartItem)
          return updatedcartItem
        } else {
          return cartItem
        }
      })
      setCart(cartUpdatedQuantity)
    } else {
      // If the item is NOT in cart
      targetStoreItem.quantity = 1
      setCart([...cart, targetStoreItem])
    }
  }

  return (
    <>
      <Store store={store} setStore={setStore} addToCart={addToCart} />
      <Cart cart={cart} />
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
