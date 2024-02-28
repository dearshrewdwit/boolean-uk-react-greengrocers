import { useState } from 'react'

import CartItem from "./CartItem"
import Filter from "./Filter"

function Cart(props) {
    const [filters, setFilters] = useState([])

    let filteredCart = props.cart
    if (filters.length !== 0) filteredCart = console.log("filters in place")

    const calculateTotal = () => {
        let total = 0.0
        for(let item in props.cart) {
          total += props.cart[item].price * props.cart[item].amount
        }
        return total
      }

    const getTotal = () => {
        const total = calculateTotal()
        return `£${total.toFixed(2)}`
      }

    const handleSelect = (item) => {
        if(filters.filter((currentItem) => currentItem === item).length !== 0)
            setFilters(filters.filter((currentItem) => currentItem !== item))
        else 
            setFilters([...filters, item])
    }

    return(
        <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {props.cart.map((cartItem, index) =>
              <CartItem 
              key={index}
              cartItem={cartItem}
              addToCart={props.addToCart}
              removeFromCart={props.removeFromCart}
              />
            )}
          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">{getTotal()}</span>
          </div>
        </div>
        <Filter 
            storeItems={props.storeItems}
            handleSelect={handleSelect}
        />
      </main>
    )
}

export default Cart