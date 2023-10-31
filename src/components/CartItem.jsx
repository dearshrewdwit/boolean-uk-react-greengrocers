const CartItem = ({ cart, addBtn, minusBtn }) => {
    return (
    <>
    {cart.map(item => 
    <li key={item.id}>
        <img
           className="cart--item-icon"
           src={`assets/icons/${item.id}.svg`}
           alt={item.name}
        />

        <p>{item.name}</p>

        <button className="quantity-btn remove-btn center"
        onClick={() => minusBtn(item)}
        >-</button>

        <span className="quantity-text center">{item.quantity}</span>

        <button className="quantity-btn add-btn center"
        onClick={() => addBtn(item)}
        >+</button>
    </li>
    )}
    </>
    )
}

export default CartItem