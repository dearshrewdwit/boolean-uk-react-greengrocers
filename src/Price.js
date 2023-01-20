export default function Price({totalPrice}) {
    // Setting the value to 2 decimail places.
    let totalFixed = totalPrice.toFixed(2)
    return (
        <div className="total-section">
            <div>
                <h3>Total</h3>
            </div>
            <div>
                <span className="total-number">{`£${totalFixed}`}</span>
            </div>
        </div>
    )
}