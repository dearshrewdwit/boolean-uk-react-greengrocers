import StoreItemLi from './StoreItemLi'

function StoreItemUl({ setCartItem, cartItem, filteredItems}) {
    return (
        <ul className="item-list store--item-list">
            <StoreItemLi setCartItem={setCartItem} cartItem={cartItem} filteredItems={filteredItems} />
        </ul>
    )
}

export default StoreItemUl