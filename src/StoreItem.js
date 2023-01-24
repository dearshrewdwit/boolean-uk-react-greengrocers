function storeItems(props) {
  return (
    <li>
      <div class="store--item-icon">
        <img src={`/assets/icons/${props.id}.svg`} alt={props.name} />
      </div>
      <button onClick={props.addItemCart} id={props.id}>
        Add to cart
      </button>
    </li>
  )
}
export default storeItems
