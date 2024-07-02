import React, { useState } from 'react';
import Store from './Store';
import Cart from './Cart';
import storeItems from './store-items';
import './styles/index.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, quantity) => {
    setCart(cart.map(cartItem =>
      cartItem.id === id ? { ...cartItem, quantity: Math.max(0, cartItem.quantity + quantity) } : cartItem
    ).filter(cartItem => cartItem.quantity > 0));
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div>
      <header id="store">
        <h1>Greengrocers</h1>
        <Store items={storeItems} addToCart={addToCart} />
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <Cart cart={cart} updateQuantity={updateQuantity} total={getTotal()} />
      </main>
    </div>
  );
}

export default App;
