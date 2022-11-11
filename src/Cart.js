// cart item showing in cart section by creating a function and calling in App.js in jsx inline

function Cart(props) {
    const { cart } = props
  
    return (
      <div className="cart--item-list-container">
        <ul className="item-list cart--item-list">
          {cart.map((item, index) => {
            return (
              <li>
                <img
                  class="cart--item-icon"
                  src={`/assets/icons/${item.id}.svg`}
                  alt={item.name}
                />
                <p>{item.name}</p>
                <button
                  onClick={() => props.handleDecrement(item.quantity)}
                  class="quantity-btn remove-btn center"
                >
                  -
                </button>
                <span class="quantity-text center">{item.quantity}</span>
                <button
                  onClick={() => props.handleIncrement(item.quantity)}
                  class="quantity-btn add-btn center"
                >
                  +
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
  
  export default Cart
  