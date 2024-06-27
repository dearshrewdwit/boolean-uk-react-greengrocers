import React from "react";
import Item from "./Item";

export default function ItemList(props) {
  return (
    <ul className="item-list store--item-list">
      {props.items.map((item) => (
        <Item
          key={item.id}
          item={item}
          addToCart={props.addToCart}
          onItemClick={props.onItemClick}
        />
      ))}
    </ul>
  );
}
