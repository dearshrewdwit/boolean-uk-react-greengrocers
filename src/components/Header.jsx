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

    const vegItems = filterByType.filter((item) => item.type === 'veg')
    const fruitItems = filterByType.filter((item) => item.type === 'fruit')

    let storeItemList
    if (filter === 'fruit') storeItemList = fruitItems
    else if (filter === 'veg') storeItemList = vegItems
    else storeItemList = filterByType

    return (
        <header id="store">
            <h1>Greengrocers</h1>
            <div className="filter-container">
                <h2>Filter</h2>
                <button onClick={() => setFilter('none')}>No Filter</button>
                <button onClick={() => setFilter('fruit')}>Fruit</button>
                <button onClick={() => setFilter('veg')}>Vegetables</button>
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