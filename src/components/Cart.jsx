function Cart({cart, removeFromCart, addToCart, cartPrice}) {


    
    return (
        <>
            <main id="cart">
                <h2>Your Cart</h2>
                <div className="cart--item-list-container">
                    <ul className="item-list cart--item-list">
                        {cart.map((item) => (
                            <li key={item.id}>
                                <div className="cart--item-icon">
                                    <img src={`/assets/icons/${item.id}.svg`} alt={item.name} />
                                </div>
                                <p>{item.name.toUpperCase()}</p>
                                <button className="quantity-btn remove-btn center" onClick={() => removeFromCart(item)}>
                                    -
                                </button>
                                <span className="quantity-text center">{item.quantity}</span>
                                <button className="quantity-btn add-btn center" onClick={() => addToCart(item)}>
                                    +
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="total-section">
                    <div>
                        <h3>Total</h3>
                    </div>
                    <div>
                        <span className="total-number">{cartPrice()}</span>
                    </div>
                </div>
            </main >
        </>
    )
}

export default Cart