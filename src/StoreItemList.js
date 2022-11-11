import { useState } from 'react'
import StoreItem from './StoreItem'

function StoreItemList(props) {
  const { storeItems, addToCart } = props

  return (
    <header id="store">
      <h1>Greengrocers</h1>
      <ul className="item-list store--item-list">
        {storeItems.map((singularItem, index) => (
          <StoreItem
            addToCart={addToCart}
            key={index}
            singularItem={singularItem}
          />
        ))}
      </ul>
    </header>
  )
}

export default StoreItemList
