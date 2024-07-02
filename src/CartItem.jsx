import React from 'react';

function CartItem({ item, updateQuantity }) {
  return (
    <li>
      <img className="cart--item-icon" src={`/assets/icons/${item.id}.svg`} alt={item.name} />
      <p>{item.name}</p>
      <button className="quantity-btn remove-btn center" onClick={() => updateQuantity(item.id, -1)}>-</button>
      <span className="quantity-text center">{item.quantity}</span>
      <button className="quantity-btn add-btn center" onClick={() => updateQuantity(item.id, 1)}>+</button>
    </li>
  );
}

export default CartItem;
