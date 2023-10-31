import './styles/reset.css'
import './styles/index.css'

import { useState } from 'react'
import initialStoreItems from './store-items'
import Header from './components/Header'
import Cart from './components/Cart'
import Footer from './components/Footer'

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

  const [items] = useState(initialStoreItems)
  const [cart, setCart] = useState([]);

  //function to add items to the cart
    const addToCart = (item) => {
    const updatedCart = [...cart];
    const existingItemIndex = updatedCart.findIndex((cartItem) => cartItem.id === item.id);

    if (existingItemIndex !== -1) {
      // If the item is already in the cart, increase its quantity
      updatedCart[existingItemIndex].quantity += 1;
    } else {
      // If the item is not in the cart, add it with a quantity of 1
      updatedCart.push({ ...item, quantity: 1 });
    }
    setCart(updatedCart);
  };

// function to remvove items from the cart 
  const removeFromCart = (item) => {
    const updatedCart = [...cart];
    const existingItemIndex = updatedCart.findIndex((cartItem) => cartItem.id === item.id);

    if (existingItemIndex !== -1) {
      const updatedItem = { ...updatedCart[existingItemIndex] };
      if (updatedItem.quantity > 1) {
        // If the item's quantity is greater than 1, decrease its quantity
        updatedItem.quantity -= 1;
        updatedCart[existingItemIndex] = updatedItem;
      } else {
        // If the item's quantity is 1, remove it from the cart
        updatedCart.splice(existingItemIndex, 1);
      }
      setCart(updatedCart);
    }
  }

  //function that updates the total price 
  function cartPrice() {
    const money = cart.reduce((sum, item) => {
      return sum + (item.price * item.quantity);
    }, 0);
    const formattedMoney = `£${money.toFixed(2)}`;
    return formattedMoney;
  }

  return (
    <>
      <Header
        items={items}
        addToCart={addToCart} />
      <Cart
        cart={cart}
        removeFromCart={removeFromCart}
        addToCart={addToCart}
        cartPrice={cartPrice} />
      <Footer />
    </>
  )
}
