import { useState } from "react";
import CartItem from "./CartItem";

export default function MainBody({updateCart}) {

    return (
        <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {/* <CartItem item={item} numItemsInCart={numItemsInCart} setNumItemsInCart={setNumItemsInCart}/> */}
          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">£0.00</span>
          </div>
        </div>
      </main>
    )
}