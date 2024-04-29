import StoreItemLi from './StoreItemLi'

function StoreItemUl({ setCartItem, cartItem, filteredItems, details, setDetails}) {
    return (
        <ul className="item-list store--item-list">
            {filteredItems.map((item, index) => {
                return <StoreItemLi key={index} item={item} setCartItem={setCartItem} cartItem={cartItem} details={details} setDetails={setDetails}/>
            })}
        </ul>
    )
}

export default StoreItemUl