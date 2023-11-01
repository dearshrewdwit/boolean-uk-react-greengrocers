import PropTypes from "prop-types";
import storeItems from "../store-items";


function CartItem({ item, quantity, onQuantityChange }) {


  const Total = storeItems.map((item) => item.quantity * item.price)

  return (
    <>
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


      <div className="total-section">
        <div>
          <h3>Total</h3>
        </div>
        <div>
          <span className="total-number">{`£${Total}`}</span>
        </div>
      </div>
    </>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price:PropTypes.number.isRequired,
    quantity:PropTypes.number.isRequired,
  }).isRequired,
  quantity: PropTypes.number.isRequired,
  onQuantityChange: PropTypes.func.isRequired,
};

export default CartItem;
