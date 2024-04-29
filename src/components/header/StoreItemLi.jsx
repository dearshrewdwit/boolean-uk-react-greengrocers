function StoreItemLi({ item, setCartItem, cartItem, details, setDetails}) {
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

    function handleDetails() {
        setDetails(item.description)
        console.log(details)
    }

    return (
        <li>
            <div className="store--item-icon">
                <img src={`/assets/icons/${item.id}.svg`} alt={item.name} />
            </div>
            <button onClick={handleClick}>Add to cart</button>
            <button onClick={handleDetails}>Details</button>
        </li>

    )
}

export default StoreItemLi