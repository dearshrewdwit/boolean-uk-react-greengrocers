import storeItems from '../store-items'

function StoreItems(props) {
  
  const addItemToCart = item => {
    //check if the item exists in the cart already - will return undefined if not.
    const itemExists = props.cart.find(cartItem => cartItem.id === item.id)
  
    //if item exists update that items quantity key by 1
    if (itemExists) props.setCart(cart => cart.map(cartItem => cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity+1} : cartItem))
    
    //otherwise add the item and add a new key of quantity, with the value of 1.
    else props.setCart(cart => [...cart, {...item, ["quantity"]: 1}])
  }

  return (
    <ul className="item-list store--item-list">
      {storeItems.map((storeItem, index) => (
        <li key={index}>
          <div class="store--item-icon">
            <img src={`/assets/icons/${storeItem.id}.svg`} alt={storeItem.name} />
          </div>
          <button onClick={() => {addItemToCart(storeItem)}}>Add to cart</button>
        </li>
      ))}
    </ul>
  )
}

export default StoreItems