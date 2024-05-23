import './styles/reset.css'
import './styles/index.css'
import {useState} from 'react'
import initialStoreItems from './store-items'

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
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {storeItems.map((storeItems) => (
            <li key={storeItems.id}>
              <div className='store--item-icon'>
                <img src={`/assets/icons/${storeItems.id}.svg`} alt={storeItems.name} />
              </div>
              {<button onClick={() => {addToCart({...storeItems, quantity : 1})}}>Add to Cart</button>}
            </li>
          ))}
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {cartItems.map((cartItems) =>
            <li key={cartItems.id}>
              <img className='cart--item-icon'
              src={`./assets/icons/${cartItems.id}.svg`}
              alt={cartItems.name}
              />
              <p>{cartItems.name}</p>
              <button onClick={() => removeItem(cartItems)} className='quantity-btn remove-btn center'>-</button>
              <span className='quantity-text center'>{cartItems.quantity}</span>
              <button onClick={() => addToCart(cartItems)} className='quantity-btn add-btn center'>+</button>
            </li>
          )}
          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">£{calculateTotal()}</span>
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
