import "./styles/reset.css";
import "./styles/index.css";

import initialStoreItems from "./store-items";
import { useState } from "react";

//importing the jsx
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
  // Setup state here...
  const [storeItem, setStoreItem] = useState(initialStoreItems);
  const [cartItem, setCartItem] = useState([]);

  return (
    <>
      <Header
        storeItem={storeItem}
        cartItem={cartItem}
        setCartItem={setCartItem}
      />
      <Main cartItem={cartItem} setCartItem={setCartItem} />
      <Footer />
    </>
  );
}
