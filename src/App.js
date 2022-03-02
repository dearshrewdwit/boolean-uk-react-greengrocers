import './styles/reset.css'
import './styles/index.css'
import { useState } from 'react'
import initialStoreItems from './store-items'

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

  console.log(formData)

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

  let finalStore = store

  if (formData.sortBy === "") {
    finalStore = store
  }

  if (formData.sortBy === 'alphabetically') {
    finalStore.sort(function (a, b) {
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }
  if (formData.sortBy === 'price-low-high') {
    finalStore.sort(function (a, b) {
      return a.price - b.price;
    });
  }
  if (formData.sortBy === 'price-high-low') {
    finalStore.sort(function (b, a) {
      return a.price - b.price;
    });
  }

  const displayedStore = finalStore.map(x => {
    return (
      (formData.filterType === '' || (x.type === formData.filterType)) &&
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
              { displayCart }
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
