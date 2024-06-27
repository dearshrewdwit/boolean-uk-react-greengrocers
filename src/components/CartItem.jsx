import React from "react";
import PropTypes from "prop-types";

const CartItem = ({ item, cart, setCart }) => {
  const removeFromCart = () => {
    const updatedCart = [...cart];
    const itemIndex = updatedCart.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (itemIndex > -1) {
      updatedCart[itemIndex].quantity -= 1;

      if (updatedCart[itemIndex].quantity === 0) {
        updatedCart.splice(itemIndex, 1);
      }
    }

    setCart(updatedCart);
  };

  const addToCart = () => {
    const updatedCart = [...cart];
    const itemIndex = updatedCart.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (itemIndex > -1) {
      updatedCart[itemIndex].quantity += 1;
    }

    setCart(updatedCart);
  };

  return (
    <li>
      <img
        className="cart--item-icon"
        src={`assets/icons/${item.icon}.svg`}
        alt={item.name}
      />
      <p>{item.name}</p>
      <button
        className="quantity-btn remove-btn center"
        onClick={removeFromCart}
      >
        -
      </button>
      <span className="quantity-text center">{item.quantity}</span>
      <button className="quantity-btn add-btn center" onClick={addToCart}>
        +
      </button>
    </li>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  setCart: PropTypes.func.isRequired,
};

export default CartItem;
