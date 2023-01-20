import { useState } from 'react'
import initialStoreItems from './store-items'

//props.cartItems
function StoreSection(props) {
    //maybe?
    // const storeItems = initialStoreItems

    return (
        <header id="store">
            <h1>Greengrocers</h1>
            <ul className="item-list store--item-list">
                {initialStoreItems.map((item) =>
                    <li>
                        <div class="store--item-icon">
                            <img src={`/assets/icons/${item.id}.svg`} alt={item.name} />
                        </div>
                        <button onClick={() =>
                            console.log("item clicked:", `${item.name}`)
                            //if not already in cartarray props.cart? (then later cart ={cart})

                            // {props.setCartItem}([ ...InsideCart[i], quantity: 1])
                        }>Add to cart</button>
                    </li>
                )}
        </ul>
        </header >
    )
}

export default StoreSection