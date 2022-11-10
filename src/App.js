import './styles/reset.css'
import './styles/index.css'

import {useState} from 'react'

import initialStoreItems from './store-items'

console.log(initialStoreItems)

export default function App() {
  const [storeItems, setStoreItems] = useState(initialStoreItems)
  const [cartItems, setCartItems] = useState([])
  let index = 0
  let fruitIsAlreadyInCart = false

  const addItemToCart = (item) => {
    checkIfFruitIsAlreadyInCart(item)
    if (fruitIsAlreadyInCart) {
      addOneToQuantity(item)
    } else {
      createItemInCart(item)
    }
  }

  function checkIfFruitIsAlreadyInCart(newFruit) {
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].name === newFruit.name) {
        fruitIsAlreadyInCart = true;
        index = i;
        break
      } else {
        fruitIsAlreadyInCart = false
      }
    }
  }

const addOneToQuantity = (item) => {
    const updatedCart = cartItems.map((cartItem) => {
      if (item.name === cartItem.name) {
      return {...cartItem, quantity: ++cartItem.quantity }
      }
      return cartItem
    })
    setCartItems(updatedCart)
}

const removeOneQuantity = (item) => {
  if (item.quantity <= 1) {
    const CartWithoutRemoved = cartItems.filter(function(cartItems) {
      return item !== cartItems
        })
      setCartItems(CartWithoutRemoved) 

  } else {  
    const updatedCart = cartItems.map((cartItem) => {
      if (item.name === cartItem.name) {
      return {...cartItem, quantity: --cartItem.quantity }
      }
      return cartItem
    })
    setCartItems(updatedCart)
  }
}

const createItemInCart = (item) => {
  item.quantity = 1
  const newCartItems = [...cartItems]
  newCartItems.push(item)
  setCartItems(newCartItems)
}


const totalPrice = () => {
  let totalPrice = 0

  for (let item of cartItems) {
    totalPrice += item.price * item.quantity
  }

  const currencyFormatter = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
  });

  return currencyFormatter.format(totalPrice)
}

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">

          {storeItems.map((item, index) => {
            return (
            
              <li key={index}>
                <div class="store--item-icon">
                  <img src={`/assets/icons/${item.id}.svg`} alt={item.name} />
                </div>
                <button onClick={ () => addItemToCart(item)}>Add to cart</button>
              </li>

            )
          
          })}

        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {
            cartItems.map((item, index) => {
              return (
                <li key={index}>
                  <img
                    class="cart--item-icon"
                    src={`/assets/icons/${item.id}.svg`}
                    alt={item.name}
                  />
                  <p>{item.name}</p>
                  <button class="quantity-btn remove-btn center" onClick={ () => removeOneQuantity(item)}>-</button>
                  <span class="quantity-text center">{item.quantity}</span>
                  <button class="quantity-btn add-btn center" onClick={ () => addOneToQuantity(item)}>+</button>
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
            <span className="total-number">{totalPrice()}</span>
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
