function CartItem({ product }) {
  return (
    <li>
      <img
        class="cart--item-icon"
        src={`assets/icons/${product.id}.svg`}
        alt={product.name}
      />
      <p>{product.name}</p>
      <button class="quantity-btn remove-btn center">-</button>
      <span class="quantity-text center">1</span>
      <button class="quantity-btn add-btn center">+</button>
    </li>
  )
}

export default CartItem
