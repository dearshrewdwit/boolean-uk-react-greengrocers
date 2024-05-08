import React from 'react';
import GroceryItem from './GroceryItem';

function GroceryStore({ items, addToCart }) {
  return (
    <ul className="item-list store--item-list">
      {items.map((item) => (
        <GroceryItem key={item.id} item={item} addToCart={addToCart} />
      ))}
    </ul>
  );
}

export default GroceryStore;
