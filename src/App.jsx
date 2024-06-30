import "./styles/reset.css";
import "./styles/index.css";

import { useState } from "react";

import AllItems from "./AllItems.jsx";
import CartItems from "./CartItems.jsx";

export default function App() {
  const [totalPrice, setTotalPrice] = useState(0.0);
  const [cartItems, setCartItems] = useState([]);

  function increaseCartItem(target) {
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem == target
        ? ({ ...cartItem, quantity: 5 }, console.log(cartItem))
        : cartItem
    );

    setCartItems(updatedCartItems);
  }

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          <AllItems
            cartItems={cartItems}
            setCartItems={setCartItems}
            increaseCartItem={increaseCartItem}
          />
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            <CartItems
              cartItems={cartItems}
              setCartItems={setCartItems}
              increaseCartItem={increaseCartItem}
            />
          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">
              {`£` + totalPrice.toPrecision(3)}
            </span>
          </div>
        </div>
      </main>
      <div>
        Icons made by
        <a
          href="https://www.flaticon.com/authors/icongeek26"
          title="Icongeek26"
        >
          Icongeek26
        </a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </>
  );
}
