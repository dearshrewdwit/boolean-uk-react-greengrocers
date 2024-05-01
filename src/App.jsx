import "./styles/reset.css";
import "./styles/index.css";

import initialStoreItems from "./store-items";

import Store from "./components/Store";
import { useState } from "react";
import Cart from "./components/Cart";

import Filter from "./components/Filter";
import Sorter from "./components/Sorter";

import Detail from "./components/Detail";

export default function App() {
  const [storeFruits, setStoreFruits] = useState(initialStoreItems);
  const [cartFruits, setCartFruits] = useState([]);
  const [detailFruit, setDetailFruit] = useState(null);

  const handleAddToCart = (id) => {
    const index = cartFruits.findIndex((fruit) => fruit.id === id);
    let updatedCartFruits = [];
    let fruit = {};
    if (index === -1) {
      fruit = storeFruits.find((fruit) => fruit.id === id);
      fruit = { ...fruit, quantity: 1 };
      cartFruits.push(fruit);
    } else {
      fruit = cartFruits.find((fruit) => fruit.id === id);
      fruit.quantity++;
    }
    updatedCartFruits = cartFruits.map((fruit) => fruit);
    setCartFruits(updatedCartFruits);
  };

  const handleQuantityIncrement = (id) => {
    const updatedCartFruits = cartFruits.map((fruit) => {
      if (fruit.id === id) {
        fruit.quantity++;
      }
      return fruit;
    });
    setCartFruits(updatedCartFruits);
  };

  const handleQuantityDecrement = (id) => {
    const updatedFruit = cartFruits.find((fruit) => fruit.id === id);
    updatedFruit.quantity--;
    const updatedCartFruits = cartFruits.filter((fruit) => fruit.quantity > 0);
    setCartFruits(updatedCartFruits);
  };

  const calculateTotal = () => {
    let total = 0;
    for (let i = 0; i < cartFruits.length; i++) {
      total += cartFruits[i].quantity * cartFruits[i].price;
    }
    return total;
  };

  const handleFilter = (event) => {
    let filter = event.target.value;
    if (filter === "all") {
      setStoreFruits(initialStoreItems);
      return;
    }
    let filteredStoreFruits = initialStoreItems.filter(
      (fruit) => fruit.type === filter
    );
    setStoreFruits(filteredStoreFruits);
  };

  const handleSorter = (event) => {
    let sortby = event.target.value;
    console.log(sortby);
    switch (sortby) {
      case "price-asc":
        storeFruits.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        storeFruits.sort((a, b) => b.price - a.price);
        break;
      case "alpha":
        storeFruits.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }
    let sortedStoreFruits = storeFruits.map((fruit) => fruit);
    setStoreFruits(sortedStoreFruits);
  };

  const handleShowDetails = (fruit) => {
    setDetailFruit(fruit);
  };

  const handleDismiss = () => {
    setDetailFruit(null);
  };

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>

        <Filter onChangeFilter={handleFilter} />

        <Sorter onChangeSort={handleSorter} />

        <ul className="item-list store--item-list">
          <Store
            fruits={storeFruits}
            addToCart={handleAddToCart}
            showDetails={handleShowDetails}
          />
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            <Cart
              fruits={cartFruits}
              incrementQuantity={handleQuantityIncrement}
              decrementQuantity={handleQuantityDecrement}
            />
          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">£ {calculateTotal()}</span>
          </div>
        </div>
      </main>
      <Detail fruit={detailFruit} dismiss={handleDismiss} />
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
