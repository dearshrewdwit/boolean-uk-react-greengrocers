function Total({ total }) {
  return (
    <div className="total-section">
      <div>
        <h3>Total</h3>
      </div>
      <div>
        <span className="total-number">£{total.toFixed(2)}</span>
      </div>
    </div>
  )
}
export default Total
