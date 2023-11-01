
import PropTypes from 'prop-types';
import initialStoreItems from '../store-items';

const storeItems = initialStoreItems;

function Items({ addToCart }) {
  return (
    <ul className="item-list store--item-list">
      {storeItems.map((item) => (
        <li key={item.id}>
          <div className="store--item-icon">
            <img src={`/assets/icons/${item.id}.svg`} alt={item.name} />
          </div>
          <button onClick={() => addToCart(item)}>Add to cart</button>
        </li>
      ))}
    </ul>
  );
}

Items.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default Items;
