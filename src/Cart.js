import { useState } from "react"
import initialStoreItems from './store-items'

function Cart (props) {
  // const {} = props
  const [ cartItems, setCartItem] = useState(initialStoreItems)
  // const [total , setTotal] = useState(0)

  // const addToCart = ()

    return (
        <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">

          {cartItems.map(cartItem => {
            return (
              <li>
                <img
                  class="cart--item-icon"
                  src="assets/icons/001-beetroot.svg"
                  alt="beetroot"
                />
                <p>beetroot</p>
                <button class="quantity-btn remove-btn center">-</button>
                <span class="quantity-text center">1</span>
                <button class="quantity-btn add-btn center">+</button>
              </li>
            )
          })}
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


// Import state @ the top
// Use a state called cart Itmes and setCartItem
// Create addToCart function here that processes store click event 
// need a state for total ?? => total + setTotal?
// Work out how to do total in here than move to another file and import it here