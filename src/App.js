import './styles/reset.css'
import './styles/index.css'
import storeItems from './store-items'

import { useState } from 'react'
// import StoreItem from './components/StoreItem'
// import StoreItemList from './components/StoreItemList'



export default function App() {
  // Setup state here...

  
  const [cartItems, setCartItems] = useState([]) // I created a state to store an empty array which will be used to add items to cart

  let totalCartPrice = 0;


function addItemsToCart(item) {   //I created a function and passed in item which is an object for every for every item like apple.
  console.log("add item", item)   // checking if item displays on console
  const cartItemsCopy = [...cartItems] // creating a copy of the empty cartItems array called cartItemsCopy
  
  if(!cartItemsCopy.includes(item)) {
    item.quantity = 1
    cartItemsCopy.push(item)
  }
  else {
    item.quantity += 1
  }
  setCartItems(cartItemsCopy)   // updating the state with the copy array

  console.log(cartItemsCopy) // checking if cartItemsCopy displays on console
}  

  
function removeItemsFromCart(item) {
    console.log("remove item", item)   
    const cartItemsCopy = [...cartItems] 
    
    if(cartItemsCopy.includes(item)) {
      if(item.quantity === 1) {
        item.quantity -= 1
        cartItemsCopy.pop(item)
      }
      else  {
        item.quantity -= 1
      } 
    }
    
        setCartItems(cartItemsCopy)   // updating the state with the copy array

    console.log(cartItemsCopy) // checking if cartItemsCopy displays on console
}
  
  
console.log("rendering") // using rendering as string to let me know whats happening in console, for clarity.

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {storeItems.map(item => {
            return  <li>
                      <div class="store--item-icon">
                         <img src={`/assets/icons/${item.id}.svg`}  />  
                      </div>
                      <button onClick={()=>addItemsToCart(item)}>Add to cart</button>
                    </li>
                })
          }
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {cartItems.map(item => {
              totalCartPrice += item.price * item.quantity;
              console.log(item)
             return <li>
              <img
                class="cart--item-icon"
                src={`assets/icons/${item.id}.svg`}
              />
              <p>{item.name}</p>
              <button class="quantity-btn remove-btn center" onClick={()=>removeItemsFromCart(item)}>-</button>
              <span class="quantity-text center">{item.quantity}</span>
              <button class="quantity-btn add-btn center" onClick={()=>addItemsToCart(item)}>+</button>
            </li>
            })}
          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total
            </h3>
          </div>
          <div>
            <span className="total-number">£{totalCartPrice}</span>
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
