import StoreItem from "./StoreItem"

function Header({store, addItem, cartItem, setCartItem}) {

    return (
        <header id="store">
            <h1>Greengrocers</h1>
            <ul className="item-list store--item-list">
                {store.map((item) =>
                    <StoreItem key={item.id} store={store} item={item} addItem={addItem} cartItem={cartItem} setCartItem={setCartItem}></StoreItem>   
                )}
            </ul>
        </header>
    )
}

export default Header