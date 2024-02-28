import './styles/reset.css'
import './styles/index.css'

import { useState } from 'react'
import StoreItem from './StoreItem'
import CartItem from './CartItem'

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

console.log(initialStoreItems)

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

  const calculateTotal = () => {
    let total = 0.0
    for(let item in cart) {
      console.log("price ", cart[item])
      total += cart[item].price * cart[item].amount
    }
    return total
  }

  const getTotal = () => {
    const total = calculateTotal()
    return `£${total.toFixed(2)}`
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
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {cart.map((cartItem) =>
              <CartItem 
              cartItem={cartItem}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              />
            )}
          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">{getTotal()}</span>
          </div>
        </div>
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
