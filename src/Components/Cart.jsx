import CartProducts from "./CartProducts"
export default function Cart({ cartProds, setCartProds }) {
    return (
        <ul>
            <CartProducts cartProds={cartProds} setCartProds={setCartProds} />
        </ul>

    )
}