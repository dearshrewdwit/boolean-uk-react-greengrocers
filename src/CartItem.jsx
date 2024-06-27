import React from "react";

export default function CartItem(props) {
  return (
    <li>
      <img
        className="cart--item-icon"
        src={props.item.image}
        alt={props.item.name}
      />
      <p>{props.item.name}</p>
      <button
        className="quantity-btn remove-btn center"
        onClick={() => props.removeFromCart(props.item)}
      >
        -
      </button>
      <span className="quantity-text center">{props.item.quantity}</span>
      <button
        className="quantity-btn add-btn center"
        onClick={() => props.addToCart(props.item)}
      >
        +
      </button>
    </li>
  );
}
