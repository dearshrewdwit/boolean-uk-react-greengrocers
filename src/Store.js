

function Store(props) {

    const addToCart = item => {
        // Check if the item is already in the cart and then use as a boolean
        const alreadyInCart = props.cart.find(
          existingItem => existingItem.name === item.name
        )
        // if Boolean is true, setCart to equal the new map array with the item quantity incremented and the rest of the items
        // are added as copies that are not altered
        if (alreadyInCart)
          props.setCart(
            props.cart.map(existingItem =>
              existingItem.name === item.name
                ? { ...existingItem, quantity: existingItem.quantity + 1 }
                : existingItem
            )
          )
        // if Boolean evalutes to false then set the cart to a copy of the cart and create a copy of the object called item that is
        // passed into the function and add a new key called quantity with a value of 1
        else props.setCart([...props.cart, { ...item, quantity: 1 }])
      }

  return props.items.map((item, index) => {
        return (
          <li key={index}>
            <div className="store--item-icon" onClick={() => props.setSelectedInfo(item)}>
              <img src={`/assets/icons/${item.id}.svg`} alt={item.name} />
            </div>
            <button onClick={() => addToCart(item)} className="button">
              Add To Cart
            </button>
          </li>
        )
      })
}

export default Store