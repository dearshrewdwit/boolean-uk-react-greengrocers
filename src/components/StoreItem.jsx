import { useState } from 'react'

export default function StoreItem({ item, addToCart }) {
    const [active, setActive] = useState(false)
    return (
        <li className='store-item' onClick={() => setActive(!active)}>
            <img
                className="store--item-icon"
                src={`assets/icons/${item.id}.svg`}
                alt={item.name}
            />
            <p>{item.name}</p>
            {
                active ?
                    <div className='details'>
                        <p>Price: £{item.price}</p>
                        <p>Type: {item.type}</p>
                    </div>
                    : null
            }
            <button onClick={() => addToCart(item)}>Add to Cart</button>
        </li>
    )
}