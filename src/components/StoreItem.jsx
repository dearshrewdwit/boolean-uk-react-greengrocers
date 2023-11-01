function StoreItem({item, cartItem, setCartItem}) {

    function addToCart(item) {
        const selectedItem = cartItem.find((storeItem) => storeItem.id === item.id)
        if (!selectedItem) {
            setCartItem([...cartItem, {...item, quantity: 1}])
        }
        if (selectedItem) {
            selectedItem.quantity += 1
            setCartItem([...cartItem])
        }
    }

    return (
            <li>
            <div className="store--item-icon">
                <img src={`/assets/icons/${item.id}.svg`} alt={item.name} />
            </div>
            <button onClick={() => addToCart(item)}>Add to cart</button>
            </li>
    )
}
export default StoreItem