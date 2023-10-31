function Header ({storeItems, cartItems, setCartItems}) {

    //function to add items to cart when button is clicked
    function addItem(itemTocart) {
        const addedItem = cartItems.find((item) => item.id === itemTocart.id)
        if (addedItem) {
            addedItem.quantity++
            setCartItems([...cartItems])
        } else {
            itemTocart.quantity = 1
            setCartItems([...cartItems, itemTocart])
        }
    }

    return (
        <header id="store">
            <h1>Greengrocers</h1>
            <ul className="item-list store--item-list">
                {storeItems.map(item => {
                    return (
                        <li key={item.id} className="store--item">
                            <div className="store--item-icon">
                                <img src={`assets/icons/${item.id}.svg`} alt={item.name} />
                            </div>
                            <button className="btn btn-primary btn-add" onClick={() => addItem(item)}>Add To Cart</button>
                        </li>
                    )
                })}
            </ul>
        </header>
    )
}

export default Header