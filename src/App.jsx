import { useState } from "react";
import "./styles/reset.css";
import "./styles/index.css";
import Header from "./Header.jsx";
import Cart from "./Cart.jsx"

import initialStoreItems from "./store-items";

export default function App() {
  const [productList, setProductList] = useState(initialStoreItems);
  const [cartList, setCartList] = useState([]);

  return (
    <>
      <Header
        productList={productList}
        setProductList={setProductList}
        cartList={cartList}
        setCartList={setCartList}
      />
      <Cart productList={productList}
        setProductList={setProductList}
        cartList={cartList}
        setCartList={setCartList}/>
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
