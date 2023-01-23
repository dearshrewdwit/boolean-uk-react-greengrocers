const Total = ({cartItems}) => {
    const getTotal = () => {
        let total = 0
        cartItems.forEach(item => {
            total += item.price * item.quantity
        })
        return total.toFixed(2)
    }

    return (
        <div className="total-section">
            <div>
                <h3>Total</h3>
            </div>
            <div>
                <span className="total-number">{getTotal()}</span>
            </div>
        </div>
    )
}

export default Total