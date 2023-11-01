import PropTypes from "prop-types";

function Items({ item, addToCart }) {
  return (
    <li>
      <div className="store--item-icon">
        <img src={`/assets/icons/${item.id}.svg`} alt={item.name} />
      </div>
      <button onClick={() => addToCart(item)}>Add to cart</button>
    </li>
  );
}

Items.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
  addToCart: PropTypes.func.isRequired,
};

export default Items;
