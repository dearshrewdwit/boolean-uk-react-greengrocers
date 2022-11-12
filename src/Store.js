import { useState } from "react"
import initialStoreItems from './store-items'

function Store (props) {    
    const {addToCart} = props
    const [storeItems , setStoreItems] = useState(initialStoreItems)

    return (
        <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
           { initialStoreItems.map ((item) => {
                 return (
                    <li>
                        <div>
                        <img src={`/assets/icons/${item.id}.svg`} alt={item.name} />
                        </div>
                        <button onClick={() => addToCart(item)}>Add to cart</button>
                    </li>
                )
            })}

        </ul>
      </header>

    )
}

export default Store
