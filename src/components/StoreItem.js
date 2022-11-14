//Creates single li for store item,rendering happening in the App
function StoreItem({ item, AddToCart }) {
  const itemName = item.name.charAt(0).toUpperCase() + item.name.slice(1)
  return (
    <li>
      <div className="store--item-icon">
        <img src={`assets/icons/${item.id}.svg`} alt={item.name} />
      </div>
      <div>{itemName}</div>
      <div>£{item.price}</div>
      <button
        onClick={() => {
          AddToCart(item)
        }}
      >
        Add to cart
      </button>
    </li>
  )
}
export default StoreItem
