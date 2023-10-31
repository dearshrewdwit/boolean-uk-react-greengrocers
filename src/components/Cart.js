import React, { useState } from "react";

function CartItem({ item }) {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (change) => {
    const newQuantity = Math.max(quantity + change, 0); // Ensure quantity doesn't go below 0
    if (newQuantity === 0) {
      // If the quantity becomes 0, remove the item from the cart
      // You can call a function here to remove the item from the cart state in your parent component
    } else {
      // If the quantity is greater than 0, update the quantity in the cart
      setQuantity(newQuantity);
    }
  };

  return (
    <li>
      <img
        className="cart--item-icon"
        src={`assets/icons/${item.id}.svg`}
        alt={item.name}
      />
      <p>{item.name}</p>
      <button
        className="quantity-btn remove-btn center"
        onClick={() => handleQuantityChange(-1)}
      >
        -
      </button>
      <span className="quantity-text center">{quantity}</span>
      <button
        className="quantity-btn add-btn center"
        onClick={() => handleQuantityChange(1)}
      >
        +
      </button>
    </li>
  );
}

export default CartItem;
