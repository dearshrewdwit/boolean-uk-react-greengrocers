import Item from "./Item";
import initialStoreItems from './store-items'
import { useState } from "react";
import FilterByType from "./filter-by-type";




function Store(props) {
    const [storeItems, setStoreItems] = useState(initialStoreItems)
    const [filter, setFilter] = useState('')
    const [sort, setSort] = useState('')
    const fruit = storeItems.filter(item => item.type === "fruit")
    const veg = storeItems.filter(item => item.type === "veg")
    
        
    const filterItems = () => {
        let eValue = event.target.value;
        setFilter(eValue)
        console.log(eValue)
    }
    const sortItems = () => {
        let eValue = event.target.value;
        setSort(eValue)
        console.log(eValue)
        console.log(filterdList)
    }
    let filterdList = storeItems
    
    if(filter === 'all'){filterdList = storeItems}
    if(filter === 'Fruit'){filterdList = fruit}
    if(filter === 'Veg'){filterdList = veg}
    if(sort === 'price-accending'){filterdList.sort((a,b) => a.price - b.price)}
    if(sort === 'price-decending'){filterdList.sort((a,b) => a.price - b.price).reverse()}
    console.log("this is filterdList", filterdList )
    return (
        <ul className="item-list store--item-list">
            <FilterByType sort={sortItems} filter={filterItems} veg={veg} fruit={fruit} setStoreItems={setStoreItems} />
            {filterdList.map((item, index) => (
                <Item storeItem={item} key={index} addToCart={props.addToCart} />

            ))}
        </ul>
    )

}

export default Store;