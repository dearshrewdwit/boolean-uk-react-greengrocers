import CartItemList from './CartItemList.js'
import CartTotal from './CartTotal'

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
      <CartTotal cartItems={cartItems}/>
    </main>
  )
}

export default Cart