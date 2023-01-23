import { useState } from 'react'
import './styles/reset.css'
import './styles/index.css'
import StoreSection from './StoreItems'

// import cart from './cart-items.js'
import InsideCart from './InsideCart.js'
import Total from "./Total.js";

import Acknowledgements from './Acknowledgements.js'


export default function App() {
  // Setup state here...

  const [cart, setCartItem] = useState([]);
  const [totalCart, setTotalCart] = useState(0);

  function handleTotal() {
    cart.map((item) => {
      let total = 0
      let totalOfEachItem = item.price * item.quantity
      console.log("totalOfEachItem", totalOfEachItem)
      total += totalOfEachItem
     console.log("total after calculation", total)

      setTotalCart(total.toFixed(2))

    })
  }

  return (
    <>
      <StoreSection cart={cart} setCartItem={setCartItem} handleTotal={handleTotal} />

      <InsideCart id="cart" cart={cart} setCartItem={setCartItem} handleTotal={handleTotal} />
      <Total id="cart" cart={cart} totalCart={totalCart} />

      <Acknowledgements />

    </>
  )
}