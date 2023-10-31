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
  const [storeItems, setStoreItems] = useState(initialStoreItems);
  const [cartItems, setCartItems] = useState(initialCartItems);

  function addItemToCart(inputItem) {
    const itemToAdd = cartItems.find(item => item.id === inputItem.id)
    if (itemToAdd) {
      itemToAdd.quantity++
      setCartItems([...cartItems])
    } else {
      inputItem.quantity = 1
      setCartItems([...cartItems, inputItem])
    }
    
  }

  return (
    <>
      <Header storeItems={storeItems} addItemToCart={addItemToCart}></Header>
      <Main cartItems={cartItems}></Main>
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
