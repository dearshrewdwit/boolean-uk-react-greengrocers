import { useState } from "react"
import App from "./App"

function Cart(props) {
    const cartItemList = props.cartItems

  return (
    <>
      {cartItemList.map((cartFruit, index) => (
        <li key={index}>
          <img src={`./assets/icons/${cartFruit.id}.svg`}></img>
          <p>{cartFruit.name}</p>
          <button onClick={() => setCartQuantity(cartQuantity - 1)}>-</button>
          <p>{cartFruit.quantity}</p>
          <button onClick={() => props.handleQuantity(cartFruit)}>+</button>
        </li>
      ))}
    </>
  )
}

export default Cart
