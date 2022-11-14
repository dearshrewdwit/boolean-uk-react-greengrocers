import StoreItem from './StoreItem.js'

function StoreItemList(props) {
  console.log('StoreItemsList invoked')
  return(
    <ul className="item-list store--item-list">
      {props.storeItems.map((storeItem) => (
        <StoreItem 
          key={storeItem.id} 
          storeItem={storeItem} 
          addItemToCart={props.addItemToCart}
        />
      ))}
      
    </ul>
  )
}

export default StoreItemList