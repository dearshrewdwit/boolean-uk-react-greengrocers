import initialStoreItems from '../store-items'
import { useState } from 'react'

// eslint-disable-next-line react/prop-types
function Header({ addCartItem }) {

    const [storeItems] = useState(initialStoreItems)

    return (
        <header id="store">
            <h1>Greengrocers</h1>
            <ul className="item-list store--item-list">
                {storeItems.map((item, index) => (
                    <li key={`${item.name}${index}`}>
                        <div className="store--item-icon">
                            <img src={`/assets/icons/${item.id}.svg`} alt={item.name} />
                        </div>
                        <button
                            onClick={() => { addCartItem(item) }}
                        >Add to cart</button>
                    </li>
                ))}
            </ul>
        </header>
    )
}

export default Header