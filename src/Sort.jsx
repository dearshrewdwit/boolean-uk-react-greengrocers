import React from "react";

export default function Sort(props) {
  return (
    <div className="sort">
      <button onClick={() => props.setSort("price")}>Sort by Price</button>
      <button onClick={() => props.setSort("alphabetical")}>
        Sort Alphabetically
      </button>
    </div>
  );
}
