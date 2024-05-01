import CartProducts from "./CartProducts"
export default function Cart({ cartProds, setCartProds }) {
    return (
        <>
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            <CartProducts cartProds={cartProds} setCartProds={setCartProds} />
          </ul>
        </div>
        </>
    )
}