import { useState } from 'react'

export default function Total(props)
{
    let total = 0;
    const CountTotal = ()=> {
        let subTotal = 0;
        props.cart.map((item) => 
          subTotal += (item.quantity * item.price));
        total = subTotal;
      }

    CountTotal();
      return (
        <>
          <div className="total-section">
            <div>
              <h3>Total</h3>
            </div>
            <div>
              <span className="total-number">€{total.toFixed(2)}</span>
            </div>
          </div>
        </>
      )
}