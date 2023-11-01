import { useState } from "react"
import StoreItem from "./StoreItem"
import FilterSort from "./FilterSort"

function Header({store, addItem, cartItem, setCartItem}) {

    // EXTENSION 1
    const [filter, setFilter] = useState('none')
    const [sort, setSort] = useState('none')

    const filterByType = store.map((item) => {
        if (item.name === 'beetroot' || item.name === 'carrot') {
          return {
            ...item,
            type: 'veg'
          }
        }
        else {
          return {
            ...item,
            type: 'fruit'
          }
        }
    })

    const vegItems = filterByType.filter((item) => item.type === 'veg')
    const fruitItems = filterByType.filter((item) => item.type === 'fruit')
    
    function alphabetical(list) {
        const AToZ = list.sort((a, b) => {
            const nameA = a.name.toUpperCase()
            const nameB = b.name.toUpperCase()
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
        })
        return AToZ
    }
    
    let storeItemList
        
    if (filter === 'fruit' && sort === 'AToZ') storeItemList = alphabetical(fruitItems)
    else if (filter === 'fruit' && sort === 'ZToA') storeItemList = alphabetical(fruitItems).reverse()
    else if (filter === 'veg' && sort === 'AToZ') storeItemList = alphabetical(vegItems)
    else if (filter === 'veg' && sort === 'ZToA') storeItemList = alphabetical(vegItems).reverse()
    else if (filter === 'fruit') storeItemList = fruitItems
    else if (filter === 'veg') storeItemList = vegItems
    else if (sort === 'AToZ') storeItemList = alphabetical(filterByType)
    else if (sort === 'ZToA') storeItemList = alphabetical(filterByType).reverse()
    else storeItemList = filterByType

    return (
        <header id="store">
            <h1>Greengrocers</h1>
            <FilterSort setSort={setSort} setFilter={setFilter} />
            <ul className="item-list store--item-list">
                {storeItemList.map((item) =>
                    <StoreItem key={item.id} item={item} addItem={addItem} cartItem={cartItem} setCartItem={setCartItem} />   
                )}
            </ul>
        </header>
    )
}

export default Header