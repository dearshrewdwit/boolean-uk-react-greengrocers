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

                        <button onClick={() => {
                            console.log("you clicked:", item.name)

                            //if item.id !== same as in cart, add to cart with quantity: 1
                            let existingCartItem = undefined
                            for (let i = 0; i < props.cart.length; i++) {
                                const cartItem = props.cart[i]
                                console.log('before if to fill undefined  statement')
                                if (cartItem.id === item.id) {
                                    existingCartItem = cartItem
                                    break
                                }
                            }

                            if (existingCartItem !== undefined) {
                                console.log('You clicked on existing item! cart size:', props.cart.length)
                                // cart already has groceryItem in it!
                                // increment

                                return { ...props.cart, quantity: quantity++ }

                                // props.cart.quantity += 1
                                // // console.log(" existingCartItem.quantity += 1:", existingCartItem)
                                // // props.setCartItem(existingCartItem)
                                // console.log('You clicked on existing item! props.cart item quantity:', props.cart.quantity)
                            }

                            else {
                                //need to add a quantity key
                                props.cart.push({ ...item })
                                console.log("item pushed into cart = []:", props.cart)

                                //now to add this to the cart array in app.js/copy and replace and rerender
                                const newCart = [...props.cart] // copy the cart contents, creating a new array
                                // add a new cart item, by copying the current item and adding a quantity property and pushing it
                                // into the new cart
                                newCart.push({ ...item, quantity: 1 })
                                // update the cart
                                props.setCartItem(newCart)

                                console.log("props.cart", props.cart)
                            }
                        }
                        }


                        >
                            Add to cart</button>
                    </li>
                )}
            </ul>
        </header >
    )
}

export default StoreSection