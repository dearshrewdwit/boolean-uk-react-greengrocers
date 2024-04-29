import StoreItemUl from './StoreItemUl'

function Header({ setCartItem, cartItem}) {
    return (
        <header id="store">
            <h1>Greengrocers</h1>
            <StoreItemUl setCartItem={setCartItem} cartItem={cartItem}/>
        </header>
    )
}

export default Header