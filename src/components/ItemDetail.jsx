import React from "react";
import PropTypes from "prop-types";

const ItemDetail = ({ item, onClose }) => {
  return (
    <div className="item-detail">
      <h2>{item.name}</h2>
      <p>Type: {item.type}</p>
      <p>Price: £{item.price.toFixed(2)}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

ItemDetail.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ItemDetail;
