import './styles/reset.css'
import './styles/index.css'
import initialStoreItems from './store-items'
import StoreList from './components/StoreList/StoreList'
import Header from './components/Header/Header'
import { Fragment } from 'react'
import { useState } from 'react'

function App() {
  const [cart, setCart] = useState([])
  const [currentFilter, setCurrentFilter] = useState('show-all')
  const [currentSorter, setCurrentSorter] = useState('sort-by')

  const filterFruits = initialStoreItems.filter(
    storeItem => storeItem.type === 'fruit'
  )

  const filterVegetables = initialStoreItems.filter(
    storeItem => storeItem.type === 'veg'
  )

  let filteredItems = initialStoreItems

  if (currentFilter === 'fruit') {
    filteredItems = filterFruits
  } else if (currentFilter === 'veg') {
    filteredItems = filterVegetables
  }

  const sortedByName = [...filteredItems]
  sortedByName.sort((firstEl, secondEl) =>
    firstEl.name.localeCompare(secondEl.name)
  )

  const sortedByPrice = [...filteredItems]
  sortedByPrice.sort((firstEl, secondEl) => {
    if (firstEl.price < secondEl.price) return -1
    if (firstEl.price > secondEl.price) return 1
    else return 0
  })

  if (currentSorter === 'alphabet') {
    filteredItems = sortedByName
  } else if (currentSorter === 'price') {
    filteredItems = sortedByPrice
  }

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
      item.quantity++
    }
    setCart([...cart])
  }

  const decrementCartItemQuantity = item => {
    if (findCartItem(item)) {
      if (item.quantity > 1) {
        item.quantity--
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
    return cartArray.map(cartItem => {
      return (
        <li key={cartItem.id}>
          <img
            className="cart--item-icon"
            src={`/assets/icons/${cartItem.id}.svg`}
            alt={cartItem.name}
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

  return (
    <Fragment>
      <Header
        filteredItems={filteredItems}
        addItemToCart={addItemToCart}
        setCurrentSorter={setCurrentSorter}
        setCurrentFilter={setCurrentFilter}
      />

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
