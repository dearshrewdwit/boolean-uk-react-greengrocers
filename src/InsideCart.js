import { useState } from "react";

import Total from "./Total.js";

function InsideCart(props) {

  return (
    <main id="cart">
      <h2>Your Cart</h2>
      <div className="cart--item-list-container">
        <ul className="item-list cart--item-list">
          {/* Wrtite some code here... */}
          { props.cart.map((item) =>
              <li>
                <img
                  className="cart--item-icon"
                  src={`/assets/icons/${item.id}.svg`}
                  alt={item.name}
                />
                <p>{item.name}</p>
                <button className="quantity-btn remove-btn center">-</button>
                <span className="quantity-text center">1</span>
                <button className="quantity-btn add-btn center">+</button>
              </li>
            )}
            
            {console.log("cart length:", props.cart.length)}
        </ul>
      </div>

      <Total />
    </main>
  )

}

export default InsideCart;