import CartItemList from './CartItemList.js'

function Cart(props) {
  const {cartItems} = props

  return (
    <main id='cart'>
      <CartItemList cartItems={cartItems}/>
    </main>
  )
}

export default Cart