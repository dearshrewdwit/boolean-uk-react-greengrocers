import './styles/reset.css'
import './styles/index.css'
import React, {useState} from  'react'
import initialStoreItems from './store-items'

/*
 Here's what a store item should look like
 {
 id: '001-beetroot',
 name: 'beetroot',
 price: 0.35
 }

 What should a cart item look like? 🤔
 */

export default function App() {
  // Setup state here...
  const [storeItems, setStoreItems] = useState(initialStoreItems)
  const [cartItems, setCartItems] = useState([])

  const addToCart = (targetItem) => {
    const existingItem = cartItems.find(item => item.id === targetItem.id);
    if(existingItem){
      const updatedCart = cartItems.map(item =>
        item.id === targetItem.id ? {...item, quantity: item.quantity+1} : item
      )
      setCartItems(updatedCart)
    } else{
      setCartItems([...cartItems, targetItem])
    }
  }

  const removeFromCart = (targetItem) => {
    const existingItem = cartItems.find(item => item.id === targetItem.id);
    if(existingItem.quantity > 1){
      const updatedCart = cartItems.map(item =>
        item.id === targetItem.id ? {...item, quantity: item.quantity-1} : item
      )
      setCartItems(updatedCart)
    } else{
      setCartItems(cartItems.filter(item => item != targetItem))
    }
  }

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {storeItems.map((storeItem) =>(
            <li key={storeItem.id}>
              <div className="store--item-icon">
                <img src={`/assets/icons/${storeItem.id}.svg`} alt={storeItem.name} />
              </div>
            {<button onClick={() => {addToCart({...storeItem, quantity : 1})}}>Add to cart</button>}
            </li>
          ))}
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
          {cartItems.map((cartItem) =>
            <li key={cartItem.id}>
              <img
              className="cart--item-icon"
              src={`/assets/icons/${cartItem.id}.svg`}
              alt={cartItem.name}
              />
              <p>{cartItem.name}</p>
              <button onClick={() => removeFromCart(cartItem)} className="quantity-btn remove-btn center">-</button>
              <span className="quantity-text center">{cartItem.quantity}</span>
              <button onClick={() => addToCart(cartItem)} className="quantity-btn add-btn center">+</button>
            </li>
          )}
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
