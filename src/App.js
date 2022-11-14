import './styles/reset.css'
import './styles/index.css'
import initialStoreItems from './store-items'
import StoreItem from './components/StoreItem'
import CartItem from './components/CartItem'
import { useState } from 'react'

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
  // Setup state here...
  // const [storeItem, setStoreItem] = useState()
  const [storeItems, setStoreItem] = useState(initialStoreItems)
  const [cartItems, setCartItems] = useState([])

  // function AddToCart(clickedItem) {
  //   const ids = []
  //   cartItems.forEach(cartItem => ids.push(cartItem.id))
  //   let newCartItems = [...cartItems]
  //   if (!ids.includes(clickedItem.id)) {
  //     let newCartItem = clickedItem
  //     newCartItem.quanity = 0
  //     newCartItems.push(newCartItem)
  //   }
  //   setCartItems(
  //     cartItems.map(cartItem => {
  //       if (newCartItem.id === cartItem.id)
  //         return { ...cartItem, quantity: cartItem.qnantity + 1 }
  //       return cartItem
  //     })
  //   )
  // }
  function AddToCart(storeItem) {
    const found = cartItems.find(item => item.id === storeItem.id)
    if (found) {
      const updatedCartItems = cartItems.map(clickedItem => {
        if (clickedItem.id === item.id) {
          return { ...clickedItem, quantity: clickedItem.quantity + 1 }
        }
      })

      setCartItems(updateCartItems)
      return
    } else {
      const newCartItem = { ...storeItem, quantity: 1 }
      setCartItems([...cartItems, newCartItem])
    }
  }

  const increase = item => {
    const updatedCart = cartItems.map(cartItem => {
      if (item.name === cartItem.name) {
        return { ...cartItem, quantity: cartItem.quantity + 1 }
      }
      return cartItem
    })
    setCartItems(updatedCart)
  }
  // Needs condition to remove 0 quantity
  const decrease = item => {
    const updatedCart = cartItems.map(cartItem => {
      if (item.name === cartItem.name) {
        return { ...cartItem, quantity: cartItem.quantity - 1 }
      }
      return cartItem
    })
    setCartItems(updatedCart)
    console.log('updatedCart:', updatedCart)
  }
  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {storeItems.map(item => (
            <StoreItem item={item} key={item.id} AddToCart={AddToCart} />
          ))}
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {cartItems.map(item => (
              <CartItem
                item={item}
                key={item.id}
                increase={increase}
                decrease={decrease}
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
