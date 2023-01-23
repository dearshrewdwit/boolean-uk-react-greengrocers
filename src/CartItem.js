function CartItem(props) {
  return (
    <li>
      <img
        className="cart--item-icon"
        src={`/assets/icons/${props.cartItem.id}.svg`}
        alt={`${props.cartItem.name}`}
      />
      <p>{`${props.cartItem.name}`}</p>
      {/* Add onClick's for decrementer and incrementer */}
      {/* Change the quantity, e.g. props.cartItem.quantity */}
      <button
        onClick={() => props.decrementQuantity(props.cartItem.id)}
        className="quantity-btn remove-btn center"
      >
        -
      </button>
      <span className="quantity-text center">{props.cartItem.quantity}</span>
      <button
        onClick={() => props.incrementQuantity(props.cartItem.id)}
        className="quantity-btn add-btn center"
      >
        +
      </button>
    </li>
  )
}

export default CartItem
