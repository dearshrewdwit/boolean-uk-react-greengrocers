import CartItem from './CartItem'

export default function MainSection({ cartItems, addToCart, removeItem, calculateTotal}) {
    return (
        <main id="cart">
            <h2>Your Cart</h2>
            <div className="cart--item-list-container">
            <ul className="item-list cart--item-list">
                {cartItems.map((item) => (
                    <CartItem key={item.id} item={item} addToCart={addToCart} removeItem={removeItem} />
            ))}
            </ul>
            </div>
                <div className="total-section">
                <div>
                    <h3>Total</h3>
                </div>
                <div>
                    <span className="total-number">£{calculateTotal()}</span>
                </div>
            </div>
            </main>

    )
}




