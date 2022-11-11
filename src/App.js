import './styles/reset.css'
import './styles/index.css'

import Store from './components/Store'

import {useState} from 'react'

export default function App() {
  const [cartItems, setCartItems] = useState([])

const addOneToQuantity = (item) => {
    const updatedCart = cartItems.map((cartItem) => {
      if (item.name === cartItem.name) {
      return {...cartItem, quantity: ++cartItem.quantity }
      }
      return cartItem
    })
    setCartItems(updatedCart)
}

const removeOneQuantity = (item) => {
  if (item.quantity <= 1) {
    const cartWithoutRemoved = cartItems.filter(function(cartItems) {
      return item !== cartItems
        })
      setCartItems(cartWithoutRemoved) 

  } else {  
    const updatedCart = cartItems.map((cartItem) => {
      if (item.name === cartItem.name) {
      return {...cartItem, quantity: --cartItem.quantity }
      }
      return cartItem
    })
    setCartItems(updatedCart)
  }
}

const totalPrice = () => {
  let totalPrice = 0

  for (let item of cartItems) {
    totalPrice += item.price * item.quantity
  }

  const currencyFormatter = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
  });

  return currencyFormatter.format(totalPrice)
}

  return (
    <>
      <Store addOneToQuantity={addOneToQuantity} cartItems={cartItems} setCartItems={setCartItems} />
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {
            cartItems.map((item, index) => {
              return (
                <li key={index}>
                  <img
                    class="cart--item-icon"
                    src={`/assets/icons/${item.id}.svg`}
                    alt={item.name}
                  />
                  <p>{item.name}</p>
                  <button class="quantity-btn remove-btn center" onClick={ () => removeOneQuantity(item)}>-</button>
                  <span class="quantity-text center">{item.quantity}</span>
                  <button class="quantity-btn add-btn center" onClick={ () => addOneToQuantity(item)}>+</button>
                </li>
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
            <span className="total-number">{totalPrice()}</span>
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
