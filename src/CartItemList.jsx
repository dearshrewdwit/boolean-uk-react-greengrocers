import React from "react";
import CartItem from "./CartItem";

export default function CartItemList({ items, removeFromCart, addToCart }) {
  return (
    <ul className="item-list cart--item-list">
      {items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          removeFromCart={removeFromCart}
          addToCart={addToCart}
        />
      ))}
    </ul>
  );
}
