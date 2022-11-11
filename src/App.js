import './styles/reset.css'
import './styles/index.css'
import StoreItem from './StoreItem'
import initialStoreItems from './store-items'
import { useState } from 'react'
import CartItem from './CartItem'
import Footer from './Footer'

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
  // Setup state here...


  const addToCart = selectedItem => {
    if(!items.includes(selectedItem)){
      selectedItem.quantity = 1
      setItems([...items, selectedItem])
    } else {
      selectedItem.quantity++
      setItems([...items])
      console.log("add to cart", selectedItem)
    }
  }

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {items.map((item) => (
            <StoreItem 
              item={item} 
              addToCart={addToCart}
            />
          ))}
          
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {items.map((item) => (
              <CartItem 
              item={item}
              />  
            ))}
            
          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">£0.00</span>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
