import PropTypes from "prop-types";


function CartItem({ item, quantity, onQuantityChange }) {
  return (
    <li>
      <img
        className="cart--item-icon"
        src={`assets/icons/${item.id}.svg`}
        alt={item.name}
      />
      <p>{item.name}</p>
      <button className="quantity-btn remove-btn center" onClick={() => onQuantityChange(-1)}>-</button>
      <span className="quantity-text center">{quantity}</span>
      <button className="quantity-btn add-btn center" onClick={() => onQuantityChange(1)}>+</button>
    </li>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  quantity: PropTypes.number.isRequired,
  onQuantityChange: PropTypes.func.isRequired,
};

export default CartItem;
