function Main({ cartItems, setCartItems }) {

    function addItem(itemTocart) {
        itemTocart.quantity++
        setCartItems([...cartItems])
    }

    function minusItem(itemTocart) {
        itemTocart.quantity--

        if (itemTocart.quantity <= 0) {
            const index = cartItems.findIndex((item) => item.id === itemTocart.id)
            cartItems.splice(index, 1)
        }

        setCartItems([...cartItems])
    }

    function priceOfCart() {
        let total = 0

        cartItems.forEach(item => {
            total += item.price * item.quantity
        })

        return total.toFixed(2)
    }

    return (
        <main id="cart">
            <h2>Your Cart</h2>
            <div className="cart--item-list-container">
                <ul className="item-list cart--item-list">
                    {cartItems.map(item => {
                        return (
                            <li key={item.id}>
                                <img
                                    className="cart--item-icon"
                                    src={`assets/icons/${item.id}.svg`}
                                    alt={item.name}
                                />
                                <p>{item.name}</p>
                                <button className="quantity-btn remove-btn center" onClick={() => minusItem(item)}>-</button>
                                <span className="quantity-text center">{item.quantity}</span>
                                <button className="quantity-btn add-btn center" onClick={() => addItem(item)}>+</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="total-section">
                <div>
                    <h3>Total</h3>
                </div>
                <div>
                    <span className="total-number">${priceOfCart()}</span>
                </div>
            </div>
        </main>
    )
}

export default Main