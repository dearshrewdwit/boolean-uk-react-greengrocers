import CartItem from './CartItem'
import Total from './Total'

function Cart({ cart, editCartItem }) {
  return (
    <main id="cart">
      <h2>Your Cart</h2>
      <div className="cart--item-list-container">
        <ul className="item-list cart--item-list">
          {cart.length < 1 && <p>Your cart is currently empty.</p>}
          {cart.map(cartItem => {
            return (
              <CartItem
                key={cartItem.id}
                product={cartItem}
                editCartItem={editCartItem}
              />
            )
          })}
        </ul>
      </div>
      <Total cart={cart} />
    </main>
  )
}

export default Cart
