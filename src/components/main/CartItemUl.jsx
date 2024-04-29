import CartItemLi from "./CartItemLi"

function CartItemUl({ cartItem }) {
    return (
        <ul className="item-list cart--item-list">
            {cartItem.map((item, index) => {
                return <CartItemLi key={index} item={item} />
            })}
        </ul>
    )
}

export default CartItemUl