import React, { useState } from "react";
import "./styles/reset.css";
import "./styles/index.css";
import initialStoreItems from "./store-items";
import Header from "./Header.jsx";
import CartContainer from "./CartContainer.jsx";
import Cart from "./Cart.jsx";
import Filter from "./Filter.jsx";
import Sort from "./Sort.jsx";
import Detail from "./Detail.jsx";
import ItemList from "./ItemList.jsx";

export default function App() {
  const [storeItems, setStoreItems] = useState(initialStoreItems);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
    setTotalPrice(totalPrice + item.price);
  };

  const removeFromCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
    setTotalPrice(totalPrice - item.price);
  };

  const filterItems = (items) => {
    if (filter === "") return items;
    return items.filter((item) => item.type === filter);
  };

  const sortItems = (items) => {
    if (sort === "price") {
      return items.sort((a, b) => a.price - b.price);
    }
    if (sort === "alphabetical") {
      return items.sort((a, b) => a.name.localeCompare(b.name));
    }
    return items;
  };

  const handleItemClick = (item) => {
    setSelectedItem(item.id === selectedItem?.id ? null : item);
  };

  const filteredAndSortedItems = sortItems(filterItems([...storeItems]));

  return (
    <>
      <Header />
      <Filter setFilter={setFilter} />
      <Sort setSort={setSort} />
      <ItemList
        items={filteredAndSortedItems}
        addToCart={addToCart}
        onItemClick={handleItemClick}
      />
      {selectedItem && <Detail item={selectedItem} />}
      <CartContainer>
        <Cart
          items={cartItems}
          removeFromCart={removeFromCart}
          addToCart={addToCart}
          totalPrice={totalPrice}
        />
      </CartContainer>
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
