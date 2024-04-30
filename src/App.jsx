import "./styles/reset.css";
import "./styles/index.css";

import initialStoreItems from "./store-items";
import Header from "./Components/Header";
import { useState } from "react";
import MainBody from "./Components/MainBody";

export default function App() {
  const [cart, setCart] = useState([]);
  const [store, setStore] = useState(initialStoreItems);
  
  const removeFromCart = (item) => {
    const checkItem = cart.find((cartItem) => { if(cartItem.id === item.id) return true})
    
    if(checkItem) {
      const updatedCart = cart.map((cartItem) => {if(cartItem.quantity >=1) item.quantity--; return {...item} })
      setCart(updatedCart)
    } else {
        const updatedCart = cart.filter((cartItem) => {cartItem.quantity <1; return {...cart}})
        setCart(updatedCart)
    }
    console.log(cart)
  }
  

  const addToCart = (item) => {
    const checkItem = cart.find((cartItem) => { if(cartItem.id === item.id) return true})

    if(checkItem) {
      const updatedCart = cart.map((cartItem) => {if(cartItem.quantity >=1) item.quantity++; return {...item}})
      setCart(updatedCart)
    } else {const updatedCart = [...cart, {...item, quantity: 1}]
      setCart(updatedCart)}
  }

  return (
    <>
      <Header store={store} addToCart={addToCart}/>
      <MainBody cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}/>
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
