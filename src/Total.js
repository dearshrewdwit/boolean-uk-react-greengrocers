import { useState } from 'react'

function Total(props) {
//   const [total, setTotal] = useState(0)

//   const total = props.cartItems.reduce(
//     (prevValue, currentValue) => prevValue + currentValue.quantity,
//     0
//   )

const total = props.cartItems.reduce(
    (prevValue, currentValue) => prevValue + currentValue.quantity,
    0
  )

  return (
    <>
      <div className="total-section">
        <div>
          <h3>Total</h3>
        </div>
        <div>
          <span className="total-number">{total}</span>
        </div>
      </div>
    </>
  )
}

export default Total
