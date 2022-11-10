function Total({ cart }) {
  const totalAmount = cart.reduce((total, product) => {
    return (total + product.price) * product.quantity
  }, 0)

  const totalDisplay = `£${totalAmount.toFixed(2)}`

  return (
    <div className="total-section">
      <div>
        <h3>Total</h3>
      </div>
      <div>
        <span className="total-number">{totalDisplay}</span>
      </div>
    </div>
  )
}

export default Total
