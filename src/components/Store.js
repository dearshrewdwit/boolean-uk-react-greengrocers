import { useState } from 'react'

import StoreItem from './StoreItem'
import initialStoreItems from '../store-items'
import Description from './Description'

function Store({ addToCart }) {
  const [filterItems, setFilterItems] = useState('all')
  const [sort, setSort] = useState(false)
  const [showDescription, setShowDescription] = useState(null)

  let filteredStoreItems = initialStoreItems

  // Checking which categories need to be displayed. If the all button is clicked, we just display a copy of the entire store (above line)
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

  // Refactored into one function, takes in the store array and which property it needs to be sorted by. Uses dynamic object
  // properties to access the correct property (only works with square brackets)
  const sortItems = (storeItems, property) => {
    return storeItems.sort((a, b) => {
      const property1 = a[property].toUpperCase()
      const property2 = b[property].toUpperCase()
      return property1 < property2 ? -1 : property1 > property2 ? 1 : 0
    })
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
      <p className="instructions">
        {showDescription === null &&
          'Click on a product to see a description (If you dont know what fruit or vegetables are)'}
      </p>
      <ul className="item-list store--item-list">
        {showDescription === null &&
          filteredStoreItems.map(product => {
            return (
              <StoreItem
                key={product.id}
                product={product}
                addToCart={addToCart}
                setShowDescription={setShowDescription}
              />
            )
          })}
        {/* If item isn't null, the product description opens instead of the whole store */}
        {showDescription && (
          <Description
            product={showDescription}
            setShowDescription={setShowDescription}
          />
        )}
      </ul>
    </header>
  )
}

export default Store
