import { storeItems, FilterItemCategories, FilterTypes} from '../store-items.js'
import StoreItemList from './StoreItemList.js'
import { useState } from 'react'

function Store(props) {
  console.log('Store invoked')
  console.log(storeItems)

  const [filterType, setFilterType] = useState(FilterTypes.ByPrice)

  console.log([filterType])

  const [filters, setFilters] = useState({
    [FilterItemCategories.Veg]: true,
    [FilterItemCategories.Fruit]: true,
  })

  console.log(filters)

  const toggleFilter = (category) => {
    setFilters({ ...filters, [category]: !filters[category] })
  }

  console.log(filters)

  const sortFunctions = {
    [FilterTypes.ByPrice] : (a, b) => b.price - a.price,
    [FilterTypes.ByName] : (a, b) => a.name.localeCompare(b.name)
  }

  console.log(sortFunctions)

  const filteredStoreItems = storeItems.filter(storeItem => filters[storeItem.category])

  console.log(filteredStoreItems)

  filteredStoreItems.sort(sortFunctions[filterType])

  

  return (
    <header id="store">
      <h1>Greengrocers</h1>
      <label>
        Sort by:
        <select onChange={(event) => setFilterType(event.target.value)} value={filterType}>
          <option value={FilterTypes.ByPrice}>Price</option>
          <option value={FilterTypes.ByName}>Alphabetically</option>
        </select>
      </label>
      <div>
        <label>
          <input 
            type='checkbox'
            checked={filters[FilterItemCategories.Fruit]}
            onChange={() => toggleFilter(FilterItemCategories.Fruit)}
          />
          Show Fruit
        </label>
        <label>
          <input 
            type='checkbox'
            checked={filters[FilterItemCategories.Veg]}
            onChange={() => toggleFilter(FilterItemCategories.Veg)}
          />
          Show Vegetables
        </label>
      </div>
      <StoreItemList
        storeItems={filteredStoreItems} addItemToCart={props.addItemToCart}
      />  
    </header>
  )
}

export default Store