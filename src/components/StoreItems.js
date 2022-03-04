// import storeItems from '../store-items'

function StoreItems(props) {

  const addItemToCart = target => {
    const itemExists = props.cart.find(item => item.id === target.id)
    if (itemExists) props.setCart(cart => cart.map(item => item.id === target.id ? {...item, quantity: item.quantity+1} : item))
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