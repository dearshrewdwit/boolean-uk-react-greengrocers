import CartItems from "./CartItems"

function StoreItem({item, store, cartItem, setCartItem}) {



    function addToCart(item) {
      const selectedItem = store.filter((storeItem) => {
        if (storeItem === item) {
          return {
            ...storeItem,
            quantity: 1
          }
        }
      })
      setCartItem(selectedItem)
    }

    return (
            <li>
            <div className="store--item-icon">
                <img src={`/assets/icons/${item.id}.svg`} alt={item.name} />
            </div>
            <button onClick={() => addToCart(item)}>Add to cart</button>
            </li>
    )
}
export default StoreItem