import "./styles/reset.css";
import "./styles/index.css";

import Header from './Components/Header'
import Cart from './Components/Cart'
import { useState } from "react";

export default function App() {
  const [cart, addToCart] = useState([]);

  return (
    <>
    <Header cart={cart} addToCart={addToCart}/>

    <Cart cart={cart} addToCart={addToCart}/>

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
