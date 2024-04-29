import './styles/reset.css'
import './styles/index.css'
import { useState } from 'react'
import Item from './Item'

import initialStoreItems from './store-items'
import CartItem from './CartItem'




export default function App() {
  const [cart, setCart] = useState([])
  const [storeItems, setStoreItems] = useState(initialStoreItems)
  
  function addCartItem(item) {
    const element = storeItems.find(e => (e.name === item.name))

    if(!element){
      throw new Error("This is not a valid item")
    }
  
    const cartElement = cart.find(e => (e.name === item.name))
    const isInCart = !cartElement
  
    if(isInCart) {
      const newCartElement = structuredClone(element)
      newCartElement.quantity = 1
      cart.push(newCartElement)
      setCart([...cart])
    } else {
      cartElement.quantity++
      setCart([...cart])
    }
  
  
  }

  function decreaseCartCount(element) {
    element.quantity--
    if(element.quantity < 1) {
      const indexToRemove = cart.findIndex(e => (e.name === element.name))
      cart.splice(indexToRemove, 1)
    }
    setCart([...cart])
  }

  function increaseCartCount(element) {
    element.quantity++
    setCart([...cart])
  }

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {storeItems.map( (e, index)=> {
            return <Item key={index} item={e} addCartItem={addCartItem}/>
          })}
          
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {cart.map((e, index) => {
              return <CartItem key={index} item={e} decreaseCartCount={decreaseCartCount} increaseCartCount={increaseCartCount}/>
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
