import './styles/reset.css'
import './styles/index.css'

import initialStoreItems from './store-items'
import storeItems from './store-items'
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
  // Setup state here...

  const [storeItems, setStoreItems] = useState(initialStoreItems)
  const [cartItems, setCartItems] = useState([])

  console.log(initialStoreItems)
  function addCartItems(itemsCart) {
    const addItems = cartItems.find((items) => items.id === itemsCart.id)
    if (addItems) {
      addItems.quantity++
      setCartItems([...cartItems])
    } else {
      itemsCart.quantity = 1
      setCartItems([...cartItems, itemsCart])
    }

  }

  //for increase the amount of items
  function addItem(itemsCart){
    itemsCart.quantity++
    setCartItems([...cartItems])
  }
 //for decrease the amount of items
  function minusItem(itemsCart){
    itemsCart.quantity--

     if(itemsCart.quantity <= 0){
      const index = cartItems.findIndex((items)=> items.id === itemsCart.id)
      cartItems.splice(index,1)
     }
     setCartItems([...cartItems])
  }

  // for amount
  function totalAmount(){
    let total = 0
    cartItems.forEach(items => { 
      total+= items.price*items.quantity
    })
    return total.toFixed(2)
  }

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {storeItems.map(items => {
            return (
              <li key={items.id}>
                <div class="store--item-icon">
                  <img src={`/assets/icons/${items.id}.svg`} alt={items.name} />
                </div>
                <button onClick={() =>  addCartItems(items) }>Add to cart</button>
              </li>
            )
            }
          )
            }
          
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {cartItems.map(items => {
            return (
              <li key={items.id}>
                <img
                  class="cart--item-icon"
                  src={`assets/icons/${items.id}.svg`}
                  alt={items.name}
                />
                <p>{items.name}</p>
                <button class="quantity-btn remove-btn center" onClick={()=> minusItem(items)}>-</button>
                <span class="quantity-text center">{items.quantity}</span>
                <button class="quantity-btn add-btn center" onClick={() => addItem(items)}>+</button>
              </li>
            )
             
          })
            }
          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number" >${totalAmount()}</span>
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
  )
}
