import CartItem from "./CartItem"

function Cart(props) {
    const calculateTotal = () => {
        let total = 0.0
        for(let item in props.cart) {
          total += props.cart[item].price * props.cart[item].amount
        }
        return total
      }

    const getTotal = () => {
        const total = calculateTotal()
        return `£${total.toFixed(2)}`
      }

    return(
        <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {props.cart.map((cartItem, index) =>
              <CartItem 
              key={index}
              cartItem={cartItem}
              addToCart={props.addToCart}
              removeFromCart={props.removeFromCart}
              />
            )}
          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">{getTotal()}</span>
          </div>
        </div>
      </main>
    )
}

export default Cart