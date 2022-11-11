export default function CartItem(props) {
  const{item} = props
  return (
    <li key={item.id}>
      <img
        class="cart--item-icon"
        src={`assets/icons/${item.id}.svg`}
        alt={`${item.name}`}
      />
      <p>{item.name}</p>
      <button class="quantity-btn remove-btn center">-</button>
      <span class="quantity-text center">1</span>
      <button class="quantity-btn add-btn center">+</button>
    </li>
  )
}
