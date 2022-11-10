import {useState} from'react'
import StoreItem from './StoreItem'

function Store ({initialStoreItems, addCartItem}){
    const [storeItems, setStoreItems] = useState(initialStoreItems)

    return (
        <ul className="item-list store--item-list">
          {
            storeItems.map((item)=>
                <StoreItem item={item} addCartItem={addCartItem} />
            )
          }
        </ul>
    )
}
export default Store