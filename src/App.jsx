import './styles/reset.css'
import './styles/index.css'

import { useState } from 'react'


import initialStoreItems from './store-items'

export default function App() {
  // Setup state here...
  const [store, setStore] = useState(initialStoreItems)
  const [cart, setCart] = useState([])

  const handleClick = (target) => {
    const itemInCart = cart.findIndex((cartItem) => cartItem.id === target.id)

    
    if (itemInCart === -1){
      setCart([...cart,{...target, count: 1}])
    }
    else{
      const newCart = [...cart]
      newCart[itemInCart].count++
      setCart(newCart)
    }
    
  }

  const incrementCartItem = (target) => {
    const itemInCart = cart.findIndex((cartItem) => cartItem.id === target.id)

    const newCart = [...cart]
    newCart[itemInCart].count++
    setCart(newCart)
    }

  
  
  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {store.map((item, index) => (
            <li key={index}>
              <div className="store--item-icon">
              <img src={`/assets/icons/${item.id}.svg`} alt={item.name} />
              </div>
              <button onClick={() => handleClick(item)}>Add to cart</button>
            </li>
          ) )

          }
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {cart.map((item, index) => (
              <li key={index}>
              <img
                className="cart--item-icon"
                src={`/assets/icons/${item.id}.svg`} alt={item.name}
              />
              <p>{item.name}</p>
              <button className="quantity-btn remove-btn center">-</button>
              <span className="quantity-text center">{item.count}
              </span>
              <button className="quantity-btn add-btn center" onClick={() => incrementCartItem(item)}>+</button>
            </li>
            ))}
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
