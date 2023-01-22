function CartItem (props) {
    return (
        <li>
  <img
    class="cart--item-icon"
    src={`assets/icons/${props.id}.svg`}
    alt={props.name}
  />
  <p>{props.name}</p>
  <button class="quantity-btn remove-btn center">-</button>
  <span class="quantity-text center">{props.quantity}</span>
  <button class="quantity-btn add-btn center">+</button>
</li>

    )
}
export default CartItem