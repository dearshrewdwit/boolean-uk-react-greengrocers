import Inside from "./Inside";

function Main({ cartItem, setCartItem }) {
  console.log(cartItem);

  function total() {
    const amount = cartItem.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0);
    return amount.toFixed(2);
  }

  return (
    <main id="cart">
      <h2>Your Cart</h2>
      <div className="cart--item-list-container">
        <ul className="item-list cart--item-list">
          <Inside cartItem={cartItem} setCartItem={setCartItem} />
        </ul>
      </div>
      <div className="total-section">
        <div>
          <h3>Total</h3>
        </div>
        <div>
          <span className="total-number">£{total()}</span>
        </div>
      </div>
    </main>
  );
}
export default Main;
