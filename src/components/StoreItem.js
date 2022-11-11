function StoreItem({ product, addToCart, setShowDescription }) {
  return (
    <li>
      <div class="store--item-icon">
        <img
          src={`/assets/icons/${product.id}.svg`}
          alt={product.name}
          onClick={() => setShowDescription(product)}
        />
      </div>
      <button onClick={() => addToCart(product)}>Add to cart</button>
    </li>
  )
}

export default StoreItem
