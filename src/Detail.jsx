import React from "react";

export default function Detail(props) {
  return (
    <div className="item-detail">
      <h2>{props.item.name}</h2>
      <img src={props.item.image} alt={props.item.name} />
      <p>Type: {props.item.type}</p>
      <p>Price: £{props.item.price.toFixed(2)}</p>
      <p>Description: {props.item.description}</p>
    </div>
  );
}
