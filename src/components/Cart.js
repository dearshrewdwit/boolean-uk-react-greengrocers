import React, { useState } from "react";


function CartItem({item}) {
 

    return (
      <li>
        <img
          className="cart--item-icon"
          src={`assets/icons/${item.id}.svg`}
          alt={item.name}
        />
        <p>{item.name}</p>
        <button
          
        >
          -
        </button>
        <span className="quantity-text center">{quantity}</span>
        <button
          className="quantity-btn add-btn center"
        >
          +
        </button>
      </li>
    )
  }


export default CartItem;
