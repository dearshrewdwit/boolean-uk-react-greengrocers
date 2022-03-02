import './styles/reset.css'
import './styles/index.css'
import { useState } from 'react'
import initialStoreItems from './store-items'

export default function App () {
  // Setup state here...
  const [store, setStore] = useState(initialStoreItems)
  const [cart, setCart] = useState([])

  function addToCart (item) {
    checkQuantity(item.id) ? IncQuantity(item) : setCart([...cart, { ...item }])
  }
  function removeFromCart (item) {
    item.quantity === 1 ? setCart(x => x.filter(c => c.id !== item.id)) : DecQuantity(item)
  }
  function DecQuantity (item) {
    setCart(x => x.map(c => c.id === item.id ? { ...c, quantity: c.quantity - 1 } : c))
  }
  function IncQuantity (item) {
    setCart(x => x.map(c => c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c))
  }
  function checkQuantity (id) {
    return cart.some(x => x.id === id)
  }
  const total = cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0)

  const displayCart = cart.map(x => {
    return (
      <li key={ x.id } >
        <img
          class="cart--item-icon"
          src={ "/assets/icons/" + x.id + '.svg' }
          alt={ x.name }
        />
        <p>{ x.name }</p>
        <button onClick={ () => removeFromCart(x) } class="quantity-btn remove-btn center">-</button>
        <span class="quantity-text center">{ x.quantity }</span>
        <button onClick={ () => addToCart(x) } class="quantity-btn add-btn center">+</button>
      </li>
    )
  })

  const displayedStore = store.map(x => {
    return (
      <li key={ x.id } >
        <div class="store--item-icon">
          <img src={ "/assets/icons/" + x.id + '.svg' } alt={ x.name } />
        </div>
        <button onClick={ () => addToCart(x) }>Add to cart</button>
      </li>
    )
  })
  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          { displayedStore }
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            { displayCart }
          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">{ '£' + total.toFixed(2) }</span>
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
