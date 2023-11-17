import "./styles/reset.css";
import "./styles/index.css";
import { addItemToCart, calculator } from "../utilities/functions";


import initialStoreItems from "./store-items";
import { useState } from "react";
import Cart from "./components/Cart";
import Store from "./components/Store";


export default function App() {
  const initialStoreItemsWithQuantities = initialStoreItems.map(item => ({...item, quantity: 1}))

  const [items, setItems] = useState(initialStoreItemsWithQuantities);
  const [itemsInCart, setItemsInCart] = useState([]);
  const [total, setTotal] = useState(0)


  return (
    <>
      <Store itemsInStore={items} setItemsInStore={setItems} total={total} setTotal={setTotal} items={items} itemsInCart={itemsInCart} setItemsInCart={setItemsInCart}/>
      <Cart itemsInCart={itemsInCart} setItemsInCart={setItemsInCart} total={total} setTotal={setTotal}/>
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
