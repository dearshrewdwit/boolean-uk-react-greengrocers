import './styles/reset.css'
import './styles/index.css'
import initialStoreItems from './store-items'
import StoreItem from './components/StoreItem'
import CartItem from './components/CartItem'
import { useState } from 'react'
import { Total } from './components/Total'

export default function App() {
  const [storeItems, setStoreItem] = useState(initialStoreItems)
  const [cartItems, setCartItems] = useState([])

  function AddToCart(storeItem) {
    //if item already in the cart
    const found = cartItems.find(item => item.id === storeItem.id)
    if (found) {
      const updatedCartItems = cartItems.map(clickedItem => {
        if (clickedItem.id === storeItem.id) {
          return { ...clickedItem, quantity: clickedItem.quantity + 1 }
        }
      })

      setCartItems(updatedCartItems)
      return
    } else {
      //if no item found in the cart
      const newCartItem = { ...storeItem, quantity: 1 }
      setCartItems([...cartItems, newCartItem])
    }
  }

  const increase = item => {
    const updatedCart = cartItems.map(cartItem => {
      console.log(item)
      if (item.id === cartItem.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 }
      }
      return cartItem
    })
    setCartItems(updatedCart)
  }
  // condition to remove 0 quantity from the cart
  const decrease = item => {
    if (item.quantity <= 1) {
      const filteredCart = cartItems.filter(function (cartItems) {
        return item !== cartItems
      })
      setCartItems(filteredCart)
      //remove 1 from the quantity
    } else {
      const updatedCart = cartItems.map(cartItem => {
        if (item.name === cartItem.name) {
          return { ...cartItem, quantity: cartItem.quantity - 1 }
        }
        return cartItem
      })
      setCartItems(updatedCart)
      console.log('updatedCart:', updatedCart)
    }
  }
  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {storeItems.map(item => (
            <StoreItem item={item} key={item.id} AddToCart={AddToCart} />
          ))}
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {cartItems.map(item => (
              <CartItem
                item={item}
                key={item.id}
                increase={increase}
                decrease={decrease}
              />
            ))}
          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">
              {`£`}
              <Total cartItems={cartItems} />
            </span>
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
