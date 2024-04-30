function CartItemLi({ item, cartItem, setCartItem }) {
    function handleMinusClick() {
        if (item.quantity === 1) {
            const index = cartItem.findIndex(product => product.id === item.id)
            cartItem.splice(index, 1)
            setCartItem([
                ...cartItem
            ])
            return;
          }
      
          item.quantity--
          setCartItem([
            ...cartItem
          ])
    }

    function handlePlusClick() {
        item.quantity++
        setCartItem([
            ...cartItem
          ])
    }

    return (
        <li>
            <img
                className="cart--item-icon"
                src={`assets/icons/${item.id}.svg`}
                alt={item.name}
            />
            <p>{item.name}</p>
            <button className="quantity-btn remove-btn center" onClick={handleMinusClick}>-</button>
            <span className="quantity-text center">{item.quantity}</span>
            <button className="quantity-btn add-btn center" onClick={handlePlusClick}>+</button>
        </li>
    )
}

export default CartItemLi