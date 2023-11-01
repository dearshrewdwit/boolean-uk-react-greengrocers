import PropTypes from "prop-types";

function CartItem({ item, onQuantityChange, onRemove }) {
  const handleQuantityChange = (quantityChange) => {
    onQuantityChange(item.id, quantityChange);
  };

  return (
    <>
      <li>
        <img
          className="cart--item-icon"
          src={`assets/icons/${item.id}.svg`}
          alt={item.name}
        />
        <p>{item.name}</p>
        <button
          className="quantity-btn remove-btn center"
          onClick={() => handleQuantityChange(-1)}
        >
          -
        </button>
        <span className="quantity-text center">{item.quantity}</span>
        <button
          className="quantity-btn add-btn center"
          onClick={() => handleQuantityChange(1)}
        >
          +
        </button>
        <button className="remove-btn" onClick={() => onRemove(item.id)}>
          Remove
        </button>
      </li>
    </>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  onQuantityChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default CartItem;
