import  { useState } from "react";
import "./styles/reset.css";
import "./styles/index.css";
import Items from "./components/Items";
import CartItem from "./components/CartItems";

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

  const handleQuantityChange = (itemId, quantityChange) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemId
        ? { ...item, quantity: Math.max(0, item.quantity + quantityChange) }
        : item
    );
    setCartItems(updatedCartItems.filter((item) => item.quantity > 0));
  };

  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  const calculateTotal = () => {
    const total = cartItems.reduce(
      (accumulator, item) => accumulator + item.price * item.quantity,
      0
    );
    return total.toFixed(2);
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
                onQuantityChange={handleQuantityChange}
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
            <span className="total-number">{`£${calculateTotal()}`}</span>
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


     


     