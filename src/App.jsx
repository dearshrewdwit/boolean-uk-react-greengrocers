import './styles/reset.css';
import './styles/index.css';

import { useState } from 'react';

import Header from './Components/Header';
import Cart from './Components/Cart';
/*
 Here's what a store item should look like
 {
 id: '001-beetroot',
 name: 'beetroot',
 price: 0.35
 }

 What should a cart item look like? 🤔
 */

export default function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Header cart={cart} setCart={setCart}/>
      <Cart cart={cart} setCart={setCart}/>
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
  )
}
