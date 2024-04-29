function StoreItemLi({ item, setCartItem, cartItem}) {
    function handleClick() {
        const foundItem = cartItem.find(product => product.id === item.id)

        if (foundItem) {
                foundItem.quantity++
                setCartItem([
                    ...cartItem
                ])
          } else {
                const productToAdd = { ...item }
                productToAdd.quantity = 1
                setCartItem([
                    ...cartItem,
                    productToAdd
                ])
          }

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