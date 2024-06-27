import { useState } from "react";
import Header from "./Header";
import Store from "./Store";
import Cart from "./Cart";
import TotalSection from "./TotalSection";
import Filter from "./Filter";
import Sort from "./Sort";
import storeItems from "../store-items";
import "../styles/index.css";

const App = () => {
  const [items, setItems] = useState(storeItems);
  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("alphabetical");
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = items.filter(
    (item) => filter === "all" || item.type === filter
  );

  const sortedItems = filteredItems.sort((a, b) => {
    if (sort === "alphabetical") {
      return a.name.localeCompare(b.name);
    } else if (sort === "price") {
      return a.price - b.price;
    }
    return 0;
  });

  return (
    <div className="app-container">
      <Header />
      <div className="filter-sort-container">
        <Filter filter={filter} setFilter={setFilter} />
        <Sort sort={sort} setSort={setSort} />
      </div>
      <div className="main-content">
        <Store
          items={sortedItems}
          cart={cart}
          setCart={setCart}
          setSelectedItem={setSelectedItem}
        />
        <Cart cart={cart} setCart={setCart} />
        <TotalSection cart={cart} />
      </div>
      {selectedItem && (
        <ItemDetail item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </div>
  );
};

export default App;
