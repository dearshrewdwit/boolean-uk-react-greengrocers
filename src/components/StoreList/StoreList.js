import StoreListItem from '../StoreListItem/StoreListItem'

function StoreList({ filteredItems, addItemToCart }) {
  return filteredItems.map(storeItem => (
    <StoreListItem
      storeItem={storeItem}
      addItemToCart={addItemToCart}
      key={storeItem.id}
    />
  ))
}

export default StoreList
