import StoreItem from "./StoreItem"

function Header({store}) {

    return (
        <header id="store">
            <h1>Greengrocers</h1>
            <ul className="item-list store--item-list">
                {store.map((item) =>
                    <StoreItem key={item.id} item={item}></StoreItem>   
                )}
            </ul>
        </header>
    )
}

export default Header