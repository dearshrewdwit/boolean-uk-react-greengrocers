import { useState } from "react";

import "./styles/reset.css";
import "./styles/index.css";

import initialStoreItems from "./store-items";

const getFilteredItemsByType = (filters, items) =>
  items.filter((item) => filters.includes(item.type));

const allFilters = ["berry", "fruit", "vegetable"];

export default function App() {
  const [storeItems] = useState(initialStoreItems);
  const [cartItems, setCartItems] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [filters, setFilters] = useState([]);
  const [sorting, setSorting] = useState("none");

  const addToCart = (toAdd) => {
    setTotalCost(totalCost + toAdd.price);
    let containsItem = false;
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === toAdd.id) {
        containsItem = true;
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });
    if (containsItem) {
      setCartItems(updatedCartItems);
    } else {
      toAdd.quantity = 1;
      setCartItems([...cartItems, toAdd]);
    }
  };

  const updateFilters = (targetFilter) => {
    if (filters.includes(targetFilter)) {
      setFilters(filters.filter((f) => f !== targetFilter));
    } else {
      setFilters([...filters, targetFilter]);
    }
  };

  const increaseQuantity = (targetItem) => {
    setTotalCost(totalCost + targetItem.price);
    const updatedCartItems = cartItems.map((item) =>
      item.id === targetItem.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCartItems(updatedCartItems);
  };

  const decreaseQuantity = (targetItem) => {
    console.log(totalCost - targetItem.price);
    setTotalCost(totalCost - targetItem.price);
    let quantityLeft;
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === targetItem.id) {
        quantityLeft = item.quantity - 1;
        return { ...item, quantity: quantityLeft };
      } else {
        return item;
      }
    });
    if (quantityLeft === 0) {
      setCartItems(
        updatedCartItems.filter((item) => item.id !== targetItem.id)
      );
      return;
    }
    setCartItems(updatedCartItems);
  };

  let filteredItems = storeItems;

  if (filters.length > 0) {
    filteredItems = getFilteredItemsByType(filters, filteredItems);
  }

  if (sorting === "price") {
    filteredItems.sort((a, b) => {
      return a.price > b.price ? 1 : -1;
    });
  } else if (sorting === "alphabetically") {
    filteredItems.sort((a, b) => {
      return a.name > b.name ? 1 : -1;
    });
  } else if (sorting === "none") {
    filteredItems.sort((a, b) => {
      return a.id > b.id ? 1 : -1;
    });
  }

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <div className="filter">
          <ul className="filter">
            Filters:
            {allFilters.map((filter, index) => (
              <li key={index}>
                <label htmlFor={filter}>
                  <input
                    type="checkbox"
                    id={filter}
                    onChange={() => updateFilters(filter)}
                  />
                  {filter}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="sorting">
          <ul className="sorting">
            Sorting:
            <li>
              <label htmlFor="no-sorting">
                <input
                  type="radio"
                  id="no-sorting"
                  name="sorting"
                  checked={sorting === "none"}
                  onChange={() => setSorting("none")}
                />
                None
              </label>
            </li>
            <li>
              <label htmlFor="alphabetical-sorting">
                <input
                  type="radio"
                  id="alphabetical-sorting"
                  name="sorting"
                  checked={sorting === "alphabetically"}
                  onChange={() => setSorting("alphabetically")}
                />
                Alphabetically
              </label>
            </li>
            <li>
              <label htmlFor="price-sorting">
                <input
                  type="radio"
                  id="price-sorting"
                  name="sorting"
                  checked={sorting === "price"}
                  onChange={() => setSorting("price")}
                />
                Price
              </label>
            </li>
          </ul>
        </div>
        <ul className="item-list store--item-list">
          {filteredItems.map((item, index) => (
            <li key={index}>
              <div className="store--item-icon">
                <img src={`/assets/icons/${item.id}.svg`} alt={item.name} />
              </div>
              <button
                onClick={() => {
                  addToCart(item);
                }}
              >
                Add to cart
              </button>
            </li>
          ))}
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {cartItems.map((item, index) => (
              <li key={index}>
                <img
                  className="cart--item-icon"
                  src={`/assets/icons/${item.id}.svg`}
                  alt={item.name}
                />
                <p>{item.name}</p>
                <button
                  className="quantity-btn remove-btn center"
                  onClick={() => {
                    decreaseQuantity(item);
                  }}
                >
                  -
                </button>
                <span className="quantity-text center">{item.quantity}</span>
                <button
                  className="quantity-btn add-btn center"
                  onClick={() => {
                    increaseQuantity(item);
                  }}
                >
                  +
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">
              £{Math.abs(totalCost).toFixed(2)}
            </span>
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
