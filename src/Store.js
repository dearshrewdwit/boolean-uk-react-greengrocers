
import initialStoreItems from './store-items'
import { useState } from 'react'

export default function Store (props) {
    
    const [storeItemsArray, setStoreItemsArray] = useState(initialStoreItems)
    return (
        <>
        {storeItemsArray.map((item) => (
            <li>
            <img className="store--item-icon " src={`./assets/icons/${item.id}.svg`}></img>
            <button onClick={() => props.addItemToCart(item)} >Add To Cart</button>
        </li>
        ))}
    
    </>
    )
}