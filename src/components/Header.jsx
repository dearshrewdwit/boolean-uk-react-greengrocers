import { useState } from 'react'
import initialStoreItems from '../store-items'

export default function Header ({setBasket, basket}) {
    const [storeItems, setStoreItems] = useState(initialStoreItems)

    const storeItemsCopy = JSON.parse(JSON.stringify(storeItems))
    
    function addToBasket (e) {
        const itemIndex = e.target.value

        const item = storeItemsCopy[itemIndex]
        item.quantity = 1
        // console.log(item)

        // add a check to see if item name is in the array
        let inBasket = false
        let basketIndex = ""
        basket.forEach((itemInBasket, index) => {
            // console.log(itemInBasket)
            if (itemInBasket.name === item.name) {
                inBasket = true
                basketIndex = index
            }
        })

        if (inBasket === false) {
            setBasket([...basket, item])
            // console.log(basketIndex)
        }
        else {
            // need to find the item in basket and update quantity
            // console.log(basketIndex)
            basket[basketIndex].quantity += 1
            setBasket([...basket])
        }

        inBasket = false
    }


    return (
        <header id="store">
            <h1>Greengrocers</h1>
            <ul className="item-list store--item-list">
                {storeItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <div className="store--item-icon">
                                <img src={`../../assets/icons/${item.id}.svg`} alt={item.name} />
                            </div>
                            <button onClick={addToBasket} value={index}>Add to cart</button>
                        </li>
                    )
                })}
            </ul>
        </header>
    )
}