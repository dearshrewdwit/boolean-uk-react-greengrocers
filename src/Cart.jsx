import React from "react";
import CartItemList from "./CartItemList";
import Total from "./Total";

export default function Cart({ items, removeFromCart, addToCart, totalPrice }) {
  return (
    <div>
      <h2>Your Cart</h2>
      <div className="cart--item-list-container">
        <CartItemList
          items={items}
          removeFromCart={removeFromCart}
          addToCart={addToCart}
        />
      </div>
      <Total totalPrice={totalPrice} />
    </div>
  );
}
