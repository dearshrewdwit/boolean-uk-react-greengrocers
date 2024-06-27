import React from "react";

export default function Item(props) {
  return (
    <li onClick={() => props.onItemClick(props.item)}>
      <div className="store--item-icon">
        <img src={props.item.image} alt={props.item.name} />
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          props.addToCart(props.item);
        }}
      >
        Add to cart
      </button>
    </li>
  );
}
