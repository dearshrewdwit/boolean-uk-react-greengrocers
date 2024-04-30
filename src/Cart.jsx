import CartList from "./CartList";

export default function Cart(props) {
  let total = 0;

  props.cart.forEach((product) => {
    const productQuantity = product.quantity;
    const productPrice = product.price;

    const cost = productQuantity * productPrice;
    total += cost;
  });

  return (
    <main id="cart">
      <h2>Your Cart</h2>
      <div className="cart--item-list-container">
        <CartList {...props} />
      </div>
      <div className="total-section">
        <div>
          <h3>Total</h3>
        </div>
        <div>
          <span className="total-number">{total.toFixed(2)}</span>
        </div>
      </div>
    </main>
  );
}
