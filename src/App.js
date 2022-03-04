import './styles/reset.css'
import './styles/index.css'

import initialStoreItems from './store-items'

import { useState } from 'react'
import StoreItem from './components/StoreItem'
import StoreItemList from './components/StoreItemList'

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
  // Setup state here...
  const [items, setItems] = useState(initialStoreItems)
  const [cartItems, setCartItems] = useState([])
  let totalCartPrice = 0
  // const [count, setCount] = useState(1)
  const addItemToCart = item => {
    const itemsCopy = [...cartItems]
    if(!itemsCopy.includes(item)) {
      item.quantity = 1
      itemsCopy.push(item)
    } else {
      item.quantity += 1
    }
    setCartItems(itemsCopy)
    console.log(item)
  }
  // const removeItemCart2 = item => {
  //   console.log(item)
  //   const itemsCopy = cartItems.filter(itemElement => {
  //     if(itemElement === item) {
  //       const itemCopy = {...item}
  //       itemCopy.item.quantity =
  //       return itemCopy
  //     } else {
  //       return itemElement
  //     }
  //   })
  //   setCartItems(itemsCopy)
  // }
  const removeItemCart = item => {
    const itemsCopy = [...cartItems]
    if(itemsCopy.includes(item)){
      if(item.quantity === 1) {
        item.quantity -= 1
        itemsCopy.pop(item)
      } else {
        item.quantity -= 1
      }
    }
    setCartItems(itemsCopy)
    // if(item.quantity === 0) {
    //   item.quantity = 0
    // } else {
    //   item.quantity -= 1
    // }
    // item.quantity -= 1
    console.log(item)
    // setCartItems(cartItems)
  }
  const itemInCart = item => {
    console.log(item)
    const itemsCopy = cartItems.map(itemElement => {
      if(itemElement === item) {
        const itemCopy = {...item}
        itemCopy.quantity = +2
        return itemCopy
      } else {
        return itemElement
      }
    })
    setCartItems(itemsCopy)
  } 
  // const itemInCart = item => {
  //   console.log(item)
  //   const itemsCopy = cartItems.map(itemElement => {
  //     if(itemElement === item) {
  //       const itemCopy = {...item}
  //       itemCopy.quantity = 1
  //       return itemCopy
  //     } else {
  //       return itemElement
  //     }
  //   })
  //   setCartItems(itemsCopy)
  // } 
  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {items.map(item => {
            return (
              <li>
                <div class="store--item-icon">
                  <img
                    src={`/assets/icons/${item.id}.svg`}
                    alt={`${item.name}`}
                  />
                </div>
                <button onClick={() => addItemToCart(item)}>
                  Add to cart
                </button>
              </li>
            )
          })}
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {/* Wrtite some code here... */}
            {cartItems.map(cartItem => {
              totalCartPrice += cartItem.price * cartItem.quantity
              return (
                <li>
                  <img
                    class="cart--item-icon"
                    src={`assets/icons/${cartItem.id}.svg`}
                    alt={`${cartItem.name}`}
                  />
                  <p>{`${cartItem.name}`}</p>
                  <button onClick={() => removeItemCart(cartItem)} class="quantity-btn remove-btn center">-</button>
                  <span class="quantity-text center">{cartItem.quantity}</span>
                  <button onClick={() => addItemToCart(cartItem)} class="quantity-btn add-btn center">+</button>
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
            <span className="total-number">£{totalCartPrice}</span>
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
