function StoreItemLi({ item, setCartItem, cartItem}) {
    function handleClick() {
        setCartItem([
            ...cartItem,
            item
        ])
    }

    return (
        <li>
            <div className="store--item-icon">
                <img src={`/assets/icons/${item.id}.svg`} alt={item.name} />
            </div>
            <button onClick={handleClick}>Add to cart</button>
        </li>

    )
}

export default StoreItemLi