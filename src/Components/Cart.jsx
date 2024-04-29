/* eslint-disable react/prop-types */
import CartCard from './CartCard'
import TotalPrice from './TotalPrice'

export default function Cart ( {cart, addToCart}) {
    return (
        <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            <CartCard cart={cart} addToCart={addToCart} />
          </ul>
        </div>
        <div className="total-section">
          <TotalPrice cart={cart} />
        </div>
      </main>
    )
}