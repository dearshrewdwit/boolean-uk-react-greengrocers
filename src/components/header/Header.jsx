import Filter from './Filter'
import StoreItemUl from './StoreItemUl'
import { useState } from 'react'
import initialStoreItems from '../../store-items'
import Sort from './Sort'

function Header({ setCartItem, cartItem}) {
    const [storeItems] = useState(initialStoreItems)
    const [sortedItems, setSortedItems] = useState('')
    const [filteredItems, setFilteredItems] = useState(storeItems)

    if (sortedItems === "alphabetically") {
        filteredItems.sort((a, b) => {
            return a.name.localeCompare(b.name)
        })
    } else if (sortedItems === 'price') {
        filteredItems.sort((a, b) => {
            return a.price - b.price
        })
    }

    return (
        <header id="store">
            <h1>Greengrocers</h1>
            <Filter setFilteredItems={setFilteredItems} storeItems={storeItems}/>
            <Sort filteredItems={filteredItems} setSortedItems={setSortedItems}/>
            <StoreItemUl setCartItem={setCartItem} cartItem={cartItem} filteredItems={filteredItems}/>
        </header>
    )
}

export default Header