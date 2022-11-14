import "./styles/reset.css";
import "./styles/index.css";
import Footer from "./Components/Footer";
import StoreList from "./Components/Storelist";

import { useState } from "react";
import Total from "./Components/Total";
import CartList from "./Components/Cartlist";

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <StoreList cartItems={cartItems} setCartItems={setCartItems} />
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <CartList cartItems={cartItems} setCartItems={setCartItems} />

        <Total cartItems={cartItems} />
      </main>
      <Footer />
    </>
  );
}
