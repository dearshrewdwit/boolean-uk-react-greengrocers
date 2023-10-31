const CartItem = ({ cart, setCart }) => {
    const addBtn = (item) => {
        item.quantity++;
        setCart([...cart])
    };

    const minusBtn = (item) => {
        item.quantity--;

        if (item.quantity === 0) {
            const idx = cart.indexOf(item)
            if (idx > -1)  cart.splice(idx, 1)
        };
    
        setCart([...cart])
    };

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