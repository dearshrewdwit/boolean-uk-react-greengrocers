import initialStoreItems from './store-items'
export default function Filtering({setStoreItem}) {
    return (
        <div className="filter-buttons">
        <button
        onClick={() => {
            const allItems = [...initialStoreItems]
            const fruitItems = allItems.filter((item) => {
                if(item.type === "fruit") {
                    return true
                } else {
                    return false
                }
            })
            setStoreItem(fruitItems)
        }}
        >Fruit</button>
        <button
        onClick={() => {
            const allItems = [...initialStoreItems]
            const vegItems = allItems.filter((item) => {
                if(item.type === "vegetable") {
                    return true
                } else {
                    return false
                }
            })
            setStoreItem(vegItems)
        }}
        >Vegetables</button>
        <button
        onClick={() => {
            setStoreItem(initialStoreItems)
        }}
        >All</button>
    </div> 
    )
}