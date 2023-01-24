import { useState } from 'react'

import storeItems from './store-items'
//storeItems = [array of initialStoreItems]

function StoreSection(props) {
    const [storeItem, setStoreItem] = useState(storeItems)

    return (
        <header id="store">
            <h1>Greengrocers</h1>
            <ul className="item-list store--item-list">
                {storeItems.map((item) =>
                    <li key={item.id}>
                        <div className="store--item-icon">
                            <img src={`/assets/icons/${item.id}.svg`} alt={item.name} />
                        </div>

                        <button onClick={() => {
                            //use array.find() bec it returns the first matching item in the cart (then update it)
                            const inCart = props.cart.find(cartItem => cartItem.id === item.id)
                            if (inCart) {
                                console.log("hi already in cart")
                                //update state: see immutable state powerpoint slide 12
                                const newCartQuantity = props.cart.map(inCartItem => {
                                    if (inCartItem.id === item.id) {
                                        return { ...inCartItem, quantity: inCartItem.quantity + 1 }
                                    }
                                    return inCartItem
                                })
                                props.setCartItem(newCartQuantity)
                            }
                            else {
                                // copy the cart contents, creating a new array
                                const newCart = [...props.cart]
                                // add a new cart item, by copying the current item, adding a quantity property and pushing it
                                // into the new cart
                                newCart.push({ ...item, quantity: 1 })
                                // update the cart
                                props.setCartItem(newCart)

                                props.handleTotal()
                            }
                        }}
                        > Add to cart</button>
                    </li>
                )}
            </ul>
        </header >
    )
}

export default StoreSection