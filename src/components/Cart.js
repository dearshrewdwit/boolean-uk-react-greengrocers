import React from 'react';
import CartItem from './CartItem';

function Cart({ items, updateQuantity, removeItem }) {
  return (
    <ul className="item-list cart--item-list">
      {items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          updateQuantity={updateQuantity}
          removeItem={removeItem}
        />
      ))}
    </ul>
  );
}

export default Cart;