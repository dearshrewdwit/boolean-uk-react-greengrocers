export default function Cart({ cartItems, setCartItems }) {
    const total = Math.round(cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0) * 100) / 100

    const changeQuantity = (item, change) => {
        if (item.quantity + change === 0) {
            setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id))
        }
        else {
            setCartItems(cartItems.map((cartItem) => {
                if (cartItem.id === item.id) {
                    return { ...cartItem, quantity: cartItem.quantity + change }
                }
                return cartItem
            }))
        }
    }

    return (
        <main id="cart">
            <h2>Your Cart</h2>
            <div className="cart--item-list-container">
                <ul className="item-list cart--item-list">
                    {
                        cartItems.map((item) => {
                            return (
                                <li key={item.id}>
                                    <img
                                        className="cart--item-icon"
                                        src={`assets/icons/${item.id}.svg`}
                                        alt={item.name}
                                    />
                                    <p>{item.name}</p>
                                    <button className="quantity-btn remove-btn center" onClick={() => changeQuantity(item, -1)}>-</button>
                                    <span className="quantity-text center">{item.quantity}</span>
                                    <button className="quantity-btn add-btn center" onClick={() => changeQuantity(item, 1)}>+</button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="total-section">
                <div>
                    <h3>Total</h3>
                </div>
                <div>
                    <span className="total-number">£{total}</span>
                </div>
            </div>
        </main>
    )
}