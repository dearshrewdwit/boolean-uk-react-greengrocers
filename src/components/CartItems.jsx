function CartItems({cartItem, setCartItem}) {

    function increaseQuantity(item) {
        item.quantity += 1
        setCartItem([...cartItem])
    }

    function decreaseQuantity(item) {
        if (item.quantity > 1) {
            item.quantity -= 1
            setCartItem([...cartItem])
        }
        else {
            const updatedCart = cartItem.filter((itemToRemove) => itemToRemove !== item)
            setCartItem(updatedCart)
        }
    }

    return (
        <div className="cart--item-list-container">
        <ul className="item-list cart--item-list">
            {cartItem.map((item) => 
                <li key={item.id}>
                    <img
                        className="cart--item-icon"
                        src={`assets/icons/${item.id}.svg`}
                        alt={item.name}
                    />
                    <p>{item.name}</p>
                    <button className="quantity-btn remove-btn center" onClick={() => decreaseQuantity(item)} >-</button>
                    <span className="quantity-text center">{item.quantity}</span>
                    <button className="quantity-btn add-btn center" onClick={() => increaseQuantity(item)}>+</button>
                </li>
            )}
        </ul>
    </div>
    )
}

export default CartItems