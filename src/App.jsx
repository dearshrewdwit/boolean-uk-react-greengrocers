import "./styles/reset.css";
import "./styles/index.css";

import initialStoreItems from "./store-items";
import StoreCard from "./Components/StoreCard";
import CartCard from "./Components/CartCard";
import TotalPrice from "./Components/TotalPrice";
import TypeFilter from "./Components/TypeFilter";
import SortDropdown from "./Components/SortDropdown"
import { useState } from "react";

export default function App() {
  const [cart, addToCart] = useState([]);
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState('')

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <TypeFilter setFilter={setFilter}/>
        <SortDropdown setSort={setSort} />
        <ul className="item-list store--item-list">
          <StoreCard
            initialStoreItems={initialStoreItems}
            addToCart={addToCart}
            cart={cart}
            filter={filter}
            sort={sort}
          />
        </ul>
      </header>

      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            <CartCard cart={cart} addToCart={addToCart} />
          </ul>
        </div>
        <div className="total-section">
          <TotalPrice cart={cart} />
        </div>
      </main>

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
