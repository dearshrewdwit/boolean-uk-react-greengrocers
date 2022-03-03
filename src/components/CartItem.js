const CartItem = props => {

    const lowerQuantity = e => {
        const quantityDecrease = props.cartItems.map(item => item === e ? { ...item, quantity: item.quantity - 1 } : item)
        props.setCartItems(quantityDecrease)

        for (const items of quantityDecrease) {
            items.totalPrice = items.basePrice * items.quantity
            if (items.totalPrice === 0) {
                props.setCartItems(quantityDecrease.filter(x => x.quantity > 0))
            }
        }
    }

    const increaseQuantity = e => {
        const quantityIncrease = props.cartItems.map(item => item === e ? { ...item, quantity: item.quantity + 1 } : item)
        for (const total of quantityIncrease) {
            total.totalPrice = total.basePrice * total.quantity
        }
        props.setCartItems(quantityIncrease)
    }

    return <div className="cart--item-list-container">
        <ul className="item-list cart--item-list">
            {props.cartItems !== null && props.cartItems.map(item =>
                <li key={item.id}>
                    <img
                        class="cart--item-icon"
                        src={`/assets/icons/${item.id}.svg`}
                        alt={item.name}
                    />
                    <p>{item.name}</p>
                    <button class="quantity-btn remove-btn center" onClick={(e) => lowerQuantity(item)}>-</button>
                    <span class="quantity-text center">{item.quantity}</span>
                    <button class="quantity-btn add-btn center" onClick={(e) => increaseQuantity(item)}>+</button>
                </li>
            )}
        </ul>
    </div>

}

export default CartItem