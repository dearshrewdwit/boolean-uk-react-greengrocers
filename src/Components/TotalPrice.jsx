/* eslint-disable react/prop-types */

export default function TotalPrice({ cart }) {

    function getTotalPrice () {
        let runningTotal = 0
        cart.forEach((item) => {
            runningTotal += (item.quantity * item.price)
        })
        return runningTotal
    }

  return (
    <>
      <div>
        <h3>Total</h3>
      </div>
      <div>
        <span className="total-number">£{getTotalPrice().toFixed(2)}</span>
      </div>
    </>
  );
}
