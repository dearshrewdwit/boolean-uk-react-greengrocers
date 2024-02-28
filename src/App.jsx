import "./styles/reset.css";
import "./styles/index.css";

import { useState, useEffect } from "react";
import initialStoreItems from "./store-items";

/*
 Here's what a store item should look like
 {
 id: '001-beetroot',
 name: 'beetroot',
 price: 0.35
 }

 What should a cart item look like? 🤔
 */

export default function App() {
  const [items] = useState(initialStoreItems);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    calculateTotal();
  }, [cart]);

  const addToCart = (item) => {
    if (cart.some((cartItem) => cartItem.id === item.id)) {
      increaseExistingItemInCart(item);
    } else {
      item.count = 1;
      setCart([...cart, item]);
    }
  };

  const increaseExistingItemInCart = (item) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, count: cartItem.count + 1 }
        : cartItem
    );
    console.log(updatedCart);
    setCart(updatedCart);
  };

  const decreaseExistingItemInCart = (item) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, count: cartItem.count - 1 }
        : cartItem
    );
    setCart(updatedCart);
  };

  const decrease = (item) => {
    if (item.count === 1) {
      removeItemFromCart(item);
    } else {
      decreaseExistingItemInCart(item);
    }
  };

  const removeItemFromCart = (target) => {
    setCart(cart.filter((i) => i.id !== target.id));
  };

  const calculateTotal = () => {
    let total = 0;
    if (cart.length > 0) {
      total = cart.reduce((n, { price, count }) => n + count * price, 0);
    }
    setTotal(total.toFixed(2));
  };

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {items.map((item, index) => (
            <li key={index}>
              <div className="store--item-icon">
                <img src={`./assets/icons/${item.id}.svg`}></img>
              </div>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {cart.map((item, index) => (
              <li key={index}>
                <img src={`./assets/icons/${item.id}.svg`}></img>
                <p>{item.name}</p>
                <button
                  className="quantity-btn remove-btn center"
                  onClick={() => decrease(item)}
                >
                  -
                </button>
                <span>{item.count}</span>
                <button
                  className="quantity-btn add-btn center"
                  onClick={() => increaseExistingItemInCart(item)}
                >
                  +
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">{total}</span>
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
