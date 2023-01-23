import Item from "./Item";
import initialStoreItems from './store-items'
import { useState } from "react";
import FilterByType from "./filter-by-type";




function Store(props) {
    const [storeItems, setStoreItems] = useState(initialStoreItems)
    const [filter, setFilter] = useState([])
    const fruit = storeItems.filter(item => item.type === "fruit")
    const veg = storeItems.filter(item => item.type === "veg")
        
    const filterItems = () => {
        let eValue = event.target.value;
        setFilter(eValue)
        console.log(eValue)
    }

    let filterdList = storeItems
    if(filter === 'all'){filterdList = storeItems}
    if(filter === 'Fruit'){filterdList = fruit}
    if(filterdList === 'veg'){filterdList = veg}
    return (
        <ul className="item-list store--item-list">
            <FilterByType filter={filterItems} veg={veg} fruit={fruit} setStoreItems={setStoreItems} />
            {filterdList.map((item, index) => (
                <Item storeItem={item} key={index} addToCart={props.addToCart} />

            ))}
        </ul>
    )

}

export default Store;