
import React from 'react';

import '../styles/reset.css';
import '../styles/index.css';

const CartItem = ({ item, index, setCart, cart, setTotal, total }) => {
  const removeFromCart = () => {
    // Add logic to remove the item from the cart
  };

  const increaseQuantity = () => {
    // Add logic to increase the quantity of the item in the cart
  };

  const decreaseQuantity = () => {
    // Add logic to decrease the quantity of the item in the cart
  };

  return (
    <li key={index}>
      <img className="cart--item-icon" src={item.image} alt={item.name} />
      <p>{item.name}</p>
      <button onClick={decreaseQuantity} className="quantity-btn remove-btn center">
        -
      </button>
      <span className="quantity-text center">{item.quantity}</span>
      <button onClick={increaseQuantity} className="quantity-btn add-btn center">
        +
      </button>
    </li>
  );
};

export default CartItem;
