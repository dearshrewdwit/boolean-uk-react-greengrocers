/* eslint-disable react/prop-types */

import CartItem from "./CartItem";

export default function MainBody({cart, addToCart, removeFromCart}) {

  const calculateTotal = () => {
    console.log(cart)
    const calculateCartTotal = cart.reduce((cartTotal, item) => cartTotal += item.quantity * item.price, 0)
    return calculateCartTotal.toFixed(2)
  }

    return (
        <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {cart.map((cartItem, index) => {
              return <CartItem cartItem={cartItem} key={index} addToCart={addToCart} removeFromCart={removeFromCart}/>
            })}
          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">{`£${calculateTotal()}`}</span>
          </div>
        </div>
      </main>
    )
}