import CartItemLi from "./CartItemLi"

function CartItemUl({ cartItem, setCartItem }) {
    return (
        <ul className="item-list cart--item-list">
            {cartItem.map((item, index) => {
                return <CartItemLi key={index} item={item} cartItem={cartItem} setCartItem={setCartItem}/>
            })}
        </ul>
    )
}

export default CartItemUl