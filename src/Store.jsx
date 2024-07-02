import React from 'react';
import Item from './Item';

function Store({ items, addToCart }) {
  return (
    <ul className="item-list store--item-list">
      {items.map(item => (
        <Item key={item.id} item={item} addToCart={addToCart} />
      ))}
    </ul>
  );
}

export default Store;
