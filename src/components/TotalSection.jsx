import React from "react";
import PropTypes from "prop-types";

const TotalSection = ({ cart }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="total-section">
      <div>
        <h3>Total</h3>
      </div>
      <div>
        <span className="total-number">£{total.toFixed(2)}</span>
      </div>
    </div>
  );
};

TotalSection.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TotalSection;
