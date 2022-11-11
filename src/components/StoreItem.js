function StoreItem({ item }) {
  return (
    <li>
      <div class="store--item-icon">
        <img src={`assets/icons/${item.id}.svg`} alt={item.name} />
      </div>
      <div>£{item.price}</div>
      <button onClick={() => {}}>Add to cart</button>
    </li>
  )
}
export default StoreItem
