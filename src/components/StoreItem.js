function StoreItem({ product, addToCart }) {
  return (
    <li>
      <div class="store--item-icon">
        <img src={`/assets/icons/${product.id}.svg`} alt={product.name} />
      </div>
      <button onClick={() => addToCart(product)}>Add to cart</button>
    </li>
  )
}

export default StoreItem
