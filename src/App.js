import './styles/reset.css'
import './styles/index.css'
import initialStoreItems from './store-items'
import { Fragment } from 'react'
import { useState } from 'react'

function App() {
  const [cart, setCart] = useState([])
  const [currentFilter, setCurrentFilter] = useState('show-all')

  const filterFruits = initialStoreItems.filter(storeItem => storeItem.type === 'fruit')
  const filterVegetables = initialStoreItems.filter(storeItem => storeItem.type === 'veg')

  let filteredItems = initialStoreItems

  if (currentFilter === 'fruit') {
    filteredItems = filterFruits
  } else if (currentFilter === 'veg') {
    filteredItems = filterVegetables
  }

  // const filterByType = (e) => {
  //   console.log(e.target.value)
  //    else return
  // }

  const addItemToCart = item => {
    if (findCartItem(item)) {
      alert(`${item.name} is already in the cart`)
      return
    }
    item.quantity = 1
    setCart([...cart, item])
  }

  const incrementCartItemQuantity = item => {
    if (findCartItem(item)) {
      item.quantity += 1
    }
    setCart([...cart])
  }

  const decrementCartItemQuantity = item => {
    if (findCartItem(item)) {
      if (item.quantity > 1) {
        item.quantity -= 1
      } else removeItemFromCart(item)
    }
    setCart([...cart])
  }

  const removeItemFromCart = cartItem => {
    cart.splice(cart.indexOf(cartItem), 1)
  }

  const findCartItem = cartItem => {
    return cart.find(item => item === cartItem)
  }

  const priceItemsInCart = cartArray => {
    const shoppingArray = cartArray.map(
      cartItem => cartItem.price * cartItem.quantity
    )
    const totalPrice = 0 + shoppingArray.reduce((a, b) => a + b, 0)
    return totalPrice.toFixed(2)
  }

  const renderCartItem = cartArray => {
    return cartArray.map((cartItem, i) => {
      return (
        <li key={i}>
          <img
            className="cart--item-icon"
            src={`/assets/icons/${cartItem.id}.svg`}
            alt="beetroot"
          />
          <p>{cartItem.name}</p>
          <button
            className="quantity-btn remove-btn center"
            onClick={() => decrementCartItemQuantity(cartItem)}
          >
            -
          </button>
          <span className="quantity-text center">{cartItem.quantity}</span>
          <button
            className="quantity-btn add-btn center"
            onClick={() => incrementCartItemQuantity(cartItem)}
          >
            +
          </button>
        </li>
      )
    })
  }

  const renderStoreItems = () => {
    return filteredItems.map((storeItem, i) => {
      return (
        <li key={i}>
          <div className="store--item-icon">
            <img
              src={`/assets/icons/${storeItem.id}.svg`}
              alt={storeItem.name}
            />
          </div>
          <button onClick={() => addItemToCart(storeItem)}>Add to cart</button>
        </li>
      )
    })
  }

  return (
    <Fragment>
      <header id="store">
        <h1>Greengrocers</h1>
        <label htmlFor="filter" id="filters-label">
          Filter products:
        </label>
        <select name="product" id="select-products" onChange={(e) => setCurrentFilter(e.target.value)}>
          <option value="show-all">Show all</option>
          <option value="fruit">Fruit</option>
          <option value="veg">Vegetables</option>
        </select>
        <ul className="item-list store--item-list">
          {renderStoreItems()}
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">{renderCartItem(cart)}</ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">{`£ ${priceItemsInCart(
              cart
            )}`}</span>
          </div>
        </div>
      </main>
    </Fragment>
  )
}

export default App
