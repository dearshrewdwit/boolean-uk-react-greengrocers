import initialStoreItems from './store-items'
console.log(initialStoreItems)

function CartItem(props) {
 
  return (
    <li >
      <img
        class="cart--item-icon"
        src={`assets/icons/${props.id}.svg`}
        alt={props.name}
      />
      <p>{props.name}</p>
      <button class="quantity-btn remove-btn center"onClick= {() =>
    props.handleDecrement(props)}>-</button>
      <span class="quantity-text center">{props.quantity}</span>
      <button class="quantity-btn add-btn center" onClick={() => props.handleIncrement(props)}>
        +
      </button>
    </li>
  )
}
export default CartItem
