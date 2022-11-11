import './styles/reset.css'
import './styles/index.css'

import StoreItemList from './StoreItemList'
import initialStoreItems from './store-items'
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

console.log(initialStoreItems)

function App() {
  // Setup state here...
  const [storeItems, setStoreItems] = useState(initialStoreItems)
  const [cartItems, setCartItems] = useState([])

  function addToCart(itemToAdd) {
    if (cartItems.includes(itemToAdd)) {
      // check 2.1 immutable state slides 12 to 14. implement here
      console.log('this item is in the cart. Increase quantity')
    } else {
      // add the quantity property
      itemToAdd.quantity = 1
      // const newTodos = [...todos]
      const newCart = [...cartItems]
      // newTodos.push({ text, completed: false })
      newCart.push(itemToAdd)
      // setTodos(newTodos)
      setCartItems(newCart)
      console.log('adding to happen here', cartItems)
    }
  }

  // const addTodo = text => {
  //   if (todos.some(todo => todo.text.toLowerCase() === text.toLowerCase())) {
  //     alert('That todo already exists!')
  //     return
  //   }
  //   setTodos([...todos, { text, completed: false }])
  // }
  // add quantity checking function here.

  return (
    <>
      <StoreItemList
        storeItems={storeItems}
        /* below i am passing the function into my StoreItemList */
        addToCart={addToCart}
        // need to be passed down to storeItem.js via props.
        //
      />
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {cartItems.map(item => {
              return (
                <li>
                  <img
                    class="cart--item-icon"
                    src={`/assets/icons/${item.id}.svg`}
                    alt={item.name}
                  />
                  <p>{item.name}</p>
                  <button class="quantity-btn remove-btn center">-</button>
                  <span class="quantity-text center">1</span>
                  <button class="quantity-btn add-btn center">+</button>
                </li>
              )
            })}
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
  )
}
export default App
