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

  if (sort) {
    filteredStoreItems = filteredStoreItems.sort((a, b) => {
      const property1 = a.name.toUpperCase()
      const property2 = b.name.toUpperCase()
      return property1 < property2 ? -1 : property1 > property2 ? 1 : 0
    })
  } else {
    filteredStoreItems = filteredStoreItems.sort((a, b) => {
      const property1 = a.id.toUpperCase()
      const property2 = b.id.toUpperCase()
      return property1 < property2 ? -1 : property1 > property2 ? 1 : 0
    })
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
