function StoreItem({ product }) {
  return (
    <li>
      <div class="store--item-icon">
        <img src={`/assets/icons/${product.id}.svg`} alt={product.name} />
      </div>
      <button>Add to cart</button>
    </li>
  )
}

export default StoreItem
