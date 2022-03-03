import './styles/reset.css'
import './styles/index.css'

import initialStoreItems from './store-items'
import { useState } from 'react'

import storeItem from './storeItem'

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
  // Setup state here...

  const [storeItems, setStoreItems] = useState(initialStoreItems) //I created a state to store the inital store items

  const [cartItems, setCartItems] = useState([]) // I created a state to store an empty array which will be used to add items to cart

  let totalCartPrice = 0;
 
// 1. Add onClick to button
// 2. Create a function for addItemsToCart
// 3.

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




   // adding a key called quantity with a value 1 to the item object

    // adding the item to the copy array using push

  
  
console.log("rendering") // using rendering as string to let me know whats happening in console, for clarity.


// const quantityIncrease = (item) => {   // creating an arrow function called quantity increase with the item argument
//   console.log("am I going up?", item)  // checking if item displays in console
// /* ----------------- I'm testing code below  --------------------- */
// const cartItemsCopy = cartItems.map(function(addEl) { 

//     if(addEl === item) {

//       const cartItemsCopy = {...item}

//       return cartItemsCopy
//     }
//     else {
//       return addEl
//     }
//   })
//   setCartItems(cartItemsCopy)
// }

// Line 76 - we are copying storeItems array and using map (change). We pass in item into the arrow function
//Line 77-83 is return the list of items because on line 79 we are looping through all items and then on 82 we are adding the button
//so when user clicks it will add item.
// Line 93 - we are copying cartItems array and using map (change). We pass in item into the arrow function

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
                      <button onClick={e=>addItemsToCart(item)}>Add to cart</button>
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
