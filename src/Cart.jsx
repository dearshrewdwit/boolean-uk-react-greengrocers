import React from 'react';
import CartItem from './CartItem';

function Cart({ cart, updateQuantity, total }) {
  return (
    <div className="cart--item-list-container">
      <ul className="item-list cart--item-list">
        {cart.map(item => (
          <CartItem key={item.id} item={item} updateQuantity={updateQuantity} />
        ))}
      </ul>
      <div className="total-section">
        <h3>Total</h3>
        <span className="total-number">£{total}</span>
      </div>
    </div>
  );
}

export default Cart;
