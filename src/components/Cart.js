import { useContext } from 'react'
import { CartContext } from '../helper/CartContext'
import CartItem from './CartItem'

const Cart = () => {
  const { cart, setCart } = useContext(CartContext)

  const total = () => {
    let price = 0
    for (const item of cart) {
      price += item.price * item.cartQuantity
    }
    return '£' + price.toFixed(2)
  }

  return (
    <main id="cart">
      <h2>Your Cart</h2>
      <div className="cart--item-list-container">
        <ul className="item-list cart--item-list">
          <CartItem />
        </ul>
      </div>
      <div className="total-section">
        <div>
          <h3>Total</h3>
        </div>
        <div>
          <span className="total-number">{total()}</span>
        </div>
      </div>
    </main>
  )
}

export default Cart
