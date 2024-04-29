import StoreItem from "./StoreItem"

export default function Store({products, cartProds, setCartProds}) {
    return (
        <ul className="item-list store--item-list">
          <StoreItem products={products} cartProds={cartProds} setCartProds={setCartProds} />
        </ul>
    )
}