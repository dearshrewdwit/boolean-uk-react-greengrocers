import './styles/reset.css'
import './styles/index.css'
import { useState } from 'react'
import Item from './Item'

import initialStoreItems from './store-items'
import Cart from './Cart'
import Sort from './Sort'



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

  function sortCheck(sortSelect) {
    if (sortSelect === "default") {
      const sorted = storeItems.sort(sortingPopular)
      setStoreItems([...sorted])
    } else if (sortSelect === "price-low-high") {
      const sorted = storeItems.sort(sortPriceLowHigh)
      setStoreItems([...sorted])
    } else if (sortSelect === "price-high-low") {
      const sorted = storeItems.sort(sortPriceHighLow)
      setStoreItems([...sorted])
    }
  }
  
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
        <Sort sortCheck={sortCheck}/>
        <ul className="item-list store--item-list">
          {storeItems.map( (e, index)=> {
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
  )
}
