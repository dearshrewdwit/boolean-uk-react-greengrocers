import './styles/reset.css'
import './styles/index.css'

import { useState } from 'react'
import Store from './Store.js'
import Cart from './Cart_Components/Cart'
import Total from './Cart_Components/Total'
import Filters from './Filters'

/*
What should a cart item look like? 🤔
*/

export default function App() {
  // Setup state here...
  const [cartItems, setCartItems] = useState([])
  const [showFilters, setShowFilters] = useState(false)
  const [selectedFilters, setSelectedFilters] = useState([])

  const addItemToCart = (item) => {
    if (!cartItems.includes(item)) {
      item.quantity = 1
      cartItems.push(item)
    } else {
      item.quantity++
    }
    setCartItems([...cartItems])
    console.log(cartItems)
  }

  const increaseQuant = (item) => {
    item.quantity++
    setCartItems([...cartItems])
  }

  const decreaseQuant = (item) => {
    if (item.quantity > 1) {
      item.quantity--
      setCartItems([...cartItems])
    } else {
      const newCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id)
      setCartItems([...newCartItems])
    }
  }

  const toggleFilters = () => {
    setShowFilters(!showFilters)
  }


  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <div className='filter-btn'>
          <button onClick={()=>toggleFilters()}>Filters</button>
          <Filters 
          showFilters={showFilters}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
          />
        </div>
        <Store 
        addItemToCart={addItemToCart}
        selectedFilters={selectedFilters}
        />
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <Cart 
          cartItems={cartItems}
          increaseQuant={increaseQuant}
          decreaseQuant={decreaseQuant}
        />
        <Total cartItems={cartItems}/>
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
