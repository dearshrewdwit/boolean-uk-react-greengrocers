import React from 'react';

function CartTotal({ total }) {
  return <div>Total: {total.toFixed(2)}</div>;
}

export default CartTotal;
