export default function CartItem({item, removeOneQuantity, addOneToQuantity}) {
    return (
        <li>
            <img
            class="cart--item-icon"
            src={`/assets/icons/${item.id}.svg`}
            alt={item.name}
            />
            <p>{item.name}</p>
            <button class="quantity-btn remove-btn center" onClick={ () => removeOneQuantity(item)}>-</button>
            <span class="quantity-text center">{item.quantity}</span>
            <button class="quantity-btn add-btn center" onClick={ () => addOneToQuantity(item)}>+</button>
        </li>
    )
}