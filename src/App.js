
import './styles/reset.css'
import './styles/index.css'
// import './public/assets'

import {useState} from'react'

import initialStoreItems from './store-items'

export default function App() {

  const [storeItems, setStoreItems] = useState(initialStoreItems)
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
        <ul className="item-list store--item-list">
          {
            storeItems.map((item)=>{
              return (
                <li key={item.id}>
                  <div class="store--item-icon">
                    <img src={"/assets/icons/" + item.id + ".svg"} alt={item.name} />
                  </div>
                  <button onClick={()=> addCartItem(item) }>Add to cart</button>
                </li>
              )
            })
          }
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {
              cartItems.map((cartItem)=>{
                return (
                  <li key={cartItem.id}>
                    <img
                      class="cart--item-icon"
                      src={"/assets/icons/" + cartItem.id + ".svg"}
                      alt={cartItem.name}
                    />
                    <p>{cartItem.name}</p>
                    <button onClick={()=> handleMinus(cartItem) } class="quantity-btn remove-btn center">-</button>
                    <span class="quantity-text center">{cartItem.quantity}</span>
                    <button onClick={()=> handlePlus(cartItem) } class="quantity-btn add-btn center">+</button>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">{'£' + (Math.round(total * 100) / 100).toFixed(2)}</span>
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
