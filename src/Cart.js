function Cart(props) {
  // This decrease function takes the item argument which is the item name returned from the listener,
  // then is checks if the cart has more than 1 of the item in it, if it does it maps the cart with
  // the item to be decreased being mappped with the quatity value reduced by 1 and the rest of the items
  // returned as a copy unaltered. If the quantity of the item is 1 then it filters the cart and leaves
  // out the item that has been clicked as that is the functionality required when clicking remove on 1 item
  const decreaseItem = item => {
    if (item.quantity > 1) {
      setCart(
        cart.map(existingItem =>
          existingItem.name === item.name
            ? { ...existingItem, quantity: existingItem.quantity - 1 }
            : existingItem
        )
      )
    } else if (item.quantity === 1)
      setCart(cart.filter(existingItem => existingItem !== item))
  }
  // The increase function works by mapping the cart array, when it finds the item that has been clicked it
  // adds 1 onto the quantity of the item and then sets the value of the cart array to that mapped array and
  // this causes the cart to re-render
  const increaseItem = item => {
    setCart(
      cart.map(existingItem =>
        existingItem.name === item.name
          ? { ...existingItem, quantity: existingItem.quantity + 1 }
          : existingItem
      )
    )
  }

  return props.cart.map((item, index) => {
    return (
      <li key={index}>
        <img
          className="cart--item-icon"
          src={`/assets/icons/${item.id}.svg`}
          alt={item.name}
        />
        <p>{item.name}</p>
        <button
          onClick={() => decreaseItem(item)}
          className="quantity-btn remove-btn center"
        >
          -
        </button>
        <span className="quantity-text center">{item.quantity}</span>
        <button
          onClick={() => increaseItem(item)}
          className="quantity-btn add-btn center"
        >
          +
        </button>
      </li>
    )
  })
}

export default Cart
