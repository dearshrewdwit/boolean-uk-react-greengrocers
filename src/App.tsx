import './styles/reset.css'
import './styles/index.css'
import { useState } from 'react'

import { initialStoreItems, StoreItemType } from './store-items'
import StoreList from './StoreList'
import CartList from './CartList'

export type CartItemType = {
    count: number
} & StoreItemType

export default function App() {
    const [storeItems, setStoreItems] =
        useState<StoreItemType[]>(initialStoreItems)
    const [cartItems, setCartItems] = useState<CartItemType[]>([])

    return (
        <>
            <StoreList
                storeItems={storeItems}
                cartItems={cartItems}
                setCartItems={setCartItems}
            />
            <CartList cartItems={cartItems} setCartItems={setCartItems} />
            <div>
                Icons made by
                <a
                    href='https://www.flaticon.com/authors/icongeek26'
                    title='Icongeek26'
                >
                    Icongeek26
                </a>
                from
                <a href='https://www.flaticon.com/' title='Flaticon'>
                    www.flaticon.com
                </a>
            </div>
        </>
    )
}
