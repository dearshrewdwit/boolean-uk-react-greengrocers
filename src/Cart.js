import CartItem from './CartItem'

// This component will be used every time the cart needs rendering
// It reads the cart state array, passed from props
function Cart(props) {
  return (
    <main id="cart">
      <h2>Your Cart</h2>
      <div className="cart--item-list-container">
        <ul className="item-list cart--item-list">
          {props.cart.map((cartItem, index) => (
            <CartItem cartItem={cartItem} key={index} />
          ))}
        </ul>
      </div>
      <div className="total-section">
        <div>
          <h3>Total</h3>
        </div>
        <div>
          <span className="total-number">£0.00</span>
        </div>
      </div>
    </main>
  )
}

export default Cart
