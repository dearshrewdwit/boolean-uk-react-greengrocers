import { CalculateTotal } from './CalculateTotal'
function Total({ cartItems }) {
  return (
    <div className="total-section">
      <div>
        <h3>Total</h3>
      </div>
      <div>
        <span className="total-number">
          {`£`}
          <CalculateTotal cartItems={cartItems} />
        </span>
      </div>
    </div>
  )
}
export default Total
