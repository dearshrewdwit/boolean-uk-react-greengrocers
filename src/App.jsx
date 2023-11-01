import { useState } from "react";
import "./styles/reset.css";
import "./styles/index.css";
import Items from "./components/Items";
import CartItems from "./components/CartItems"; 

export default function App() {
  const [cartItems, setCartItems] = useState([]);

const handleAddToCart = (item) => {
  
  const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

  if (existingItem) {
    
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    setCartItems(updatedCartItems);
  } else {

    setCartItems([...cartItems, { ...item, quantity: 1 }]);
  }
};

const handleRemoveItem = (itemId) => {
  // Remove the item from the cart based on its ID
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
              <CartItems
                key={cartItem.id}
                item={cartItem}
                onAdd= {handleAddToCart}
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

