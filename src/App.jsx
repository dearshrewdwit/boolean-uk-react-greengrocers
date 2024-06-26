import "./styles/reset.css";
import "./styles/index.css";

import { useState } from "react";
import initialStoreItems from "./store-items";
import StoreItem from "./StoreItem";
import BasketItem from "./BasketItem";

export default function App() {
  const [storeItems, setStoreItems] = useState(initialStoreItems);
  const [basketItems, setBasketItems] = useState([]);
  const [sort, setSort] = useState(false);

  const basketTotal = basketItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  const addItem = (newItem) => {
    const inArray = basketItems.some((item) => item.id === newItem.id);

    if (inArray) {
      const newArray = basketItems.map((item) =>
        item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setBasketItems(newArray);
    } else {
      const itemToAdd = { ...newItem, quantity: 1 };
      setBasketItems([...basketItems, itemToAdd]);
    }
  };

  const handleAdd = (currentItem) => {
    const newArray = basketItems.map((item) =>
      item.id === currentItem.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setBasketItems(newArray);
  };

  const handleMinus = (currentItem) => {
    const newArray = basketItems.map((item) =>
      item.id === currentItem.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    const filtered = newArray.filter((item) => item.quantity > 0);
    setBasketItems(filtered);
  };

  const filterVeg = () => {
    if (storeItems.some((item) => item.type === "fruit")) {
      const newArray = [...storeItems].filter(
        (item) => item.type === "vegetable"
      );
      setStoreItems(newArray);
    } else {
      setStoreItems(initialStoreItems);
    }
  };

  const filterFruit = () => {
    if (storeItems.some((item) => item.type === "vegetable")) {
      const newArray = [...storeItems].filter((item) => item.type === "fruit");
      setStoreItems(newArray);
    } else {
      setStoreItems(initialStoreItems);
    }
  };

  const sortAlphabetical = () => {
    if (sort === false) {
      const newArray = [...storeItems];
      newArray.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      setStoreItems(newArray);
      setSort(true);
    } else {
      setStoreItems(initialStoreItems);
      setSort(false);
    }
  };

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <button onClick={() => filterVeg()}>Vegetables only</button>
        <br></br>
        <button onClick={() => filterFruit()}>Fruits only</button>
        <br></br>
        <button onClick={() => sortAlphabetical()}>Sort Alphabetically</button>
        <ul className="item-list store--item-list">
          {storeItems.map((item) => (
            <StoreItem key={item.id} item={item} addItem={addItem} />
          ))}
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {basketItems.map((item) => (
              <BasketItem
                key={item.id}
                item={item}
                handleAdd={handleAdd}
                handleMinus={handleMinus}
              />
            ))}
          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">£{basketTotal}</span>
          </div>
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
