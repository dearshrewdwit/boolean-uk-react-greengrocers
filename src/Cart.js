export default function Cart({cartItem, setCartItem, priceUpdate, totalPrice, setTotalPrice}) {
    
    function priceDecrease(price) {
        let total = totalPrice
        total -= price
        if(total < 0){
            // If price is less than 0, set it to 0, 
            // as we don't want £-0.00 after the toFixed(2)
            setTotalPrice(0)
        } else {
            setTotalPrice(total)
        }
    }
    return (
        <div className="cart--item-list-container">
            <ul className="item-list cart--item-list">
                {cartItem.map((item, index) => {
                    return (
                        <li key={index}>
                            <img
                            className="cart--item-icon"
                            src={`/assets/icons/${item.id}.svg`}
                            alt={item.name}
                            />
                            <p>{item.name}</p>
                            <button 
                            className="quantity-btn remove-btn center"
                            onClick={() => {
                                item.quantity--
                                // If the item quantity becomes 0,
                                // filter that item out of the cart.
                                if(item.quantity === 0) {
                                    const updateCart = cartItem.filter((cart) => cart.quantity > 0)
                                    setCartItem(updateCart)
                                } else {
                                    // else update the cart with new values,
                                    // which will need a spread to force a rerender.
                                    const updateCart = [...cartItem]
                                    setCartItem(updateCart)
                                }
                                // separate price function for decrease.
                                priceDecrease(item.price)
                            }}
                            >-</button>
                            <span className="quantity-text center">{item.quantity}</span>
                            <button 
                            className="quantity-btn add-btn center"
                            onClick={() => {
                                // increase item quantity, spread to force a rerender,
                                // and update the price.
                                item.quantity++
                                const updateCart = [...cartItem]
                                setCartItem(updateCart)
                                priceUpdate(item.price)
                            }}
                            >+</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}