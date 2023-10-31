/* eslint-disable react/prop-types */

function Main({cartItems, setCartItems}) {

    const plusOne = (itemClicked) => {
        itemClicked.quantity += 1
        setCartItems([...cartItems])
    }

    const minusOne = (itemClicked) => {
        itemClicked.quantity -= 1
        const updatedCart = cartItems.filter((item) => item.quantity > 0);
        if (itemClicked.quantity === 0) {
            setCartItems(updatedCart)
        } else {
            setCartItems([...cartItems])
        }
    }


    const totalingItems = cartItems.map((item) => item.quantity * item.price
    )
    const Total = totalingItems.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    return (
        <>
            <main id="cart">
                <h2>Your Cart</h2>
                <div className="cart--item-list-container">
                    <ul className="item-list cart--item-list">
                        {cartItems.map((item, index) => (
                            <li key={`${item.name}${index}`}>
                                <img
                                    className="cart--item-icon"
                                    src={`/assets/icons/${item.id}.svg`}
                                    alt={item.name}
                                />
                                <p>{item.name}</p>
                                <button
                                    onClick={() => { minusOne(item) }}
                                    className="quantity-btn remove-btn center">-</button>

                                <span className="quantity-text center">{item.quantity}</span>
                                <button
                                    onClick={() => { plusOne(item) }}
                                    className="quantity-btn add-btn center">+</button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="total-section">
                    <div>
                        <h3>Total</h3>
                    </div>
                    <div>
                        <span className="total-number">{`£${Total.toFixed(2)}`}</span>
                    </div>
                </div>
            </main>
            <div>
                Icons made by
                <a
                    href="https://www.flaticon.com/authors/icongeek26"
                    title="Icongeek26"
                >
                    Icongeek26
                </a>
                from
                <a href="https://www.flaticon.com/" title="Flaticon">
                    www.flaticon.com
                </a>
            </div>
        </>
    )
}

export default Main