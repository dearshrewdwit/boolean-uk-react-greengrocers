import StoreItem from "./StoreItem";

// eslint-disable-next-line react/prop-types
export default function Header({ cartList, setCartList }) {
    return (
        <header id="store">
            <h1>Greengrocers</h1>

            <StoreItem 
                cartList={cartList} 
                setCartList={setCartList}
            />
        </header>
    )
}