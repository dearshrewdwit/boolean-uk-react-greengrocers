/* eslint-disable react/prop-types */
import initialStoreItems from "../store-items";
import { useState } from "react";

function ItemInCart({ addTheCartItem }) {
  const [storeItems, setStoreItems] = useState(initialStoreItems);

  return (
    <>
      {storeItems.map((item, index) => (
        <li key={`${item.name}${index}`}>
          <div className="store--item-icon">
            <img src={`/assets/icons/${item.id}.svg`} alt={item.name} />
          </div>
          <button
            onClick={() => {
              addTheCartItem(item);
            }}
          >
            Add to cart
          </button>
        </li>
      ))}
    </>
  );
}

export default ItemInCart;
