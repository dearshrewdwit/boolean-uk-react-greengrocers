function CartItem({ item, itemName, increase, decrease }) {
  return (
    <li>
      <img
        className="cart--item-icon"
        src={`assets/icons/${item.id}.svg`}
        alt={itemName}
      />
      <p>{item.name}</p>
      <button
        className="quantity-btn remove-btn center"
        onClick={() => {
          decrease(item)
        }}
      >
        -
      </button>
      <span className="quantity-text center">{item.quantity}</span>
      <button
        className="quantity-btn add-btn center"
        onClick={() => {
          increase(item)
        }}
      >
        +
      </button>
    </li>
  )
}
export default CartItem
