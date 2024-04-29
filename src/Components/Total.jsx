export default function Total({ cartProds }) {

    const total = cartProds.reduce((total, prod) => (total += prod.price * prod.qty),0)

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