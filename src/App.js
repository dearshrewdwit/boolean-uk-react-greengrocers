import './styles/reset.css'
import './styles/index.css'
import { useState } from 'react'
import initialStoreItems from './store-items'

export default function App() {
  const [storeItems, setStoreItems] = useState(initialStoreItems)
  const [cartItems, setCartItems] = useState([])
  // console.log('test Cart', cartItems)

  const addToCart = item => {
    const newCartItem = [...cartItems]
    newCartItem.push({
      item: item,
      quantity: 1
    })
    const exist = cartItems.find(exist => {
      if (exist.item === item) {
        return true
      } else {
        return false
      }
    })
    console.log('item exist', exist)
    if (exist !== undefined) {
      exist.quantity++
      console.log('quatity updated', exist.quantity)
      setStoreItems([...cartItems])
    } else {
      const newCartItem = [...cartItems]
      newCartItem.push({
        item: item,
        quantity: 1
      })
      setCartItems(newCartItem)
      console.log('new quatity updated', newCartItem)
    }
  }
  const quantityPlus = cartItem => {
    cartItem.quantity++
    setCartItems([...cartItems])
  }
  const quantityMinus = cartItem => {
    cartItem.quantity--
    if (cartItem.quantity === 0) {
      const newCartArr = cartItems.filter(cartItemExisting => {
        cartItemExisting !== item
        setCartItems(newCartArr)
      })
    } else {
      const newCartItem = [...cartItems]
      setCartItems(newCartItem)
    }
  }

  return (
    <>
      {console.log('Page rendering')}
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {storeItems.map(item => {
            // console.log(i)

            return (
              <li key={storeItems.id}>
                <div class="store--item-icon">
                  <img src={`/assets/icons/${item.id}.svg`} />
                </div>
                <button onClick={() => addToCart(item)}>Add to cart</button>
              </li>
            )
          })}
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {cartItems.map(cartItem => {
              // console.log('Item is added to Cart', cartItems)
              return (
                <li key={cartItem.item.id}>
                  <img
                    className="cart--item-icon"
                    alt="beetroot"
                    src={`/assets/icons/${cartItem.item.id}.svg`}
                  />

                  <p>{cartItem.item.name}</p>
                  <button
                    onClick={() => quantityMinus(cartItem)}
                    className="quantity-btn remove-btn center"
                  >
                    -
                  </button>
                  <span className="quantity-text center">
                    {cartItem.quantity}
                  </span>
                  <button
                    className="quantity-btn add-btn center"
                    onClick={() => quantityPlus(cartItem)}
                  >
                    +
                  </button>
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
