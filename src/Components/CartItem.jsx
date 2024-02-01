function CartItem({ item, cart, setCart }) {
    const addItem = (i) => {
        i.count++
        setCart([...cart])
    }

    const removeItem = (i) => {
        if (i.count === 1) {
            cart.forEach((e, index) => {
                if (e.id === i.id) {
                    cart.splice(index, 1)
                }
            });
        }
        i.count--
        setCart([...cart])
    }

    return (
        <>
        <li>
            <img
            className="cart--item-icon"
            src={`../../public/assets/icons/${item.id}.svg`}
            alt={item.name}
            />
            <p>{item.name}</p>
            <button onClick={() => removeItem(item)} className="quantity-btn remove-btn center">-</button>
            <span className="quantity-text center">{item.count}</span>
            <button onClick={() => addItem(item)} className="quantity-btn add-btn center">+</button>
        </li>

        </>
  );
}

export default CartItem;