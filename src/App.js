import './styles/reset.css'
import './styles/index.css'

import initialStoreItems from './store-items'
import { useEffect, useState } from 'react'

/*
Here's what a store item should look like
{
  id: '001-beetroot',
  name: 'beetroot',
  price: 0.35
}

What should a cart item look like? 🤔
*/

console.log(initialStoreItems)

export default function App() {
  const [items, setItems] = useState(initialStoreItems)
  const [cart, setCart] = useState([])
  const [sortType, setSortType] = useState('price')

  const addToCart = item => {
    console.log("what's the item?", item)
    // Check if the item is already in the cart and the use as a boolean
    const alreadyInCart = cart.find(
      existingItem => existingItem.name === item.name
    )
    // if Boolean is true, setCart to equal the new map array with the item quantity incremented and the rest of the items
    // are added as copies that are not altered
    if (alreadyInCart)
      setCart(
        cart.map(existingItem =>
          existingItem.name === item.name
            ? { ...existingItem, quantity: existingItem.quantity + 1 }
            : existingItem
        )
      )
    // if Boolean evalutes to false then set the cart to a copy of the cart and create a copy of the object called item that is
    // passed into the function and add a new key called quantity with a value of 1
    else setCart([...cart, { ...item, quantity: 1 }])
    console.log(cart)
  }

  const filterItems = e => {
    if (e.target.value === 'veg' || e.target.value === 'fruit') {
      setItems(
        initialStoreItems.filter(item => item.category === e.target.value)
      )
    } else setItems(initialStoreItems)
  }

  const sort = (e) => {
    if (e === 'name') {
      sortByName(e)
    }
    else sortByPrice(e)
    console.log('what is e', e)
    }

  const sortByName = () => {
    const sorted = [...items]
    sorted.sort((a, b) => {
      const nameA = a.name.toUpperCase()
      const nameB = b.name.toUpperCase()
      if (nameA < nameB) {
        return -1
      }
      if (nameA > nameB) {
        return 1
      }
      return 0
    })
    console.log('name array',sorted)
    setItems(sorted)
  }

  const sortByPrice = () => {
    const sorted = items.sort((a, b) => a.price - b.price);
    console.log('price array',sorted)
    setItems(sorted)
  };
  

  const decreaseItem = item => {
    if (item.quantity > 1) {
      setCart(
        cart.map(existingItem =>
          existingItem.name === item.name
            ? { ...existingItem, quantity: existingItem.quantity - 1 }
            : existingItem
        )
      )
    } else if (item.quantity === 1)
      setCart(cart.filter(existingItem => existingItem !== item))
  }

  const increaseItem = item => {
    setCart(
      cart.map(existingItem =>
        existingItem.name === item.name
          ? { ...existingItem, quantity: existingItem.quantity + 1 }
          : existingItem
      )
    )
  }

  const total = () => {
    let totalPrice = 0.0
    for (const item of cart) {
      totalPrice += item.price * item.quantity
    }
    return totalPrice.toFixed(2)
  }

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <label for="type">Choose your culinary weapon:</label>
        <select onChange={e => filterItems(e)} name="type" id="type">
          <option value="fruit">Fruit</option>
          <option value="veg">Vegetables</option>
          <option value="everything">Everything</option>
        </select>
        <label for="type">Arrange items:</label>
        <select
          onChange={e => sort(e.target.value)}
          name="type"
          id="type"
        >
          <option value="price">Price</option>
          <option value="name">Name</option>
        </select>
        <ul className="item-list store--item-list">
          {items.map((item, index) => {
            return (
              <li key={index}>
                <div className="store--item-icon">
                  <img src={`/assets/icons/${item.id}.svg`} alt={item.name} />
                </div>
                <button onClick={() => addToCart(item)} className="button">
                  Add To Cart
                </button>
              </li>
            )
          })}
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {cart.map((item, index) => {
              return (
                <li key={index}>
                  <img
                    className="cart--item-icon"
                    src={`/assets/icons/${item.id}.svg`}
                    alt={item.name}
                  />
                  <p>{item.name}</p>
                  <button
                    onClick={() => decreaseItem(item)}
                    className="quantity-btn remove-btn center"
                  >
                    -
                  </button>
                  <span className="quantity-text center">{item.quantity}</span>
                  <button
                    onClick={() => increaseItem(item)}
                    className="quantity-btn add-btn center"
                  >
                    +
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">£{total()}</span>
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
