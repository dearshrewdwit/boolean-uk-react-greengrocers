import "./styles/reset.css";
import "./styles/index.css";

import { useState } from "react";

import AllItems from "./AllItems.jsx";
import CartItems from "./CartItems.jsx";

export default function App() {
  const [totalPrice, setTotalPrice] = useState(0.0);
  const [cartItems, setCartItems] = useState([]);

  function addToCart(item) {
    const previousItem = cartItems.find((target) => target.id === item.id);
    if (previousItem) {
      const updatedCart = cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...item, quantity: previousItem.quantity + 1 }
          : cartItem
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
    setTotalPrice(totalPrice + item.price);
  }

  function removeFromCart(item) {
    const updatedCart = cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...item, quantity: item.quantity - 1 }
        : cartItem
    );
    setCartItems(updatedCart);

    if (item.quantity <= 1) {
      const removeItem = (target) => {
        setCartItems(cartItems.filter((cItem) => cItem.id !== target.id));
      };
      removeItem(item);
    }
    setTotalPrice(totalPrice - item.price);
  }

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          <AllItems addToCart={addToCart} />
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            <CartItems
              cartItems={cartItems}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">
              {`£` + Math.abs(totalPrice).toFixed(2)}
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
