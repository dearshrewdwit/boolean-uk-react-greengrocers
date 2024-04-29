import CartItemUl from "./CartItemUl"

function MainComponent({ cartItem, setCartItem }) {
    return (
        <main id="cart">
            <h2>Your Cart</h2>
            <div className="cart--item-list-container">
            <CartItemUl cartItem={cartItem} setCartItem={setCartItem}/>
            </div>
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

export default MainComponent