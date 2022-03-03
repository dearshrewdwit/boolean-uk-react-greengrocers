function Cart(props) {

  const removeItem = target => {
    props.setCart(props.cart.filter(item => item !== target))
  }

  const decreaseItemQuantity = target => {
    const updatedCart = props.cart.map(item =>
      item === target ? { ...item, quantity: item.quantity-1 } : item
    )
    props.setCart(updatedCart)
  }

  const increaseItemQuantity = target => {
    const updatedCart = props.cart.map(item =>
      item === target ? { ...item, quantity: item.quantity+1 } : item
    )
    props.setCart(updatedCart)
  }

  const lowerOrRemove = target => {
    if (target.quantity > 1) {
        decreaseItemQuantity(target)
    }
    else {
        removeItem(target)
    }
  }

  return (
    <ul className="item-list cart--item-list">
      {props.cart.map((cartItem, index) => (
        <li key={index}>
          <img
            class="cart--item-icon"
            src={`/assets/icons/${cartItem.id}.svg`}
            alt={cartItem.name}
          />
          <p>{cartItem.name}</p>
          <button
            class="quantity-btn remove-btn center"
            onClick={() => {
              lowerOrRemove(cartItem)
            }}
          >
            -
          </button>
          <span class="quantity-text center">{cartItem.quantity}</span>
          <button class="quantity-btn add-btn center"
          onClick={() => {increaseItemQuantity(cartItem)}}
          >+</button>
        </li>
      ))}
    </ul>
  )
}

export default Cart
