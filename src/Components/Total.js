function Total({ cartItems }) {
  const total = cartItems.reduce((amount, cartItem) => {
    return (amount += cartItem.price * cartItem.quantity);
  }, 0);

  return (
    <div className="total-section">
      <div>
        <h3>Total</h3>
      </div>
      <div>
        <span className="total-number">£{total.toFixed(2)}</span>
      </div>
    </div>
  );
}
export default Total;
