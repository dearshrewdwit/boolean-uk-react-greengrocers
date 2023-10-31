import { useState } from "react";

import Header from "./components/Header/Header";
import Main from "./components/Main";

import "./styles/reset.css";
import "./styles/index.css";

import initialStoreItems from "./store-items";

export default function App() {
  const [storeItems] = useState(initialStoreItems);
  const [cartItems, setCartItems] = useState([]);

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
