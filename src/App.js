import { useState } from 'react'
import './styles/reset.css'
import './styles/index.css'
import StoreSection from './StoreItems'

// import cart from './cart-items.js'
import InsideCart from './InsideCart.js'
import Acknowledgements from './Acknowledgements.js'


export default function App() {
  // Setup state here...

  const [cart, setCartItem] = useState([]);

  return (
    <>
      <StoreSection cart={cart} setCartItem={setCartItem} />

      <InsideCart cart={cart} setCartItem={setCartItem} />

      {/* <InsideCart cart={cart} cartItem={cartItem} setCartItem={setCartItem} /> */}

      <Acknowledgements />

    </>
  )
}