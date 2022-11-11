import { useState } from 'react'

import StoreItem from './StoreItem'
import initialStoreItems from '../store-items'

function Store({ addToCart }) {
  const [filterItems, setFilterItems] = useState('all')
  const [sort, setSort] = useState(false)

  let filteredStoreItems = initialStoreItems

  if (filterItems === 'fruit') {
    filteredStoreItems = filteredStoreItems.filter(
      item => item.type === 'fruit'
    )
  }

  if (filterItems === 'vegetables') {
    filteredStoreItems = filteredStoreItems.filter(
      item => item.type === 'vegetable'
    )
  }

  const sortItems = (storeItems, property) => {
    return (storeItems = storeItems.sort((a, b) => {
      const property1 = a[property].toUpperCase()
      const property2 = b[property].toUpperCase()
      return property1 < property2 ? -1 : property1 > property2 ? 1 : 0
    }))
  }

  if (sort) {
    filteredStoreItems = sortItems(filteredStoreItems, 'name')
  } else {
    filteredStoreItems = sortItems(filteredStoreItems, 'id')
  }

  return (
    <header id="store">
      <h1>Greengrocers</h1>
      <div className="btn-container">
        <button onClick={() => setFilterItems('all')}>All</button>
        <button onClick={() => setFilterItems('fruit')}>Fruit</button>
        <button onClick={() => setFilterItems('vegetables')}>Vegetables</button>
        <button onClick={() => setSort(!sort)}>Sort A-Z</button>
      </div>
      <ul className="item-list store--item-list">
        {filteredStoreItems.map(product => {
          return (
            <StoreItem
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          )
        })}
      </ul>
    </header>
  )
}

export default Store
