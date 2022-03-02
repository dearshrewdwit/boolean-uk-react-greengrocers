import React from 'react'

export default function Cart (props) {

  return (
    <li key={ props.item.id } >
      <img
        class="cart--item-icon"
        src={ "/assets/icons/" + props.item.id + '.svg' }
        alt={ props.item.name }
      />
      <p>{ props.item.name }</p>
      <button onClick={ () => props.removeFromCart(props.item) } class="quantity-btn remove-btn center">-</button>
      <span class="quantity-text center">{ props.item.quantity }</span>
      <button onClick={ () => props.addToCart(props.item) } class="quantity-btn add-btn center">+</button>
    </li>
  )
}
