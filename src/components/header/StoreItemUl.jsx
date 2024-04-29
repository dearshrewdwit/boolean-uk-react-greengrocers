import { useState } from 'react'
import initialStoreItems from '../../store-items'
import StoreItemLi from './StoreItemLi'

function StoreItemUl() {
    const [storeItems, setStoreItems] = useState(initialStoreItems)

    return (
        <ul className="item-list store--item-list">
            {storeItems.map((item, index) => {
                return <StoreItemLi key={index} item={item}/>
            })}
        </ul>
    )
}

export default StoreItemUl