export default function Cart(props) {

    let total = 0
    props.cartItems.forEach(cartItem => total += (cartItem.quantity * cartItem.price))

    return (
        <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {props.cartItems.map(cartItem => {
                return <li>
                <img
                  class="cart--item-icon"
                  src={`assets/icons/${cartItem.id}.svg`}
                  alt={cartItem.name}
                />
                <p>{cartItem.name}</p>
                <button class="quantity-btn remove-btn center" onClick={() => props.removeFromCart(cartItem)}>-</button>
                <span class="quantity-text center">{cartItem.quantity}</span>
                <button class="quantity-btn add-btn center" onClick={() => props.addToCart(cartItem)}>+</button>
              </li>
            })}
          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">{`£${total.toFixed(2)}`}</span>
          </div>
        </div>
      </main>
    )
  }
  