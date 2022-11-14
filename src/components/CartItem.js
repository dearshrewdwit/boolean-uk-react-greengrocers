import ItemImage from './ItemImage.js'

function CartItem(props) {
  console.log('CartItem invoked')

  const {cartItem, decreaseQuantity, increaseQuantity } = props
  
  return(
    <li key={cartItem.item.id}>
      <ItemImage item={cartItem.item} className='cart--item-icon' />
      <p>{cartItem.item.name}</p>

      <button className="quantity-btn remove-btn center" onClick={() => decreaseQuantity(cartItem)}>-</button>

      <span className="quantity-text center">{cartItem.quantity}</span>

      <button className="quantity-btn add-btn center" onClick={() => increaseQuantity(cartItem)}>+</button>
    </li>
  )
}

export default CartItem