import initialStoreItems from './store-items'
import { useState } from 'react'

// rendering store items into Store by creating function with map method in jsx inline to show in the browser 
// calling addToCart function from App.js to add in the Cart in button onlick 
function Store(props) {
  
  const [storeItems, setStoreItems] = useState(initialStoreItems)

  return (
    <ul className="item-list store--item-list">
      {storeItems.map((item, index) => {
        return (
          <li>
            <div class="store--item-icon">
              <img src={`/assets/icons/${item.id}.svg`} alt={item.name} />
            </div>
            <button onClick={()=> props.addToCart(item)} >Add to cart</button>
          </li>
        )
      })}

    </ul>
  )
}

export default Store
