import "./styles/reset.css";
import "./styles/index.css";
import { useState } from "react";
import Header from "./Component/Header";
import Main from "./Component/Main";

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

  // Initialize the cartItems state as an empty array
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addTheCartItem = (itemadded) => {
    // Check if an item with the same name is already in the cart
    const itemAlreadyInCart = cartItems.some(
      (item) => item.name === itemadded.name
    );

    if (itemAlreadyInCart) {
      // If the item is already in the cart, find it and increase its quantity
      const theFoundItem = cartItems.find((item) => item.id === itemadded.id);
      theFoundItem.quantity += 1;

      // Update the cart by creating a new array with the modified items
      setCartItems([...cartItems]);
    } else {
      // If the item is not in the cart, create a new item with a quantity of 1
      const newItem = {
        ...itemadded,
        quantity: 1,
      };

      // Update the cart by creating a new array that includes the new item
      setCartItems([...cartItems, newItem]);
    }
  };

  return (
    <>
      <Header addTheCartItem={addTheCartItem} />
      <Main cartItems={cartItems} setCartItems={setCartItems} />
    </>
  );
}
