import CartItemList from './CartItemList.js'

function Cart(props) {
  console.log('Cart invoked')

  const {cartItems, increaseQuantity, decreaseQuantity} = props

  return (
    <main id='cart'>
      <CartItemList 
        cartItems={cartItems}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />
    </main>
  )
}

export default Cart