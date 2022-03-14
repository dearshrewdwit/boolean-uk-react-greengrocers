import './styles/reset.css'
import './styles/index.css'
import initialStoreItems from './store-items'
import Header from './components/Header/Header'
import CartSection from './components/CartSection/CartSection'
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
      <CartSection
        cart={cart}
        renderCartItem={renderCartItem}
        priceItemsInCart={priceItemsInCart}
      />
    </Fragment>
  )
}

export default App
