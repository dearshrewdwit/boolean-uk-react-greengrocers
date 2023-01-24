export default function Cart (props) {

    return (
        <>
        {props.cartList.map((item) =>
        (
        <li>
        <img
            class="cart--item-icon"
            src={`assets/icons/${item.id}.svg`}
            alt={item.name}
        />
        <p>{item.name}</p>
        <button class="quantity-btn remove-btn center" onClick={() => props.removeItemFromCart(item)}>-</button>
        <span class="quantity-text center">{item.quantity}</span>
        <button class="quantity-btn add-btn center" onClick={() => props.addItemToCart(item)}>+</button>
        </li>

        ))}
        </>
    )
}