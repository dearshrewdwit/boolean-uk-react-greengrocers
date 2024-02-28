function Cart(props) {
  return (
    <main id="cart">
      <h2>Your Cart</h2>
      <div className="cart--item-list-container">
        <ul className="item-list cart--item-list">
          {props.cartList.map((product, index) => (
            <li key={index}>
              <img
                className="cart--item-icon"
                src={`images/icons/${product.id}.svg`}
                alt={product.name}
              />
              <p>{product.name}</p>
              <button className="quantity-btn remove-btn center">-</button>
              <span className="quantity-text center">{product.count}</span>
              <button className="quantity-btn add-btn center">+</button>
            </li>
          ))}
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
export default Cart;
