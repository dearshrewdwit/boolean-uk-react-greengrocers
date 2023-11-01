
import React from 'react';
import '../styles/reset.css';
import '../styles/index.css';

const StoreItem = ({ item, index, setCart, cart, setTotal, total }) => {
  const addToCart = () => {
    // Add logic to add the item to the cart and update total
  };

  return (
    <li key={item.id}>
      <div className="store--item-icon">
        <img src={item.image} alt={item.name} />
      </div>
      <button onClick={addToCart}>Add To Cart</button>
    </li>
  );
};

export default StoreItem;
