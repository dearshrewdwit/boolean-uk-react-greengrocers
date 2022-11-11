import { useState } from 'react'

import StoreItem from './StoreItem'
import initialStoreItems from '../store-items'

function Store({ addToCart }) {
  const [filterItems, setFilterItems] = useState('all')

  let filteredStoreItems = initialStoreItems

  if (filterItems === 'fruit') console.log('displaying fruit')
  if (filterItems === 'vegetables') console.log('displaying vegetables')
  if (filterItems === 'all') console.log('displaying all products')

  return (
    <header id="store">
      <h1>Greengrocers</h1>
      <div className="btn-container">
        <button onClick={() => setFilterItems('all')}>All</button>
        <button onClick={() => setFilterItems('fruit')}>Fruit</button>
        <button onClick={() => setFilterItems('vegetables')}>Vegetables</button>
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
