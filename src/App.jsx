import './styles/reset.css'
import './styles/index.css'
import { useState } from 'react'
import Item from './Item'

import initialStoreItems from './store-items'
import Cart from './Cart'




export default function App() {
  const [cart, setCart] = useState([])
  const [storeItems, setStoreItems] = useState(initialStoreItems)
  
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



  function calculateTotal() {
    let runningTotal = 0

    cart.forEach((element, index) => {  
      runningTotal += element.price * element.quantity
    })
  
    return '£' + runningTotal.toFixed(2)
  
  }
  

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {storeItems.map( (e, index)=> {
            return <Item key={index} item={e} addCartItem={addCartItem}/>
          })}
          
        </ul>
      </header>
      <Cart storeItems={storeItems} cart={cart} setCart={setCart} />
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
