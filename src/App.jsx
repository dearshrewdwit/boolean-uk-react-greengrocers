import './styles/reset.css'
import './styles/index.css'
import {useState} from 'react'
import initialStoreItems from './store-items' 
import Header from './Header'
import MainSection from  './MainSection'

export default function App() {

  const [storeItems] = useState(initialStoreItems)
  const[cartItems, setCartItems] = useState([])


  const addToCart = (targetItem) => {
    const exisitingItem = cartItems.find(item => item.id === targetItem.id)
    if(exisitingItem) {
      const updateCart = cartItems.map(item =>
        item.id === targetItem.id ? {...item, quantity: item.quantity + 1 } : item
      )
      setCartItems(updateCart)
    } else {
      setCartItems([...cartItems, targetItem])
    }
  }

  const removeItem = (targetItem) => {
    const exisitingItem = cartItems.find(item => item.id === targetItem.id)
    if (exisitingItem.quantity > 1) {
      const updateCart = cartItems.map(item =>
        item.id === targetItem.id ? {...item, quantity: item.quantity - 1 } : item
      )
      setCartItems(updateCart)
      } else {
        setCartItems(cartItems.filter(item => item != targetItem))
      }
    }

    const calculateTotal = () => {
      return cartItems.reduce((acc, item) => acc + (item.quantity * item.price), 0).toFixed(2);
    }
  
  return (
    <>
      <Header storeItems={storeItems} addToCart={addToCart} />
      <MainSection cartItems={cartItems} addToCart={addToCart} removeItem={removeItem} calculateTotal={calculateTotal} />
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
