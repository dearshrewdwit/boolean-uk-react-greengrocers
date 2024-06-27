import React from "react";
import PropTypes from "prop-types";
import StoreItem from "./StoreItem";

const Store = ({ items, cart, setCart, setSelectedItem }) => (
  <ul className="store--item-list">
    {items.map((item) => (
      <StoreItem
        key={item.id}
        item={item}
        cart={cart}
        setCart={setCart}
        setSelectedItem={setSelectedItem}
      />
    ))}
  </ul>
);

Store.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  setCart: PropTypes.func.isRequired,
  setSelectedItem: PropTypes.func.isRequired,
};

export default Store;
