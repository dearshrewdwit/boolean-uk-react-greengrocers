import './styles/reset.css'
import './styles/index.css'

import { useState } from 'react'
import initialStoreItems from './store-items'

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
          {items.map((item) => (
            <li key={item.id}>
              <div className="store--item-icon">
                <img src={`/assets/icons/${item.id}.svg`} alt={item.name} />
              </div>
              <button onClick={() => addToCart(item)}>Add to cart</button>
              <p>{item.name.toUpperCase()}</p>
              <p>${item.price.toFixed(2)}</p>
            </li>
          ))}

        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {cart.map((item) => (
              <li key={item.id}>
                <div className="cart--item-icon">
                  <img src={`/assets/icons/${item.id}.svg`} alt={item.name} />
                </div>
                <p>{item.name.toUpperCase()}</p>
                <button className="quantity-btn remove-btn center" onClick={() => removeFromCart(item)}>
                  -
                </button>
                <span className="quantity-text center">{item.quantity}</span>
                <button className="quantity-btn add-btn center" onClick={() => addToCart(item)}>+</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">{cartPrice()}</span>
          </div>
        </div>
      </main >
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
  )
}
