import { useState } from "react";
import Total from "./Total.js";


function InsideCart(props) {
  const [totalCart, setTotalCart] = useState(0);

  console.log('checkwtfthecartishere')
  console.table(props.cart)

  return (
    <main id="cart">
      <h2>Your Cart</h2>
      <div className="cart--item-list-container">
        <ul className="item-list cart--item-list">
          {/* Wrtite some code here... */}
          {props.cart.map((item, index) =>
            <li key={index}>
              <img
                className="cart--item-icon"
                src={`/assets/icons/${item.id}.svg`}
                alt={item.name}
              />
              <p>{item.name}</p>
              <button className="quantity-btn remove-btn center"
                onClick={() => {
                  console.log("item when - button clicked:", item)
                  const reducedCart = [...props.cart]
                  item.quantity--
                  if (item.quantity >= 1) {
                    props.setCartItem(reducedCart)
                  }
                  else {
                    console.log('There are 0', item.name, 'left')
                    //remove the cart item from props.cart, and update setCart
                    const cartMinusItem = props.cart.filter((veg) => veg.id !== item.id);
                    props.setCartItem(cartMinusItem)

                    console.log("props.cart after- when quantity is  0:", cartMinusItem)
                  }
                  console.log("props.cart after -", props.cart)
                  props.handleTotal()
                }
                }
              >-</button>
              <span className="quantity-text center">{item.quantity}</span>
              <button className="quantity-btn add-btn center"
                onClick={() => {
                  console.log("item when + button clicked:", item)
                  const increasedCart = [...props.cart]
                  item.quantity++

                  // update the cart
                  props.setCartItem(increasedCart)
                  console.log("props.cart after +", props.cart)

                  props.handleTotal()
                }}
              >+</button>
            </li>
          )}
        </ul>
      </div>

    </main>
  )
}

export default InsideCart;