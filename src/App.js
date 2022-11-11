import './styles/reset.css'
import './styles/index.css'

import Store from './components/Store'
import Cart from './components/Cart'

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

  return (
    <>
      <Store addOneToQuantity={addOneToQuantity} cartItems={cartItems} setCartItems={setCartItems} />
      <Cart cartItems={cartItems} addOneToQuantity={addOneToQuantity} removeOneQuantity={removeOneQuantity}/>
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
