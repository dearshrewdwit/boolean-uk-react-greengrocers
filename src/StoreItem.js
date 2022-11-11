export default function StoreItem(props) {
    const {item} = props
  return (
    <li key={item.id}>
      <div class="store--item-icon">
        <img src={`/assets/icons/${item.id}.svg`} alt={`${item.name}`} />
      </div>
      <button>Add to cart</button>
    </li>
  )
}
