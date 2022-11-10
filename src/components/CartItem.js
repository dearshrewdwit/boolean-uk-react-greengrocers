function CartItem({ product, editCartItem }) {
  return (
    <li>
      <img
        class="cart--item-icon"
        src={`assets/icons/${product.id}.svg`}
        alt={product.name}
      />
      <p>{product.name}</p>
      <button
        class="quantity-btn remove-btn center"
        onClick={() => editCartItem(product, 'decrement')}
      >
        -
      </button>
      <span class="quantity-text center">{product.quantity}</span>
      <button
        class="quantity-btn add-btn center"
        onClick={() => editCartItem(product, 'increment')}
      >
        +
      </button>
    </li>
  )
}

export default CartItem
