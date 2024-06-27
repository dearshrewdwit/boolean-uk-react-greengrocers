import React from "react";

export default function Filter(props) {
  return (
    <div className="filter">
      <button onClick={() => props.setFilter("")}>All</button>
      <button onClick={() => props.setFilter("vegetable")}>Vegetables</button>
      <button onClick={() => props.setFilter("fruit")}>Fruits</button>
    </div>
  );
}
