import './styles/reset.css'
import './styles/index.css'

import { useState } from 'react'
import StoreItem from './StoreItem'
import Cart from './Cart'

import initialStoreItems from './store-items'

/*
 Here's what a store item should look like
 {
 id: '001-beetroot',
 name: 'beetroot',
 price: 0.35
 }

 What should a cart item look like? 🤔

 For reference for myself: 
 {
  id: '001-beetroot',
  name: 'beetroot',
  price: 0.35,
  amount: 5
 }
 */

export default function App() {
  const [cart, setCart] = useState([])
  const [storeItems, setStoreItems] = useState(initialStoreItems)

  // Check if item is already in cart
  const countItemAppearences = (item) => {
    const filteredList = cart.filter(((currentItem) =>
      currentItem.id === item.id
    ))
    return filteredList.length
  }

  const addToCart = (item) => {
    if(countItemAppearences(item) === 0)
      setCart([...cart, {
        id: item.id,
        name: item.name,
        price: item.price,
        amount: 1
      }])

    else {
      const updatedCart = cart.map((currentItem) => 
        currentItem.id === item.id ? {...currentItem, amount:currentItem.amount + 1} : currentItem
      ) 
      setCart(updatedCart)
    }
  }

  const removeFromCart = (item) => {
    if(countItemAppearences(item) === 1 && item.amount <= 1)
    {
      const updatedCart = cart.filter((currentItem) =>
        currentItem.id !== item.id
      )
      setCart(updatedCart)
    }
    else {
      const updatedCart = cart.map((currentItem) => 
      currentItem.id === item.id ? {...currentItem, amount:currentItem.amount - 1} : currentItem
    ) 
    setCart(updatedCart)
    }
  }

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {storeItems.map((storeItem) =>
            <StoreItem 
              storeItem={storeItem}
              addToCart={addToCart}
              cart={cart}
            />
          )}
        </ul>
      </header>
      <Cart
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
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
