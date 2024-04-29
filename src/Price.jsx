/* eslint-disable react/prop-types */
export default function Price({ cartList }) {
    const totalPrice = cartList.reduce((total, item) => total + (item.quantity * item.price), 0)
    
    return (
        <div className="total-section">
            <div>
                <h3>Total</h3>
            </div>

            <div>
                <span className="total-number">{`£${totalPrice.toFixed(2)}`}</span>
            </div>
        </div>
    )
}