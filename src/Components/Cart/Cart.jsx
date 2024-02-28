import { useEffect, useState } from 'react'
import "./Cart.css"
import TotalCost from "./TotalCost/TotalCost.jsx"

const Cart = ({cart, increment, decrement}) => {
  const [cartPrice, setCartPrice] = useState(0)

  useEffect(() => {
    let price = 0
    cart.forEach((item) => {
      price += (parseFloat(item.price) * parseInt(item.quantity))
    })
    setCartPrice(price.toFixed(2))
  }, [cart])

  return (
      <main id="cart">
      <h2>Your Cart</h2>
      <div className="cart--item-list-container">
        <ul className="item-list cart--item-list">
          {cart?.filter((e) => e.quantity !== 0).map((entry, index) => 
            <li key={index}>
              <img 
                className="cart--item-icon"
                src={"/assets/icons/"+entry.id+".svg"}
              />
              <p className="center">{entry.name}</p>
              <button 
                className="quantity-btn remove-btn" 
                onClick={() => decrement(entry.id)}
              >-</button>
                <span className="center quantity-text">{entry.quantity}</span>
              <button 
                className="quantity-btn add-btn" 
                onClick={() => increment(entry.id)}
              >+</button>
            </li>
          )}
        </ul>
      </div>
      <TotalCost cartPrice={cartPrice} />
    </main>
  )
}

export default Cart