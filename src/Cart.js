function Cart (props) {
  const { cartItems , addButton, minusButton} = props
  // const [total , setTotal] = useState(0)

    return (
        <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="cart--item-list">

          {cartItems.map(item => {
            return (
              <li>
                <img
                  class="cart--item-icon"
                  src={`/assets/icons/${item.id}.svg`}
                  alt={item.name}
                />
                <p>{item.name}</p>
                <button onClick={ () => minusButton(item)} class="quantity-btn remove-btn center">-</button>
                <span class="quantity-text center">{item.quantity}</span>
                <button onClick={ () => addButton(item)} class="quantity-btn add-btn center">+</button>
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