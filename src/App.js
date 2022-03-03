import './styles/reset.css'
import './styles/index.css'

import { useState } from 'react'
import StoreItems from './components/StoreItems'
import Cart from './components/Cart'
import initialStoreItems from './store-items'

export default function App() {
  const [cart, setCart] = useState([])
  const [filter, setFilter] = useState('none')
  const [filterTwo, setFilterTwo] = useState('none')

  const getVeg = storeItems => storeItems.filter(item => item.type === 'veg')
  const getFruit = storeItems =>
    storeItems.filter(item => item.type === 'fruit')

  const compare = (a, b) => {
    if (a.name < b.name) {
      return -1
    }
    if (a.name > b.name) {
      return 1
    }
    return 0
  }
  const compareTwo = (a, b) => {
    if (a.id < b.id) {
      return -1
    }
    if (a.id > b.id) {
      return 1
    }
    return 0
  }

  const sortAlphabetically = storeItems => storeItems.sort(compare)
  const sortById = storeItems => storeItems.sort(compareTwo)
  

  let filteredStoreItems = initialStoreItems
  if (filterTwo === 'none') {
    if (filter === 'veg') {
      filteredStoreItems = getVeg(initialStoreItems)
    } else if (filter === 'fruit') {
      filteredStoreItems = getFruit(initialStoreItems)
    }
    sortById(filteredStoreItems)
  }
  else if (filterTwo === 'alphabetically') {
    if (filter === 'veg') {
      filteredStoreItems = getVeg(initialStoreItems)
    } else if (filter === 'fruit') {
      filteredStoreItems = getFruit(initialStoreItems)
    }
    else if (filter === 'none') {
    }
    sortAlphabetically(filteredStoreItems)
  }

  const total = () => {
    let price = 0
    for (const item of cart) {
      price += item.price * item.quantity
    }
    return '£' + price.toFixed(2)
  }

  console.log('rendering app..')
  console.log(cart)
  
  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <div className="filters-section">
          <label for="filters">Choose a filter...</label>
          <select
            id="filters"
            name="filters"
            onChange={option => setFilter(option.target.value)}
          >
            <option value="none">None</option>
            <option value="fruit">Fruit</option>
            <option value="veg">Veg</option>
          </select>
          <label for="filters">Sort by...</label>
          <select
            id="filters"
            name="filters"
            onChange={option => setFilterTwo(option.target.value)}
          >
            <option value="none">None</option>
            <option value="alphabetically">A - Z</option>
          </select>
        </div>
        <br />
        <StoreItems
          storeItems={filteredStoreItems}
          cart={cart}
          setCart={setCart}
        />
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <Cart cart={cart} setCart={setCart} />
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">{total()}</span>
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
