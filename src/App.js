import './styles/reset.css'
import './styles/index.css'

import Store from './Store'
import Cart from './Cart'
import Total from './Total'
import { useState } from 'react'

/*
Here's what a store item should look like
{
  id: '001-beetroot',
  name: 'beetroot',
  price: 0.35
}

What should a cart item look like? 🤔
*/


export default function App() {
  const [cartItemsList, setCartItemsList] = useState([]);

  

  const addItemToCart = (item) =>{
    const newCartArray = [...cartItemsList];
    const i = cartItemsList.findIndex((element) => element.id === item.id);
    if(i == -1)
    {
      item.quantity = 1;
      newCartArray.push(item);
    }
    else
    {
      item.quantity ++;
    }

    setCartItemsList(newCartArray);
  }

  const removeItemFromCart = (item) =>{
    const newCartArray = [...cartItemsList];
    const index = cartItemsList.findIndex(element => element.id === item.id);
    if(index == -1)
    return;
    else
    {
      if(item.quantity <= 1)
      {
        newCartArray.splice(index, 1);
      }
      else
        item.quantity --;

      setCartItemsList(newCartArray);
    }
  }

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {<Store addItemToCart= {addItemToCart}/>}
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
          {<Cart cartList={cartItemsList} addItemToCart={addItemToCart} removeItemFromCart={removeItemFromCart}/>}
          </ul>
        </div>
        {<Total cart={cartItemsList}/>}
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
