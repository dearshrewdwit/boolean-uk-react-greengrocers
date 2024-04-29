import { useState } from "react";

export default function StoreCard({
  initialStoreItems,
  addToCart,
  cart,
  filter,
  sort,
}) {
  const [itemDetailDisplay, setItemDetailDisplay] = useState("");

  function handleClick(item) {
    if (item.quantity) {
      item.quantity++;
    } else {
      item.quantity = 1;
    }
    if (cart.includes(item)) {
      addToCart([...cart]);
      return;
    }
    addToCart([...cart, item]);
  }

  function handleImgClick(item) {
   itemDetailDisplay === item.name ? setItemDetailDisplay('') : setItemDetailDisplay(item.name)
    
  }

  let filteredItems;

  if (filter !== "all") {
    filteredItems = initialStoreItems.filter((item) => item.type === filter);
  } else {
    filteredItems = initialStoreItems;
  }

  if (sort) {
    if (sort === "name") {
      filteredItems.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      filteredItems.sort((a, b) => a.price - b.price);
    }
  }

  return filteredItems.map((item, index) => {
    return (
      <li key={index}>
        <div className="store--item-icon">
          <img
            onClick={() => handleImgClick(item)}
            src={`/assets/icons/${item.id}.svg`}
            alt={item.name}
          />
        </div>
        {item.name === itemDetailDisplay && <p className="item-detail">{item.description}</p>}
        <button onClick={() => handleClick(item)}>Add to cart</button>
      </li>
    );
  });
}
