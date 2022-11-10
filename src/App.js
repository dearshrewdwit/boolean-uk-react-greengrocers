
import './styles/reset.css'
import './styles/index.css'
// import './public/assets'

import {useState} from'react'

import initialStoreItems from './store-items'

import Store from './components/Store.js'
import Total from './components/Total.js'
import Cart from './components/Cart.js'

export default function App() {

  const [cartItems, setCartItems] = useState([])
  const [total, setTotal] = useState(0)

  const addCartItem = (item)=>{
    const duplicates = cartItems.find(cartItem=> cartItem.name === item.name)
    if (duplicates === undefined){
    item.quantity = 1
    const newCart = [...cartItems, item]
    setCartItems(newCart)
    }
    else {
      const ammendedCart = cartItems.map((cartItem)=>{
        if (cartItem.name === item.name){
          const itemCopy = {...item, quantity: cartItem.quantity +1}
          return itemCopy
        }
        else {
          return cartItem
        }
        
      })
      setCartItems(ammendedCart)
    }
    setTotal(total + item.price)
  }
  const handlePlus = (cartItem)=>{
    const ammendedCart = cartItems.map((storedItem)=>{
      if (storedItem === cartItem){
        const cartItemCopy = {...cartItem, quantity: cartItem.quantity + 1}
        return cartItemCopy
      }
      else {
        return storedItem
      }
    })
    setCartItems(ammendedCart)
    setTotal(total + cartItem.price)
  }
  const handleMinus = (cartItem)=>{
    let ammendedCart = []
    if (cartItem.quantity > 1){
    ammendedCart = cartItems.map((storedItem)=>{
      if (storedItem === cartItem){
        const cartItemCopy = {...cartItem, quantity: cartItem.quantity - 1}
        return cartItemCopy
      }
      else {
        return storedItem
      }
    })
      }
      else {
        ammendedCart = cartItems.filter((storedItem)=> storedItem !== cartItem)
      }
      setCartItems(ammendedCart)
      setTotal(total - cartItem.price)
  }

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <Store addCartItem={addCartItem} initialStoreItems={initialStoreItems}/>
      </header>
      <main id="cart">
        <Cart handlePlus={handlePlus} handleMinus={handleMinus} cartItems={cartItems}/>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <Total total={total}/>
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
