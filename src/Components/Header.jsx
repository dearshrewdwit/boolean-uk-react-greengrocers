/* eslint-disable react/prop-types */
import TypeFilter from "./TypeFilter";
import SortDropdown from "./SortDropdown";
import initialStoreItems from "../store-items";
import StoreCard from './StoreCard'
import { useState } from "react";

export default function Header( {cart, addToCart} ) {
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("");

  return (
    <header id="store">
      <h1>Greengrocers</h1>
      <TypeFilter setFilter={setFilter} />
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
  );
}
