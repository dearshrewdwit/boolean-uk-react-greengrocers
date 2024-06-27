import React from "react";

export default function Total({ totalPrice }) {
  return (
    <div className="total-section">
      <div>
        <h3>Total</h3>
      </div>
      <div>
        <span className="total-number">£{totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
}
