import CartItems from "./CartItems"

function Main({cartItem, setCartItem}) {

    const totalPrice = cartItem.reduce((acc, cur) => acc + (cur.price * cur.quantity), 0).toFixed(2)

    return (
        <main id="cart">
        <h2>Your Cart</h2>
        <CartItems cartItem={cartItem} setCartItem={setCartItem} />
            <div className="total-section">
                <div>
                    <h3>Total</h3>
                </div>
                <div>
                    <span className="total-number">{`£${totalPrice}`}</span>
                </div>
            </div>
        </main>
    )
}

export default Main