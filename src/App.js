import './styles/reset.css'
import './styles/index.css'
import { useState } from 'react'
import React from 'react'

import initialStoreItems from './store-items'
import Store from './components/Store.js'
import Cart from './components/Cart.js'

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
  const [store, setStore] = useState(initialStoreItems)
  const [cart, setCart] = useState([])


  // making a new array of a cart by adding items
  const addNewItem = (item) => {
    setCart([...cart, item])
    console.log("hello".item)
  }

  // updating items
  const onIncreaseClick = (target) => {
    console.log("Hi", target)
    const updatedQuantity = cart.map(item => item.id === target.id ? { ...item, quantity: item.quantity + 1 } : item)
    setCart(updatedQuantity)
  };

  // removing items
  const onDecreaseClick = (target) => {
    if (target.quantity === 1) {
      const updatedQuantity = cart.filter(item => item.id !== target.id)
      setCart(updatedQuantity)
    } else {
      const updatedQuantity = cart.map(item => item.id === target.id ? { ...item, quantity: item.quantity - 1 } : item)
      setCart(updatedQuantity)
    }
  }
  // below is making sure that duplicates of the same item does not get added to the cart
  // function count(item) {
  //   return cart.some(element => element.id === item.id)
  // }

  // function adder(item) {
  //   if (count(item)) {
  //     onIncreaseClick(item)
  //   } else {
  //     addNewItem(item)
  //   }
  // }

  // below is a combination about both of the above functions in one
  function addToCart(item) {
    cart.some(element => element.id === item.id) ? onIncreaseClick(item) : addNewItem(item)
  }

  // adding all of the items together multiplied by the total amount in the cart
  const total = cart.reduce((accumulator, current) => accumulator + (current.price * current.quantity), 0)
  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {/* rendering the store */}
          {store.map(items => {
            return (
              <Store
                addToCart={addToCart}
                items={items}
              />
            )
          })
          }
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {cart.map(addedItems => {
              console.log(addedItems)
              // increase/decreasing the quantity in a cart
              return (
                <Cart
                  onDecreaseClick={onDecreaseClick}
                  onIncreaseClick={onIncreaseClick}
                  addedItems={addedItems}
                />
              )
            })
            }
          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            {/* toFixed is used to implement only 2 digits to the penny*/}
            <span className="total-number">£ {total.toFixed(2)}</span>
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
