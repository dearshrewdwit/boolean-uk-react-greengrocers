function CartItem(props) {
  return (
    <li>
      <img
        class="cart--item-icon"
        src={`assets/icons/${props.id}.svg`}
        alt={props.name}
      />
      <p>{props.name}</p>
      <button
        class="quantity-btn remove-btn center"
        onClick={e => props.decrementItemQuantity(props.id)}
      >
        -
      </button>
      <span class="quantity-text center">
        {props.quantity}
        {props.increaseItemQuantity}
        {props.decrementItemQuantity}
      </span>
      <button
        id={props.id}
        class="quantity-btn add-btn center"
        onClick={e => props.increaseItemQuantity(props.id)}
      >
        +
      </button>
    </li>
  )
}
export default CartItem
