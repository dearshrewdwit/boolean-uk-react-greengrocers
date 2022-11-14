import {useState} from'react'
import StoreItem from './StoreItem'

function Store ({initialStoreItems, addCartItem}){
    const [storeItems, setStoreItems] = useState(initialStoreItems)
    const [fruit, setFruit] = useState(null)
    const [veg, setVeg] = useState(null)
    const [sortByPrice, setSortByPrice] = useState(null)
    const [sortByName, setSortByName] = useState(null)


    let filteredItems = storeItems

    const handleFruit = ()=>{
      filteredItems = storeItems.filter((item)=> item.type === 'fruit')
      setFruit(filteredItems)
      setVeg(null)
    }
    const handleVeg = ()=>{
      filteredItems = storeItems.filter((item)=> item.type === 'veg')
      setVeg(filteredItems)
      setFruit(null)
    }
    const handleAll = ()=>{
      filteredItems = storeItems
      setFruit(null)
      setVeg(null)
    }
    const handleSortByPrice = ()=>{
      setSortByName(null)
      setSortByPrice(filteredItems)
    }
    const handleSortByName = ()=>{
      setSortByPrice(null)
      setSortByName(filteredItems)
    }
    
    if (fruit !== null) filteredItems = fruit
    if (veg !== null) filteredItems = veg
    if (sortByPrice !== null) {
      filteredItems = filteredItems.sort(({price:a}, {price:b}) => a-b);
    }
    if (sortByName !== null) {
      function compare( a, b ) {
        if ( a.name < b.name ){
          return -1;
        }
        if ( a.name > b.name ){
          return 1;
        }
        return 0;
      }
      filteredItems = filteredItems.sort(compare)
    }
    console.log(filteredItems)
   
    return (
      
      <header id="store">
      <h1 className="shop-name">Greengrocers</h1>
      <div className="show-sort">
      <div>
        <h3 className='show-sort-title'>show</h3>
      <button onClick={handleFruit}>Fruit</button>
      <button onClick={handleVeg}>Veg</button>
      <button onClick={handleAll}>All</button>
      </div>
      <div>
        <h3 className='show-sort-title'>sort</h3>
      <button onClick={handleSortByPrice}>Price</button>
      <button onClick={handleSortByName}>Name</button>
      </div>
      </div>

        <ul className="item-list store--item-list">
          {
            filteredItems.map((item)=>
                <StoreItem item={item} addCartItem={addCartItem} />
            )
          }
        </ul>
        </header>

    )
}
export default Store