import { useState } from "react";
import "./styles/reset.css";
import "./styles/index.css";
import Items from "./components/Items";
import CartItem from "./components/CartItems"; 

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <Items addToCart={handleAddToCart} />
      </header>

      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {cartItems.map((cartItem) => (
              <CartItem
                key={cartItem.id}
                item={cartItem}
                onRemove={handleRemoveItem}
              />
            ))}
          </ul>
        </div>

        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">£0.00</span>
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

