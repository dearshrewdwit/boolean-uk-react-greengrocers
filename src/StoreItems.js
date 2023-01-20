import { useState } from 'react'

import storeItems from './store-items'
//storeItems = [array of initialStoreItems]



function StoreSection(props) {
    const [storeItem, setStoreItem] = useState('name')

    return (
        <header id="store">
            <h1>Greengrocers</h1>
            <ul className="item-list store--item-list">
                {storeItems.map((item) =>
                    <li>
                        <div class="store--item-icon">
                            <img src={`/assets/icons/${item.id}.svg`} alt={item.name} />
                        </div>
                        {/* <button onClick={addItemToCart}>Add to cart</button> */}
                        <button onClick={() => {
                            console.log("you clicked:", item.name)
                            const pushedToCart = []
        
                            //need to add a quantity key
                            props.cart.push({ ...item, quantity: 1 })
                            console.log("item pushed into cart = []:", pushedToCart)
                            //now to add this to the cart array in app.js/copy and replace and rerender

                            console.log("props.cart", props.cart)
                        }

                        }>
                            Add to cart</button>
                    </li>
                )}
            </ul>
        </header >
    )
}

export default StoreSection