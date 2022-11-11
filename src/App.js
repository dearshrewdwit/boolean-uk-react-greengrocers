import './styles/reset.css'
import './styles/index.css'

import initialStoreItems from './store-items'
import Store from './Store'
import { useState } from 'react'
import Cart from './Cart'

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
  const [cart, setCart] = useState([])
  const [quantity, setQuantity]= useState(1)

  //  Adding item into Cart
  function addToCart(item) {
    // check if the item is already in the cart
    // if it is increase the quantity by 1 and return
    const itemFound = cart.find(itemFromCart => itemFromCart.id === item.id)
    if (itemFound) {
      itemFound.quantity += 1
    } else {
      console.log(item)
      const cartItem = { ...item, quantity: 1 }
      setCart([...cart, cartItem])
    }
  }

  // item increase  and decrease in Cart
  
  function handleIncrement (item) {
    setQuantity(quantity + 1)
  }
  function handleDecrement(item){
    setQuantity(quantity - 1)
  }
  

  
  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <Store addToCart={addToCart} />
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <Cart cart={cart} />
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
