import StoreItemLi from './StoreItemLi'

function StoreItemUl({ setCartItem, cartItem, filteredItems}) {
    return (
        <ul className="item-list store--item-list">
            {filteredItems.map((item, index) => {
                return <StoreItemLi key={index} item={item} setCartItem={setCartItem} cartItem={cartItem}/>
            })}
        </ul>
    )
}

export default StoreItemUl