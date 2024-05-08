import React from 'react';

function CartItem({ item, updateQuantity, removeItem }) {
  const handleQuantityChange = (e) => {
    const quantity = parseInt(e.target.value);
    updateQuantity(item.id, quantity);

    if (quantity === 0) {
      removeItem(item.id);
    }
  };

  return (
    <li>
      <div className="cart--item-icon">
        <img src={`icons/${item.id}.svg`} alt={item.name} />
      </div>
      <p>{item.name}</p>
      <input
        type="number"
        value={item.quantity}
        onChange={handleQuantityChange}
      />
    </li>
  );
}

export default CartItem;