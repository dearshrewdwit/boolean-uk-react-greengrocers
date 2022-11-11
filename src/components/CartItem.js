function CartItem({ product, editCartItem }) {
  const { id, name, quantity } = product
  return (
    <li>
      <img class="cart--item-icon" src={`assets/icons/${id}.svg`} alt={name} />
      <p>{name}</p>
      <button
        class="quantity-btn remove-btn center"
        onClick={() => editCartItem(product, 'decrement')}
      >
        -
      </button>
      <span class="quantity-text center">{quantity}</span>
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
