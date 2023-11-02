import './styles/reset.css'
import './styles/index.css'

import { useState } from 'react'
import initialStoreItems from './store-items'
import Header from './Header'
import Cart from './Cart'
import Footer from './Footer'

/*
 Here's what a store item should look like
 {
 id: '001-beetroot',
 name: 'beetroot',
 price: 0.35
 }
 What should a cart item look like? 🤔
 */
console.log(initialStoreItems)

export default function App() {
  //  creating state here...

  const [items, setItems] = useState(initialStoreItems)
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const updatedCart = [...cart];
    const existingItemIndex = updatedCart.findIndex((cartItem) => cartItem.id === item.id);

    if (existingItemIndex !== -1) {
      updatedCart[existingItemIndex].quantity += 1;
    } else {
      updatedCart.push({ ...item, quantity: 1 });
    }
    setCart(updatedCart);
  };

  const removeFromCart = (item) => {
    const updatedCart = [...cart];
    const existingItemIndex = updatedCart.findIndex((cartItem) => cartItem.id === item.id);

    if (existingItemIndex !== -1) {
      const updatedItem = { ...updatedCart[existingItemIndex] };
      if (updatedItem.quantity > 1) {
        updatedItem.quantity -= 1;
        updatedCart[existingItemIndex] = updatedItem;
      } else {
        updatedCart.splice(existingItemIndex, 1);
      }

      setCart(updatedCart);
    }
  };

  function cartPrice() {
    const money = cart.reduce((sum, item) => {
      return sum + (item.price * item.quantity);
    }, 0);

    const formattedMoney = `£${money.toFixed(2)}`;

    return formattedMoney;
  }

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {/* Write some code here... */}
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {/* Write some code here... */}
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
      <Header items={items} addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} addToCart={addToCart} cartPrice={cartPrice} />
      <Footer />
    </>
  )
}
  