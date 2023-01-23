//import { useState } from "react"
import initialStoreItems from './store-items'
console.log(initialStoreItems)

export default function Header (props) {
   // const [storeItems, setstoreItems] = useState(initialStoreItems)
  

return (
    <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {props.storeItems.map(storeItem => (
            <li key={storeItem.id}>
              <div className="store--item-icon">
                <img
                  src={`/assets/icons/${storeItem.id}.svg`}
                  alt={storeItem.name}
                />
              </div>
              <button onClick={() => props.addItemToCart(storeItem)}>Add to cart</button>
            </li>
          ))}
        </ul>
      </header>
)
}