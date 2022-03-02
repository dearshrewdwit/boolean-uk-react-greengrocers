import './styles/reset.css'
import './styles/index.css'
import { useState } from 'react'
import initialStoreItems from './store-items'
import Cart from './components/cart'
import Store from './components/store'

export default function App () {
  // Setup state here...
  const [store, setStore] = useState(initialStoreItems)
  const [cart, setCart] = useState([])
  const [formData, setForm] = useState({
    filterType: '',
    sortBy: ''
  })

  function handleChange (e) {
    const { name, value } = e.target
    setForm(x => { return { ...x, [name]: value } })
  }

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


  let finalStore = store

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          <Store
            finalStore={ finalStore }
            formData={ formData }
            addToCart={ addToCart }
          />
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className='select'>
          <select
            id='filterType'
            name='filterType'
            value={ formData.filterType }
            onChange={ handleChange }
          >
            <option value=''>--filter by type--</option>
            <option value='fruite'>Fruite</option>
            <option value='vegetables'>Vegetables</option>
          </select>
          <div className="cart--item-list-container">
            <ul className="item-list cart--item-list">
              <Cart
                cart={ cart }
                removeFromCart={ removeFromCart }
                addToCart={ addToCart }
              />
            </ul>
          </div>
          <select
            id='sortBy'
            name='sortBy'
            value={ formData.sortBy }
            onChange={ handleChange }
          >
            <option value=''>--sort by--</option>
            <option value='price-low-high'>Price Low to High</option>
            <option value='price-high-low'>Price High to Low</option>
            <option value='alphabetically'>Alphabetically</option>
          </select>
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
