import "./styles/reset.css";
import "./styles/index.css";
import { useState } from "react";
import Header from "./Component/Header";
import Main from "./Component/Main";

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

//console.log(initialStoreItems);

export default function App() {
  // Setup state here...
  const [storeItems, setStoreItems] = useState(initialStoreItems);
  const [cartItems, setCartItems] = useState([]);
  // create a new array that includes the items
  const addTheCartItem = (itemadded) => {
    const itemAlreadyInCart = cartItems.some(
      (item) => item.name === itemadded.name
    );

    if (itemAlreadyInCart) {
      const theFoundItem = cartItems.find((item) => item.id === itemadded.id);
      theFoundItem.quantity += 1;
      setCartItems([...cartItems]);
    } else {
      const newItem = {
        ...itemClicked,
        quantity: 1,
      };
      setCartItems([...cartItems, newItem]);
    }
  };

  return (
    <>
      <Header addTheCartItem={addTheCartItem} />
      <Main />
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
