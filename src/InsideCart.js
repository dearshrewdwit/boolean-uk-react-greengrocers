import { useState } from "react";

import Total from "./Total.js";

function InsideCart(props) {

  return (
    <main id="cart">
      <h2>Your Cart</h2>
      <div className="cart--item-list-container">
        <ul className="item-list cart--item-list">
          {/* Wrtite some code here... */}
          {props.cart.map((item) =>
            <li key={item.id}>
              <img
                className="cart--item-icon"
                src={`/assets/icons/${item.id}.svg`}
                alt={item.name}
              />
              <p>{item.name}</p>
              <button className="quantity-btn remove-btn center"
                onClick={() => {
                  console.log("item when - button clicked:", item)
                  if (item.quantity <= 0) {
                    console.log('There are 0', item.name, 'left')
                    //remove the cart item from props.cart, and update setCart
                    const reducedCart = props.cart.filter(item => item.quantity !== 0);
                    props.setCartItem(reducedCart)
                  
                    console.log('cart should not have item with quantity 0', reducedCart)
                  } else {
                    item.quantity--
                  props.setCartItem(...props.cart)
                  }
                  // update the cart
                  // props.setCartItem(...props.cart)
                  console.log("props.cart after -", props.cart)
                }}
              >-</button>
              <span className="quantity-text center">{item.quantity}</span>
              <button className="quantity-btn add-btn center"
                onClick={() => {
                  console.log("item when + button clicked:", item)
                  item.quantity++

                  // update the cart
                  props.setCartItem(
                    ...props.cart
                  )

                  console.log("props.cart after +", props.cart)
                }}
              >+</button>
            </li>
          )}
          
        </ul>
      </div>

      <Total />
    </main>
  )

}

export default InsideCart;