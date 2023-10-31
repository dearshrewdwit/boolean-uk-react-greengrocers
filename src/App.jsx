import './styles/reset.css'
import './styles/index.css'
import Header from './Components/Header.jsx'
import Main from './Components/Main.jsx'

import { useState } from 'react'


export default function App() {
  const [cartItems, setCartItems] = useState([])

  const addCartItem = (itemClicked) => {
    if (cartItems.some((item) => item.name === itemClicked.name)) {
      const foundItem = cartItems.find(item => item.id === itemClicked.id)
      foundItem.quantity += 1
      setCartItems([...cartItems])
    } else {
      const newItem = {
        ...itemClicked,
        quantity: 1,
      }
      setCartItems([...cartItems, newItem])
    }
  }

  return (
    <>
    <Header addCartItem={addCartItem} />
      <Main cartItems={cartItems}
            setCartItems={setCartItems} />
      </>
  )
}

