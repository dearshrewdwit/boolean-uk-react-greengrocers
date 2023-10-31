/* eslint-disable react/prop-types */
export default function Main({ cartItems, setCartItems }) {
  function addQuantity(inputItem) {
    inputItem.quantity++;
    setCartItems([...cartItems]);
  }

  function minusQuantity(inputItem) {
    inputItem.quantity--;

    if (inputItem.quantity <= 0) {
      const index = cartItems.findIndex((item) => item.id === inputItem.id);
      cartItems.splice(index, 1);
    }
    
    setCartItems([...cartItems]);
  }

  return (
    <main id="cart">
      <h2>Your Cart</h2>
      <div className="cart--item-list-container">
        <ul className="item-list cart--item-list">
          {cartItems.map((item) => {
            return (
              <li key={item.id}>
                <img
                  src={`assets/icons/${item.id}.svg`}
                  alt={item.name}
                  className="cart--item-icon"
                />
                <p>{item.name}</p>
                <button
                  onClick={() => minusQuantity(item)}
                  className="quantity-btn remove-btn center"
                >
                  -
                </button>
                <span className="quantity-text center">{item.quantity}</span>
                <button
                  onClick={() => addQuantity(item)}
                  className="quantity-btn add-btn center"
                >
                  +
                </button>
              </li>
            );
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
  );
}
