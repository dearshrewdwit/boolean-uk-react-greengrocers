export default function CartItem({ item , decreaseCartCount, increaseCartCount}) {
    return (
        <li>
            <img
                className="cart--item-icon"
                src={`assets/icons/${item.id}.svg`}
                alt={item.name}
            />
            <p>{item.name}</p>
            <button onClick={() => decreaseCartCount(item)} className="quantity-btn remove-btn center">-</button>
            <span className="quantity-text center">{item.quantity}</span>
            <button onClick={() => increaseCartCount(item)} className="quantity-btn add-btn center">+</button>
        </li>
    )
}
