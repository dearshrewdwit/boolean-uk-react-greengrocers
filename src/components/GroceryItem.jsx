import React from 'react';

function GroceryItem({ item, addToCart }) {
  return (
    <li>
      <div className="store--item-icon">
        <img src={`icons/${item.id}.svg`} alt={item.name} />
      </div>
      <button onClick={() => addToCart(item)}>Add to cart</button>
    </li>
  );
}

export default GroceryItem;
