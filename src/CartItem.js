import initialStoreItems from './store-items'
console.log(initialStoreItems)

function CartItem(props) {
 
  // write function for the decrease the quantity  of items and remove when it is less than 1
  // add onclick evnet for the buttons for the increament and decreament buttons
  return (
    <li >
      <img
        class="cart--item-icon"
        src={`assets/icons/${props.id}.svg`}
        alt={props.name}
      />
      <p>{props.name}</p>
      <button class="quantity-btn remove-btn center"onClick= {() =>
    props.handleDecrement(props.id)}>-</button>
      <span class="quantity-text center">{props.quantity} {props.handleIncrement}  {props.handleDecrement}</span>
      <button class="quantity-btn add-btn center" onClick={() => props.handleIncrement(props.id)}>
        +
      </button>
    </li>
  )
}
export default CartItem
