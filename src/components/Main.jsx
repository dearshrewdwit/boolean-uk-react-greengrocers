import CartItems from "./CartItems"

function Main({cartItem}) {

    return (
        <main id="cart">
        <h2>Your Cart</h2>
        <CartItems cartItem={cartItem}></CartItems>
            <div className="total-section">
                <div>
                    <h3>Total</h3>
                </div>
                <div>
                    <span className="total-number">£0.00</span>
                </div>
            </div>
        </main>
    )
}

export default Main