import { useState } from "react"
import CartItem from "./CartItem"


export default function Cart({ cart, setCart}) {
    function decreaseCartCount(element) {
        element.quantity--
        if(element.quantity < 1) {
          const indexToRemove = cart.findIndex(e => (e.name === element.name))
          cart.splice(indexToRemove, 1)
        }
        setCart([...cart])
      }
    
      function increaseCartCount(element) {
        element.quantity++
        setCart([...cart])
      }

      function calculateTotal() {
        let runningTotal = 0
    
        cart.forEach((element, index) => {  
          runningTotal += element.price * element.quantity
        })
      
        return '£' + runningTotal.toFixed(2)
      
      }
    
    return(
        <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {cart.map((e, index) => {
              return <CartItem key={index} item={e} decreaseCartCount={decreaseCartCount} increaseCartCount={increaseCartCount}/>
            })}
          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">{calculateTotal()}</span>
          </div>
        </div>
      </main>
    )
}