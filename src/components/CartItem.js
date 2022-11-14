import ItemImage from './ItemImage.js'

function CartItem(props) {
  console.log('CartItem invoked')

  const {cartItem} = props
  
  return(
    <li key={cartItem.item.id}>
      <ItemImage item={cartItem.item} className='cart--item-icon' />
      <p>{cartItem.item.name}</p>
    </li>
  )
}

export default CartItem