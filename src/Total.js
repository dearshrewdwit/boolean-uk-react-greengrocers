function Total(props) {
  const { cart } = props
  const calculatetotal = cart
    .reduce((acc, item) => acc + item.quantity * item.price, 0)
    .toFixed(2)

  return (
    <div className="total-section">
      <div>
        <h3>Total</h3>
      </div>
      <div>
        <span className="total-number">£{calculatetotal}</span>
      </div>
    </div>
  )
}
export default Total
