// import storeItems from '../store-items'

function StoreItems(props) {

  const addItemToCart = target => {
    //check if the item exists in the cart already - will return undefined if not.
    const itemExists = props.cart.find(item => item.id === target.id)
  
    //if item exists update that items quantity key by 1
    if (itemExists) props.setCart(cart => cart.map(item => item.id === target.id ? {...item, quantity: item.quantity+1} : item))
    
    //otherwise add the item and add a new key of quantity, with the value of 1.
    else props.setCart(cart => [...cart, {...target, "quantity": 1}])
  }

  return (
    <ul className="item-list store--item-list">
      {props.storeItems.map((storeItem, index) => (
        <li key={index}>
          <div class="store--item-icon" onClick={() => props.setSelectedStoreItem(storeItem)}>
            <img src={`/assets/icons/${storeItem.id}.svg`} alt={storeItem.name} />
          </div>
          <button onClick={() => {addItemToCart(storeItem)}}>Add to cart</button>
        </li>
      ))}
    </ul>
  )
}

export default StoreItems