import React from "react";
import PropTypes from "prop-types";
import CartItem from "./CartItem";

const Cart = ({ cart, setCart }) => (
  <div id="cart">
    <h2>Your Cart</h2>
    <div className="cart--item-list-container">
      <ul className="cart--item-list">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} cart={cart} setCart={setCart} />
        ))}
      </ul>
    </div>
  </div>
);

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  setCart: PropTypes.func.isRequired,
};

export default Cart;
