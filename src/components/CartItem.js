import CartTotal from './CartTotal.js'

function CartItem(props) {
  console.log('CartItem invoked')
  return(
    <>
      <p> Cart</p>
      <CartTotal />
    </>
  )
}

export default CartItem