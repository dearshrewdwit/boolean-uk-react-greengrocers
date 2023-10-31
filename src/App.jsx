import './styles/reset.css'
import './styles/index.css'

import { useState } from 'react'
import initialStoreItems from './store-items'
import Header from './Components/Header'
import Cart from './Components/Cart'
import Footer from './Components/Footer'

/*
 Here's what a store item should look like
 {
 id: '001-beetroot',
 name: 'beetroot',
 price: 0.35
 }

 What should a cart item look like? 🤔
 */

console.log(initialStoreItems)

export default function App() {

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
      <Header items={items} addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} addToCart={addToCart} cartPrice={cartPrice} />
      <Footer />
    </>
  )}