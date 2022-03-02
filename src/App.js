import './styles/reset.css'
import './styles/index.css'

import {useState} from 'react'
import Header from './Header'
import Footer from './Footer'
import Cart from './Cart'
import Detail from './Detail'


export default function App() {
  
const [cartItems, setCartItems] = useState([])
const [showingDetail, setShowingDetail] = useState(false)
const [detailItem, setDetailItem] = useState({})

const alreadyInCart = (item) => {
  return cartItems.find(cartItem => cartItem.name === item.name) !== undefined

}

const addToCart = (item) => {
    if(alreadyInCart(item)) {
  const updatedCart = cartItems.map(cartItem => cartItem.name === item.name ? {...cartItem, quantity: cartItem.quantity+= 1} : cartItem)
   setCartItems(updatedCart)
  }
  else {
  const updatedCart2 = [...cartItems, {...item, quantity: 1}]
  setCartItems(updatedCart2)
  }
}

  const removeFromCart = (item) => {
    const updatedCart = cartItems
                          .map(cartItem => cartItem.name === item.name ? {...cartItem, quantity: cartItem.quantity-= 1} : cartItem)
                          .filter(cartItem => cartItem.quantity !== 0)

    setCartItems(updatedCart)
  }
  
  return (
    <div className={showingDetail ? "display-detail" : "display"}>
    <Header 
      addToCart={addToCart}
      setShowingDetail={setShowingDetail}
      setDetailItem={setDetailItem} />
    <Cart 
      cartItems={cartItems}
      addToCart={addToCart}
      removeFromCart={removeFromCart}
    />
      <Footer />
      {showingDetail && 
    <Detail
      setShowingDetail={setShowingDetail}
      detailItem={detailItem}/>}
    </div>
  )
}
