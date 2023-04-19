import React from 'react'

function StoreItem({ item, hadleAddToCartButton }) {
  return (
    <li>
      <div className="store--item-icon">
        <img src={`/assets/icons/${item.id}.svg`} alt={item.name} />
      </div>
      <button onClick={() => hadleAddToCartButton(item)}>Add to cart</button>
    </li>
  )
}

export default StoreItem
