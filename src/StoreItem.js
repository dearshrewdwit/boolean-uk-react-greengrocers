export default function StoreItem(props) {
  const {item, addToCart} = props
  return (
    <li key={item.id}>
      <div className="store--item-icon">
        <img src={`/assets/icons/${item.id}.svg`} alt={`${item.name}`} />
      </div>
      <button onClick={() => {
        console.log("item", item);
        return addToCart(item)}}>Add to cart</button>
    </li>
  )
}
