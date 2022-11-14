import ItemImage from './ItemImage'

function StoreItem(props) {
  console.log('StoreItem invoked')
  return(
    <li>
      <div className="store--item-icon">
        <ItemImage item={props.storeItem}/>
      </div>
      <button onClick={() => props.addItemsToCart(props.storeItem)}>Add to cart</button>
    </li> 
  )
}

export default StoreItem