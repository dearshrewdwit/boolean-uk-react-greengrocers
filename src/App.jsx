import "./styles/reset.css";
import "./styles/index.css";
import initialStoreItems from "./store-items";

import { useState } from "react";
import Header from "./Header";
import Cart from "./Cart";

export default function App() {
  const [products, setProducts] = useState(initialStoreItems);
  const [cart, setCart] = useState([]);

  function handleAddToCartClick(event) {
    const { id } = event.target;
    const isFound = cart.find((product) => product.id === id);

    products.forEach((product) => {
      if (product.id === id && !isFound) {
        setCart([...cart, { ...product, quantity: 1 }]);
      }

      if (product.id === id && isFound) {
        const index = cart.findIndex((product) => product.id === id);
        const item = cart[index];

        const newCart = cart.map((product) => {
          if (product.id === item.id) {
            product.quantity = product.quantity + 1;
          }
          return product;
        });

        setCart(newCart);
      }
    });
  }

  return (
    <>
      <Header products={products} handleAddToCartClick={handleAddToCartClick} />
      <Cart cart={cart} setCart={setCart} />
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
