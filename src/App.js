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
  // const [items, setItems] = useState(initialStoreItems)
  const [cart, setCart] = useState([])
  // Setup state here...

  const addToCart = selection => {
    if (!cart.includes(selection)) {
      selection.quantity = 1
      setCart([...cart, selection])
    } else {
      selection.quantity++
      setCart([...cart])
      console.log('add to cart', selection)
    }
  }
  const decreaseItem = selection => {
    const updatedCart = cart =>
      cart.map(item =>

        item.id === selection.id
          ? { ...item, quantity: item.quantity-- }
          : item
      )
    setCart(updatedCart)
  }

  const removeFromCart = (selection) => {
    console.log("target item", selection.quantity)
    if (selection.quantity === 1) {
      console.log("selection", selection)
      const updatedCart = cart.filter(item => item !== selection)
      console.log("updatedCart", updatedCart)
      setCart(updatedCart)
    }
  }

  const addItem = selection => {
    
    const updatedCart = cart => cart.map(item =>
      // console.log("", )
      item.id === selection.id
      ? { ...item, quantity: item.quantity++ }
      : item
      )
      setCart(updatedCart)
      // console.log("HAANAAS VE?", updatedCart)
    }
    
    
  const calculateTotal = () => {
    let total = 0
    cart.forEach(item => (total += item.quantity * item.price))
    return `£${total.toFixed(2)}`
  }


  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {initialStoreItems.map(item => (
            <StoreItem 
            item={item} 
            addToCart={addToCart} />
          ))}
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {cart.map(item => {
              // <CartItem 
              // item={item}
              // decreaseItem={decreaseItem}
              // removeFromCart={removeFromCart}
              // addItem={addItem}
              // />
              return (
                <li key={item.id}>
                  <img
                    className="cart--item-icon"
                    src={`/assets/icons/${item.id}.svg`}
                    alt={item.alt}
                  />
                  <p>{item.name}</p>
                  <button
                    className="quantity-btn remove-btn center"
                    onClick={() => {
                      console.log('clicked -', item.name)
                      decreaseItem(item)
                      removeFromCart(item)
                    }}
                  >-</button>
                  <span className="quantity-text center">{item.quantity}</span>
                  <button
                    className="quantity-btn add-btn center"
                    onClick={() => {
                      console.log('clicked +', item.name)
                      addItem(item)
                    }}
                  >+</button>
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
            <span className="total-number">{calculateTotal()}</span>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
