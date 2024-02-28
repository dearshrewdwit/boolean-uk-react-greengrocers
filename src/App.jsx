import './styles/reset.css'
import './styles/index.css'

import initialStoreItems from './store-items'
import { useState, useEffect } from 'react'

import StoreItem from './components/StoreItem.jsx'
import BasketItem from './components/BasketItem.jsx'

/*
 Here's what a store item should look like
 {
 id: '001-beetroot',
 name: 'beetroot',
 price: 0.35
 }

 What should a cart item look like? 🤔

 {
  id
  name
  quantity
 }
 */

 const sortOptions = ['', 'price desc', 'price asc', 'alphabetically desc', 'alphabetically asc']
 const filterOptions  = ['', ...new Set(initialStoreItems.map(item => item.type))];

export default function App() {
  // Setup state here...
  const [storeItems, ] = useState(initialStoreItems)

  const [basketItems, setBasketItems] = useState([])

  const [basketTotal, setBasketTotal] = useState(0)

  const [filter, setFilter] = useState("")

  const [sort, setSort] = useState("")

  let shownStoreItems = storeItems

  if (filter !== "") {
    shownStoreItems = shownStoreItems.filter(i => i.type === filter)
  }

  if (sort !== "") {
    switch (sort) {
      case 'price desc':
        shownStoreItems = shownStoreItems.sort((a, b) => b.price - a.price);
        break;
      case 'price asc':
        shownStoreItems = shownStoreItems.sort((a, b) => a.price - b.price);
        break;
      case 'alphabetically desc':
        shownStoreItems = shownStoreItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'alphabetically asc':
        shownStoreItems = shownStoreItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }
  }

  const updateBasketTotal = () => {
    setBasketTotal(Math.round(basketItems.reduce((acc, item) => acc + item.quantity * getItemPrice(item.id), 0) * 100) / 100)
  }

  const getItemPrice = (itemId) => {
    const item = storeItems.find((storeItem) => storeItem.id === itemId);
    return item ? item.price : 0;
  };

  useEffect(() => {
    updateBasketTotal()
  }, [basketItems])

  const addToBasket = (item) => {
    if (basketItems.some(i => i.id === item.id)) {
      setBasketItems(basketItems.map(i => i.id === item.id ? {...i, quantity: i.quantity + 1} : i))
    } else {
      const newBasketItem = {id: item.id, name: item.name, quantity: 1}
      setBasketItems([...basketItems, newBasketItem])
    }
  }
  
  const increaseQuantity = (basketItem) => {
    setBasketItems(basketItems.map(i => i === basketItem ? {...i, quantity: i.quantity + 1} : i))
  }

  const decreaseQuantity = (basketItem) => {
    setBasketItems(prevBasketItems =>
      prevBasketItems.map(i =>
        i === basketItem
          ? i.quantity > 1
            ? { ...i, quantity: i.quantity - 1 }
            : null
          : i
      ).filter(Boolean)
    )
  }

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {
            shownStoreItems.map((storeItem, index) => (
              <StoreItem key={index} storeItem={storeItem} addToBasket={addToBasket}/>
            ))
          }
        </ul>
      </header>
      <p className="center"><span>
        FILTER BY: 
        <select id="filter" onChange={e => setFilter(e.target.value)}>
          {
            filterOptions.map(filter => (
              <option key={filter}>{filter}</option>
            ))
          }
        </select>
        
        SORT BY:
        <select id="sort" onChange={e => setSort(e.target.value)}>
          {
            sortOptions.map(sort => (
              <option key={sort}>{sort}</option>
            ))
          }
        </select></span>
      </p>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {
              basketItems.map((basketItem, index) => (
                <BasketItem key={index} basketItem={basketItem} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} />
              ))
            }
          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">{basketTotal}</span>
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
