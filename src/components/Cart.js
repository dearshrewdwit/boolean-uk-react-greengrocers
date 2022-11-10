import CartItem from './CartItem'
import Total from './Total'

function Cart({ cart }) {
  return (
    <main id="cart">
      <h2>Your Cart</h2>
      <div className="cart--item-list-container">
        <ul className="item-list cart--item-list">
          {cart.map(cartItem => {
            return <CartItem key={cartItem.id} product={cartItem} />
          })}
        </ul>
      </div>
      <Total cart={cart} />
    </main>
  )
}

export default Cart
