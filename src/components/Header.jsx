import { useState } from "react"
import StoreItem from "./StoreItem"

function Header({store, addItem, cartItem, setCartItem}) {

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

    // EXTENSION 1
    const [filter, setFilter] = useState('none')
    const [sort, setSort] = useState('none')

    const vegItems = filterByType.filter((item) => item.type === 'veg')
    const fruitItems = filterByType.filter((item) => item.type === 'fruit')

    function alphabetical() {
        const AToZ = filterByType.sort((a, b) => {
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
    
    function reverseAlphabetical() {
        return alphabetical().reverse()
    }

    let storeItemList
    if (filter === 'fruit') storeItemList = fruitItems
    else if (filter === 'veg') storeItemList = vegItems
    else if (sort === 'AToZ') storeItemList = alphabetical()
    else if (sort === 'ZToA') storeItemList = reverseAlphabetical()
    else storeItemList = filterByType

    return (
        <header id="store">
            <h1>Greengrocers</h1>
            <div className="sort-filter-container">
                <div className="filter-container">
                    <h2>Filter</h2>
                    <button onClick={() => setFilter('none')}>No Filter</button>
                    <button onClick={() => setFilter('fruit')}>Fruit</button>
                    <button onClick={() => setFilter('veg')}>Vegetables</button>
                </div>
                <div className="sort-container">
                    <h2>Sort</h2>
                    <button onClick={() => setSort('none')}>No Sort</button>
                    <button onClick={() => setSort('AToZ')}>A-Z</button>
                    <button onClick={() => setSort('ZToA')}>Z-A</button>
                </div>
            </div>
            <ul className="item-list store--item-list">
                {storeItemList.map((item) =>
                    <StoreItem key={item.id} item={item} addItem={addItem} cartItem={cartItem} setCartItem={setCartItem} />   
                )}
            </ul>
        </header>
    )
}

export default Header