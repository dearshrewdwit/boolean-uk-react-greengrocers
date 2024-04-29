import Filter from './Filter'
import StoreItemUl from './StoreItemUl'
import { useState } from 'react'
import initialStoreItems from '../../store-items'

function Header({ setCartItem, cartItem}) {
    const [storeItems, setStoreItems] = useState(initialStoreItems)
    const [filteredItems, setFilteredItems] = useState(storeItems)

    return (
        <header id="store">
            <h1>Greengrocers</h1>
            <Filter setFilteredItems={setFilteredItems} storeItems={storeItems}/>
            <StoreItemUl setCartItem={setCartItem} cartItem={cartItem} filteredItems={filteredItems}/>
        </header>
    )
}

export default Header