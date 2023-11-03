import "./styles/reset.css";
import "./styles/index.css";
import AvailableItems from "./AvailableItems.jsx";
import Cart from "./Cart.jsx";
import Total from "./Total.jsx";

import initialStoreItems from "./store-items";
import { useState } from "react";

/*
 Here's what a store item should look like
 {
 id: '001-beetroot',
 name: 'beetroot',
 price: 0.35
 }

 What should a cart item look like? 🤔
 */

console.log(initialStoreItems);

export default function App() {
  // Setup state here...
  
  const [items, setItems] = useState(initialStoreItems)
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    const updatedCart = [...cart];
    const existingItemIndex = updatedCart.findIndex((cartItem) => cartItem.id === item.id);
    if (existingItemIndex !== -1) {
      updatedCart[existingItemIndex].quantity += 1;
    } else {
      updatedCart.push({ ...item, quantity: 1 });
    }
    setCart(updatedCart);
  };
  const removeFromCart = (item) => {
    const updatedCart = [...cart];
    const existingItemIndex = updatedCart.findIndex((cartItem) => cartItem.id === item.id);
    if (existingItemIndex !== -1) {
      const updatedItem = { ...updatedCart[existingItemIndex] };
      if (updatedItem.quantity > 1) {
        updatedItem.quantity -= 1;
        updatedCart[existingItemIndex] = updatedItem;
      } else {
        updatedCart.splice(existingItemIndex, 1);
      }
      setCart(updatedCart);
    }
  };
  function cartPrice() {
    const money = cart.reduce((sum, item) => {
      return sum + (item.price * item.quantity);
    }, 0);
  
    const formattedMoney = `£${money.toFixed(2)}`;

    return formattedMoney;
  }

  return (
    <>
      <AvailableItems items={items} addToCart={addToCart}/>
      <Cart cart={cart} removeFromCart={removeFromCart} addToCart={addToCart} cartPrice={cartPrice}/>
      <Total/>
    </>
  );
}
