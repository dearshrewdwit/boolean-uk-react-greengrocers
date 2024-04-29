/* eslint-disable react/prop-types */

export default function CartItem({cartItem, index, addToCart, removeFromCart}) {

  return (
    <li key={index}>
      <img
        className="cart--item-icon"
        src={`../../assets/icons/${cartItem.id}.svg`}
        alt={cartItem.name}
      />
      <p>{cartItem.name}</p>
      <button className="quantity-btn remove-btn center" onClick={() => removeFromCart()}>-</button>
      <span className="quantity-text center">{cartItem.quantity}</span>
      <button className="quantity-btn add-btn center" onClick={() => addToCart(cartItem)}>+</button>
    </li>
  );
}
