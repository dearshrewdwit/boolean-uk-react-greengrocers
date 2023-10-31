function Main() {

    return (
        <main id="cart">
        <h2>Your Cart</h2>
            <div className="cart--item-list-container">
                <ul className="item-list cart--item-list">
                    {<li>
                    <img
                        className="cart--item-icon"
                        src="assets/icons/001-beetroot.svg"
                        alt="beetroot"
                    />
                    <p>beetroot</p>
                    <button className="quantity-btn remove-btn center">-</button>
                    <span className="quantity-text center">1</span>
                    <button className="quantity-btn add-btn center">+</button>
                    </li>}
                </ul>
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

export default Main