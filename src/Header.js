import { useState } from 'react'
import initialStoreItems from './store-items'
import Filtering from './Filtering'

export default function Header({cartItem, setCartItem, priceUpdate}) {
    const [storeItem, setStoreItem] = useState(initialStoreItems)
    const [showDetails, setShowDetails] = useState(false)

    // function capitalise(string) {
    //     return string.charAt(0).toUpperCase() + string.slice(1);
    //   }

    return (
        <header id="store">
        <h1>Greengrocers</h1>
        <Filtering 
        setStoreItem = {setStoreItem}
        />
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
                        // We check the cart to see if this item is already there.
                        const checker = cartItem.find((element) => {
                            return element.name == item.name
                        })
                        // If undefined (none found in the .find above)
                        // create new object, spread old obj and add quantity value.
                        // create new array, sread old arr and add new object.
                        if(checker === undefined){
                            const newCartItem = {...item, quantity: 1}
                            const newCart = [...cartItem, newCartItem]
                            setCartItem(newCart)
                        } else {
                            // Else we just increase the quantity of the found item
                            // from the .find above.
                            // Create a new array, and spread the old array into it because
                            // we have changed values inside it and need a re-render.
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