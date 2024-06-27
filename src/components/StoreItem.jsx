import React from "react";
import PropTypes from "prop-types";

const StoreItem = ({ item, cart, setCart, setSelectedItem }) => {
  const addToCart = () => {
    const updatedCart = [...cart];
    const itemIndex = updatedCart.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (itemIndex > -1) {
      updatedCart[itemIndex].quantity += 1;
    } else {
      updatedCart.push({ ...item, quantity: 1 });
    }

    setCart(updatedCart);
  };

  return (
    <li>
      <div className="store--item-icon" onClick={() => setSelectedItem(item)}>
        <img src={`assets/icons/${item.icon}.svg`} alt={item.name} />
      </div>
      <button className="quantity-btn add-to-cart" onClick={addToCart}>
        Add to cart
      </button>
    </li>
  );
};

StoreItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  setCart: PropTypes.func.isRequired,
  setSelectedItem: PropTypes.func.isRequired,
};

export default StoreItem;
