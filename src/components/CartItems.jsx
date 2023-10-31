function CartItems({cartItem}) {

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
                    <button className="quantity-btn remove-btn center">-</button>
                    <span className="quantity-text center">{item.quantity}</span>
                    <button className="quantity-btn add-btn center">+</button>
                </li>
            )}
        </ul>
    </div>
    )
}

export default CartItems