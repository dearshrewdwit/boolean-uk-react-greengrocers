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
  const [store, setStore] = useState(initialStoreItems)
  const [cart, setCart] = useState([])
  // Setup state here...

  const addToCart = selection => {
    // if selected item is not in the cart, the cart will 
    // from quantity 1
    if (!cart.includes(selection)) {
      console.log("cart", !cart, "selection", selection)
      selection.quantity = 1
      //  upgrade state with an array whatever is inside the cart
      setCart([...cart, selection])
    } else {
      // if selected item includes in the cart, will add more 
      // selected item on top
      selection.quantity++
      // update cart whatever inside it.
      setCart([...cart])
      console.log('add to cart', selection)
    }
  }
  const decreaseItem = selection => {
    // arrow decreaseItem function for decreasing selected
    // item
    const updatedCart = cart =>
      // inside this function other function to map cart
      cart.map(item =>
        // turnery condition if selected items id matches cart
        // item id 
        item.id === selection.id
          // above condition true, return items object quantity by decrimenting it
          ? { ...item, quantity: item.quantity-- }
          // if above not true, return only item
          : item
      )
    // update state with outcome of updateCart function
    setCart(updatedCart)
  }

  const removeFromCart = (selection) => {
    console.log("target item", selection.quantity)
    if (selection.quantity === 1) {
      // if selected item quantity equals to 1 the filter function will run
      console.log("selection", selection)
      // if filter function returns true it will keep item, if it false
      // it won't return anything, 
      const updatedCart = cart.filter(item => item !== selection)
      // keep everyrhing what is not our selection
      console.log("updatedCart", updatedCart)
      // update state
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
      console.log("inside cart", cart)
    return `£${total.toFixed(2)}`
  }
  const alphabeticFilter = () => {
    const firstAndLast = (a, b) => {
      console.log("a, b", a, b)
      let letterA = a.name.toLowerCase()
      let letterB = b.name.toLowerCase()
      console.log("letterA", letterA)
      return letterA < letterB ? -1 : letterA > letterB ? 1 : 0
    }
    const filtered = store.slice().sort(firstAndLast)
    console.log("filtered", filtered)

    setStore(filtered)
  }


  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <button onClick={() => alphabeticFilter()}>Alphabetic Filter</button>
        <ul className="item-list store--item-list">
          {store.map(item => (
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
            {cart.map(item => (
              <CartItem 
              item={item}
              decreaseItem={decreaseItem}
              removeFromCart={removeFromCart}
              addItem={addItem}
              />
            ))}
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
