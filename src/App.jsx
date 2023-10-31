import { useState } from "react";

import "./styles/reset.css";
import "./styles/index.css";

import initialStoreItems from "./store-items";

const initialCartItems = [
  {
    id: "002-carrot",
    name: "carrot",
    price: 35,
    quantity: 1,
  },
  {
    id: "004-apricot",
    name: "apricot",
    price: 20,
    quantity: 3,
  },
];

export default function App() {
  const [storeItems, setStoreItems] = useState(initialStoreItems);
  const [cartItems, setCartItems] = useState(initialCartItems);

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {storeItems.map((item) => {
            return (
              <li key={item.id}>
                <div className="store--item-icon">
                  <img src={`assets/icons/${item.id}.svg`} alt={item.name} />
                </div>
                <button>Add to cart</button>
              </li>
            );
          })}
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {cartItems.map(item => {
              return (
                <li key={item.id}>
                  <img src={`assets/icons/${item.id}.svg`} alt={item.name} className="cart--item-icon" />
                  <p>{item.name}</p>
                  <button className="quantity-btn remove-btn center">-</button>
                  <span className="quantity-text center">{item.quantity}</span>
                  <button className="quantity-btn add-btn center">+</button>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">£0.00</span>
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
