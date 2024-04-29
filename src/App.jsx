import "./styles/reset.css";
import "./styles/index.css";

import initialStoreItems from "./store-items";
import Header from "./Components/Header";
import { useState } from "react";
import MainBody from "./Components/MainBody";

export default function App() {
  const [cart, setCart] = useState([]);
  const [store, setStore] = useState(initialStoreItems);
  

  const addToCart = () => {
    setStore({
      ...store,
      quantity: 1})
  }

  const updateCart = () => {
    setCart([
      ...cart,
      store
    ])
  }

  return (
    <>
      <Header store={store} addToCart={addToCart}/>
      <MainBody updateCart={updateCart} />
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
