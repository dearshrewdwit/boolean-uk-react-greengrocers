function Cart(Props) {
  const { cartItems, plusBtn, minusBtn, cartTotal } = Props
  return (
    <main id="cart">
      <h2>Your Cart</h2>
      <div className="cart--item-list-container">
        <ul className="item-list cart--item-list">
          {cartItems.map(item => {
            return (
              <li>
                <img
                  className="cart--item-icon"
                  src={`/assets/icons/${item.id}.svg`}
                  alt={item.name}
                />
                <p>{item.name}</p>
                <button
                  onClick={() => minusBtn(item)}
                  className="quantity-btn remove-btn center"
                >
                  -
                </button>
                <span className="quantity-text center">{item.quantity}</span>
                <button
                  onClick={() => plusBtn(item)}
                  className="quantity-btn add-btn center"
                >
                  +
                </button>
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
          <span className="total-number">{cartTotal()}</span>
        </div>
      </div>
    </main>
  )
}
export default Cart
