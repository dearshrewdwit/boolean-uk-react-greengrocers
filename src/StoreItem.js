function StoreItem(props) {
  // Return an li here
  console.log(props.storeItem.id)
  return (
    <li>
      <div className="store--item-icon">
        <img
          src={`/assets/icons/${props.storeItem.id}.svg`}
          alt={`${props.storeItem.name}`}
        />
      </div>
      <button>Add to cart</button>
    </li>
  )
}

export default StoreItem
