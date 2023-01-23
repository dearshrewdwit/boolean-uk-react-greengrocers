import './styles/store.css'
import { useState } from 'react'
import ItemDetails from './ItemDetails'
import initialStoreItems from './store-items'

const Store = ({addItemToCart, selectedFilters, sortType}) => {

  const [isItemSelected, setIsItemSelected] = useState()
  const [selectedItem, setSelectedItem] = useState()

  let itemsToRender = []
  let sortedItems = []

  if (selectedFilters.length === 0) {
    itemsToRender = initialStoreItems
  } else {
    itemsToRender = initialStoreItems.filter((item) => {
      if (selectedFilters.includes(item.type)) return true
      else return false
     })
  }

  const itemsToSort = itemsToRender.map(item=>item)

  switch(sortType) {
    case 'AtoZ': 
      sortedItems = itemsToSort.sort((a, b) => (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0)
      break
    case 'ZtoA': 
      sortedItems = itemsToSort.sort((a, b) => (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0).reverse()
      break
    case 'lowToHigh': 
      sortedItems = itemsToSort.sort((a, b) => (a.price - b.price < 0) ? -1 : (a.price - b.price > 0) ? 1 : 0)
      break
    case 'highToLow': 
      sortedItems = itemsToSort.sort((a, b) => (a.price - b.price < 0) ? -1 : (a.price - b.price > 0) ? 1 : 0).reverse()
      break
    default: 
      sortedItems = itemsToSort
      break
  }

  return (
    <ul className="item-list store--item-list">
      {sortedItems.map((item, index) => {
        return (
          <li key={index} onClick={()=>{setSelectedItem(item), setIsItemSelected(true), console.log('nice click')}}>
            <div className="store--item-icon">
              <img src={`/assets/icons/${item.id}.svg`} alt={item.name} />
            </div>
            <button onClick={()=>addItemToCart(item)}>Add to cart</button>
          </li>
        )
      })}
      {isItemSelected === true && <ItemDetails item={selectedItem} setIsItemSelected={setIsItemSelected} addItemToCart={addItemToCart}/>}
    </ul>
  )
}

export default Store