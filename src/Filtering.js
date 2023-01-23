import initialStoreItems from './store-items'
import {useState} from 'react'
export default function Filtering({setStoreItem}) {

    const [filteredArray, setFilteredArray] = useState(initialStoreItems)
    function sortAToZ(a, b) {
        if ( a.name < b.name ){
            return -1;
          }
          if ( a.name > b.name ){
            return 1;
          }
          return 0;
    }
    function sortZtoA(a, b) {
        if ( a.name > b.name ){
            return -1;
          }
          if ( a.name < b.name ){
            return 1;
          }
          return 0;
    }
    
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
            setFilteredArray(fruitItems)
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
            setFilteredArray(vegItems)
            setStoreItem(vegItems)
        }}
        >Vegetables</button>
        <button
        onClick={() => {
            setFilteredArray(initialStoreItems)
            setStoreItem(initialStoreItems)
        }}
        >Reset</button>
        <button
        onClick={() => {
            const sortThisArray = [...filteredArray]
            const alphabetArray = sortThisArray.sort(sortAToZ)
            setStoreItem(alphabetArray)
        }}
        >A to Z</button>
        <button
        onClick={() => {
            const sortThisArray = [...filteredArray]
            const alphabetArray = sortThisArray.sort(sortZtoA)
            setStoreItem(alphabetArray)
        }}
        >Z to A</button>
    </div> 
    )
}