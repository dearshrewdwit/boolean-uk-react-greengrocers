import React from 'react'

export default function Cart (props) {
  const array = props.cart
  return array.map(item => {
    return (
      <li key={ item.id } >
        <img
          class="cart--item-icon"
          src={ "/assets/icons/" + item.id + '.svg' }
          alt={ item.name }
        />
        <p>{ item.name }</p>
        <button onClick={ () => props.removeFromCart(item) } class="quantity-btn remove-btn center">-</button>
        <span class="quantity-text center">{ item.quantity }</span>
        <button onClick={ () => props.addToCart(item) } class="quantity-btn add-btn center">+</button>
      </li>
    )
  })

}
