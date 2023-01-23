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

  // console.log('the cart is: ', cart)

  // Check if item is already in cart
  // <StoreItem/> Will need to access addToCart via props
  // If not in cart: add to cart state

  const incrementQuantity = id => {
    console.log('ID: ', id)
    cart.forEach(cartItem => {
      if (cartItem.id === id) {
        cartItem.quantity += 1
      }
    })
    setCart([...cart])
  }

  const decrementQuantity = id => {
    console.log('ID: ', id)
    cart.forEach((cartItem, index) => {
      if (cartItem.id === id) {
        cartItem.quantity -= 1
        if (!cartItem.quantity) {
          cart.splice(index, 1)
        }
      }
    })
    setCart([...cart])
  }
  const addToCart = newCartItem => {
    console.log('Add to cart: ', newCartItem)
    // changing quantity
    if (!newCartItem.quantity) {
      newCartItem.quantity = 1
      cart.push(newCartItem)
      // console.log('HELLO!!', newCartItem)
    } else {
      cart.forEach(cartItem => {
        if (cartItem.id === newCartItem.id) {
          // console.log(newCartItem.name, ' is already in cart!')
          cartItem.quantity += 1
        }
      })
    }
    // console.log('CART: ', cart)
    setCart([...cart])

    // LONG VERSION
    // Executes if the item is already in cart
    // if (alreadyInCart) {
    /* const cartUpdatedQuantity = cart.map(cartItem => {
      // For the target item, increase the quantity by 1
      if (cartItem.id === storeItem.id) {
        // const updatedcartItem = { ...cartItem }
        // updatedcartItem.quantity += 1
        cartItem.quantity += 1

        console.log('updatedCartItem: ', cartItem)
        return cartItem
      } else {
        storeItem.quantity = 1
        return cartItem
      }
    }) */

    // } else {
    // If the item is NOT in cart
    // storeItem.quantity = 1
    // setCart([...cart, storeItem])
    // }
  }

  return (
    <>
      <Store store={store} setStore={setStore} addToCart={addToCart} />
      <Cart
        cart={cart}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
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
