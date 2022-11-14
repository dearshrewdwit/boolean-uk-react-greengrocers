import '../styles/reset.css';
import '../styles/index.css';

import { useState } from 'react';
import Header from './Header';
import Cart from './Cart';
import Store from './Store';

export default function App() {
  const [cartList, setCartList] = useState([]);
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />

      <Header />
      <Store cartList={cartList} setCartList={setCartList} />
      <Cart cartList={cartList} setCartList={setCartList} />
    </>
  );
}
