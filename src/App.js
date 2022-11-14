import './styles/reset.css'
import './styles/index.css'

import StoreItemList from './StoreItemList'
import initialStoreItems from './store-items'
import { useState } from 'react'
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

function App() {
  // Setup state here...
  const [storeItems, setStoreItems] = useState(initialStoreItems)
  const [cartItems, setCartItems] = useState([])

  function addToCart(itemToAdd) {
    // using the find() to find the first item that matches my itemToadd.id
    if (cartItems.find(item => item.id === itemToAdd.id)) {
      // check 2.1 immutable state slides 12 to 14. implement here

      const updatedCart = cartItems.map(function (item) {
        if (item.id === itemToAdd.id) {
          return { ...item, quantity: item.quantity + 1 }
        } else {
          return item
        }
      })
      setCartItems(updatedCart)
      console.log('item already in cart', cartItems)
    } else {
      const itemToAddCopy = { ...itemToAdd, quantity: 1 }
      setCartItems([...cartItems, itemToAddCopy])
    }
  }

  // define onclick for the increment and decrement buttons in the cart
  // then this fucntion need on the onclick event on the increase and decrease button.

  // const updatedArray = originalArray.map(function (item) {
  //   if (item === theItemIWantToUpdate) {
  //     return { ...item, propertyToUpdate: newValue }
  //   } else {
  //     // item shouild not be updated because it's not the one we want to update
  //     return item
  //   }
  // })
  // // set state
  // setState(updatedArray)

  function cartQuantityIncrease(itemToIncrease) {
    console.log('increase button clicked')

    const increaseQuantity = cartItems.map(function (item) {
      if (item.id === itemToIncrease.id) {
        return { ...item, quantity: ++item.quantity }
      } else {
        return item
      }
    })
    setCartItems(increaseQuantity)
  }

  function cartQuantityDecrease(itemToDecrease) {
    console.log('Decrease button clicked')
    // refer to addToCart logic. & refer to the updateCart
    const increaseQuantity = cartItems.map(function (item) {
      if (item.id === itemToDecrease.id) {
        return { ...item, quantity: --item.quantity }
      } else {
        return item
      }
    })
    setCartItems(increaseQuantity)
  }

  // write two functions => attempt to combine.
  // write the total amount function
  // item. price * quanity
  return (
    <>
      <StoreItemList
        storeItems={storeItems}
        /* below i am passing the function into my StoreItemList */
        addToCart={addToCart}
        // need to be passed down to storeItem.js via props.
        //
      />
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {cartItems.map(item => {
              return (
                <li key={item.id}>
                  <img
                    class="cart--item-icon"
                    src={`/assets/icons/${item.id}.svg`}
                    alt={item.name}
                  />
                  <p>{item.name}</p>
                  <button
                    onClick={() => cartQuantityDecrease(item)}
                    class="quantity-btn remove-btn center"
                  >
                    -
                  </button>
                  <span class="quantity-text center">{item.quantity}</span>
                  <button
                    onClick={() => cartQuantityIncrease(item)}
                    class="quantity-btn add-btn center"
                  >
                    +
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">£0.00</span>
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
export default App
