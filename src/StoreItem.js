function StoreItem(props) {
  // console.log(props.storeItem.id)

  return (
    // A <li> element will be made for each store item, made from the map function in Store.js
    <li>
      <div className="store--item-icon">
        <img
          src={`/assets/icons/${props.storeItem.id}.svg`}
          alt={`${props.storeItem.name}`}
        />
      </div>
      {/* When user clicks the button: */}
      <button onClick={() => props.addToCart(props.storeItem)}>
        Add to cart
      </button>
    </li>
  )
}

export default StoreItem
