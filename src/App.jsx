import "./styles/reset.css";
import "./styles/index.css";
import { useState } from "react";
import initialStoreItems from "./store-items";
import Header from "./Header";
import MainCart from "./MainCart";
import Footer from "./Footer";

console.log("Initial store item", initialStoreItems);

export default function App() {
  //Items in state:
  const [storeItems, setStoreItems] = useState(initialStoreItems);
  const [cart, setCart] = useState([]);
  const [filteredItems, setFilteredItems] = useState(storeItems);

  console.log("updated cart", cart);

  return (
    //Breaking down components:
    <>
      <Header
        storeItems={storeItems}
        cart={cart}
        setCart={setCart}
        filteredItems={filteredItems}
        setFilteredItems={setFilteredItems}
      />
      <MainCart cart={cart} setCart={setCart} />
      <Footer />
    </>
  );
}
