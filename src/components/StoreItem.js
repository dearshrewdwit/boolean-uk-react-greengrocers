import { useState } from "react"
import initialStoreItems from '../store-items'
import Filters from "./Filters"

const StoreItem = props => {
    const [storeItems, setStoreItems] = useState(initialStoreItems)

    const addCartItem = item => {
        for (const inCart of props.cartItems) {
            if (inCart.id === item.id) {
                inCart.quantity++
                return
            }
        }
        const itemsToCart = {
            id: item.id,
            name: item.name,
            basePrice: +item.price,
            totalPrice: +item.price,
            quantity: 1,
            type: item.type
        }
        props.setCartItems([...props.cartItems, itemsToCart])

    }

    return <div>
        <Filters storeItems={storeItems} setStoreItems={setStoreItems} initialStoreItems={initialStoreItems}/>
        <ul className="item-list store--item-list">
            {storeItems.map(item => <li key={item.id}>
                <div class="store--item-icon">
                    <img src={`/assets/icons/${item.id}.svg`} alt={item.name} />
                </div>
                <button onClick={(e) => addCartItem(item)}>Add to cart</button>
            </li>
            )}
        </ul>
    </div>
}
export default StoreItem