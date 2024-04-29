function CartItemLi({ item }) {
    return (
        <li>
            <img
                className="cart--item-icon"
                src={`assets/icons/${item.id}.svg`}
                alt={item.name}
            />
            <p>{item.name}</p>
            <button className="quantity-btn remove-btn center">-</button>
            <span className="quantity-text center">1</span>
            <button className="quantity-btn add-btn center">+</button>
        </li>
    )
}

export default CartItemLi