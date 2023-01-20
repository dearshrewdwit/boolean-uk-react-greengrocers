import { useState } from 'react'
import initialStoreItems from './store-items'

export default function Header({cartItem, setCartItem, priceUpdate}) {
    const [storeItem, setStoreItem] = useState(initialStoreItems)

    return (
        <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {storeItem.map((item, index) => {
            return (
                <li key={index}>
                    <div className="store--item-icon">
                        <img 
                        src={`/assets/icons/${item.id}.svg`} 
                        alt={item.name} 
                        />
                    </div>
                    <button
                    onClick={() => {
                        const checker = cartItem.find((element) => {
                            return element.name == item.name
                        })
                        if(checker === undefined){
                            const newCartItem = {...item, quantity: 1}
                            const newCart = [...cartItem, newCartItem]
                            setCartItem(newCart)
                        } else {
                            checker.quantity++
                            const newCart = [...cartItem]
                            setCartItem(newCart)
                        }
                        priceUpdate(item.price)
                    }}
                    >Add to cart</button>
                </li>
            )
          })}
        </ul>
      </header>
    )
}