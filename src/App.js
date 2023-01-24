import './styles/reset.css'
import './styles/index.css'

import { useState } from 'react'
import initialStoreItems from './store-items'
import StoreItem from './StoreItem'
import CartItem from './CartItem'
import storeItems from './store-items'
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
  // const [storeItems, setStoreItems] = useState(initialStoreItems)
  const [cartItems, setCartItems] = useState([])
  const [storeItems, setStoreItems] = useState(initialStoreItems)

  const addItemCart = targetItem => {
    const foundItemINstore = storeItems.find(itemInstore => {
      return itemInstore.id === targetItem.target.id
    })
    const itemInCart = cartItems.find(itemInCart => {
      return itemInCart.id === targetItem.target.id
    })
    if (itemInCart) {
      itemInCart.quantity++
      setCartItems([...cartItems])
    } else {
      let newCartItem = { ...foundItemINstore, quantity: 1 }
      setCartItems([...cartItems, newCartItem])
    }
  }

  // setStoreItems(addItemCart)
  const CalculateCartTotal = () => {
    let currentTotal = 0
    cartItems.map(itemInCart => {
      currentTotal += itemInCart.quantity * itemInCart.price
    })
    console.log(currentTotal)
    return currentTotal.toFixed(2)
  }

  const increaseItemQuantity = itemid => {
    console.log(itemid)
    //find the item in cart 
    const itemInCart = cartItems.find(itemInCart => {
      return itemInCart.id === itemid
    })
    itemInCart.quantity++
    setCartItems([...cartItems])
  }

  const decrementItemQuantity = itemid => {
    const itemInCart = cartItems.find(itemInCart => {
      return itemInCart.id === itemid
    })
    itemInCart.quantity--
    if (itemInCart.quantity === 0) {
      const reduceCart = cartItems.filter(itemInCart => {
        return itemInCart.id !== itemid
      })
      setCartItems([...reduceCart])
    } else {
      setCartItems([...cartItems])
    }
  }

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {/* Wrtite some code here... */}
          {storeItems.map(itemInstore => (
            <StoreItem
              id={itemInstore.id}
              name={itemInstore.name}
              price={itemInstore.price}
              addItemCart={addItemCart}
            />
          ))}
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {/* Wrtite some code here... */}
            {cartItems.map(itemInCart => (
              <CartItem
                // key={itemInCart.key}
                id={itemInCart.id}
                name={itemInCart.name}
                price={itemInCart.price}
                quantity={itemInCart.quantity}
                addItemCart={addItemCart}
                increaseItemQuantity={increaseItemQuantity}
                decrementItemQuantity={decrementItemQuantity}
              />
            ))}
          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">£{CalculateCartTotal()}</span>
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
