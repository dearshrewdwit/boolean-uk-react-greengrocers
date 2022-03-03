import { useState } from "react"
import initialStoreItems from '../store-items'

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
            quantity: 1
        }
        props.setCartItems([...props.cartItems, itemsToCart])
    }
    return <ul className="item-list store--item-list">
        {storeItems.map(item => <li key={item.id}>
            <div class="store--item-icon">
                <img src={`/assets/icons/${item.id}.svg`} alt={item.name} />
            </div>
            <button onClick={(e) => addCartItem(item)}>Add to cart</button>
        </li>
        )}
    </ul>
}
export default StoreItem