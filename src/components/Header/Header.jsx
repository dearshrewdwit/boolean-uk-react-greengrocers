/* eslint-disable react/prop-types */
import { useState } from "react";

import ColorOptions from "./ColorOptions";

export default function Header({
  cartItems,
  setCartItems,
  storeItems,
}) {
  const [colorFilter, setColorFilter] = useState("");
  const [itemSort, setItemSort] = useState("nameAsc");

  function addItemToCart(inputItem) {
    const itemToAdd = cartItems.find((item) => item.id === inputItem.id);
    if (itemToAdd) {
      itemToAdd.quantity++;
      setCartItems([...cartItems]);
    } else {
      inputItem.quantity = 1;
      setCartItems([...cartItems, inputItem]);
    }
  }

  function storeFilter(event) {
    const color = event.target.value;
    setColorFilter(color);
  }

  function storeSort(event) {
    const sort = event.target.value;
    setItemSort(sort);
  }

  function sortArrays() {
    switch (itemSort) {
      case "nameAsc":
        return storeItems.sort((a, b) => {
          if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
          } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
          } else {
            return 0;
          }
        });

      case "nameDesc":
        return storeItems.sort((b, a) => {
          if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
          } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
          } else {
            return 0;
          }
        });

      case "priceAsc":
        return storeItems.sort((a, b) => a.price - b.price);
        
        case "priceDesc":
        return storeItems.sort((b, a) => a.price - b.price);

      default:
        break;
    }
  }

  const sortedStoreItems = sortArrays();

  const storeItemsFilterList = sortedStoreItems.filter((item) => {
    if (colorFilter && item.color !== colorFilter) {
      return false;
    }
    return true;
  });

  return (
    <header id="store">
      <h1>Greengrocers</h1>
      <div className="sort-filter">
        <div className="filter">
          <select
            value={colorFilter}
            onChange={storeFilter}
            name="filter"
            id="filter"
          >
            <option value="">Filter by: Colour</option>
            <ColorOptions storeItems={storeItems}></ColorOptions>
          </select>
        </div>
        <div className="sort">
          <select onChange={storeSort} name="sort" id="sort">
            <option value="nameAsc">Sort by: name (A-Z)</option>
            <option value="nameDesc">Sort by: name (Z-A)</option>
            <option value="priceAsc">Sort by: price (low-high)</option>
            <option value="priceDesc">Sort by: price (high-low)</option>
          </select>
        </div>
      </div>
      <ul className="item-list store--item-list">
        {storeItemsFilterList.map((item) => {
          return (
            <li key={item.id}>
              <div className="store--item-icon">
                <img src={`assets/icons/${item.id}.svg`} alt={item.name} />
              </div>
              <button onClick={() => addItemToCart(item)}>Add to cart</button>
            </li>
          );
        })}
      </ul>
    </header>
  );
}
