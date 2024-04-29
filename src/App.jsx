import './styles/reset.css'
import './styles/index.css'
import { useState } from 'react'
import Item from './Item'

import initialStoreItems from './store-items'
import Cart from './Cart'
import Sort from './Sort'
import Filter from './Filter'



function sortingPopular(a, b) {
  const firstCompare = Number(a.id.split("-")[0])
  const secondCompare = Number(b.id.split("-")[0])

  return firstCompare - secondCompare
}

function sortPriceHighLow(a, b) {
  const firstCompare = a.price
  const secondCompare = b.price

  return firstCompare - secondCompare
}

function sortPriceLowHigh(a, b) {
  const firstCompare = a.price
  const secondCompare = b.price

  return secondCompare - firstCompare
}





export default function App() {
  const [cart, setCart] = useState([])
  const [storeItems, setStoreItems] = useState(initialStoreItems)
  const [displayedItems, setDisplayedItems] = useState(initialStoreItems)

  function sortCheck(selectedSort) {
    if (selectedSort === "default") {
      const sorted = displayedItems.sort(sortingPopular)
      setStoreItems([...sorted])
    } else if (selectedSort === "price-low-high") {
      const sorted = displayedItems.sort(sortPriceLowHigh)
      setStoreItems([...sorted])
    } else if (selectedSort === "price-high-low") {
      const sorted = displayedItems.sort(sortPriceHighLow)
      setStoreItems([...sorted])
    }
  }

  function filterCheck(selectedFilter) {
    
    const filteredItems = []

    storeItems.forEach(element => {
      if(selectedFilter === "all" || selectedFilter === selectedFilter  && element.type === selectedFilter){
        filteredItems.push(element)
      }

 
    setDisplayedItems([...filteredItems])
  })}
  
  function addCartItem(item) {
    const element = storeItems.find(e => (e.name === item.name))

    if(!element){
      throw new Error("This is not a valid item")
    }
  
    const cartElement = cart.find(e => (e.name === item.name))
    const isInCart = !cartElement
  
    if(isInCart) {
      const newCartElement = structuredClone(element)
      newCartElement.quantity = 1
      cart.push(newCartElement)
      setCart([...cart])
    } else {
      cartElement.quantity++
      setCart([...cart])
    }
  
  
  }




  

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <Filter filterCheck={filterCheck} />
        <Sort sortCheck={sortCheck}/>
        <ul className="item-list store--item-list">
          {displayedItems.map( (e, index)=> {
            return <Item key={index} item={e} addCartItem={addCartItem}/>
          })}
        </ul>
      </header>
      <Cart cart={cart} setCart={setCart} />
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
  )}