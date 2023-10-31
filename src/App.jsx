import { useState } from "react";

import Header from "./components/Header";
import Main from "./components/Main";

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
  const [storeItems] = useState(initialStoreItems);
  const [cartItems, setCartItems] = useState(initialCartItems);

  return (
    <>
      <Header storeItems={storeItems} cartItems={cartItems} setCartItems={setCartItems}></Header>
      <Main cartItems={cartItems} setCartItems={setCartItems}></Main>
      <div className="footer">
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
