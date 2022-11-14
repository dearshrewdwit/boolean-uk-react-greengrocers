import CartItem from './CartItem.js'

function CartItemList(props) {
  console.log('CartItemList invoked')

  const {cartItems} = props

  return(
    <>
      <h2>Your Cart</h2>
      <div className='cart--item-list-container'>
        <ul className='item-list cart--item-list'>
          {cartItems.map(cartItem => {
            return <CartItem 
              key={cartItem.item.name}
            />
          })}
        </ul>
      </div>
    </>
  )
}

export default CartItemList