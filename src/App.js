import './styles/reset.css'
import './styles/index.css'

import {StoreItem} from './StoreItem'
import {CartItem} from './CartItem'

import initialStoreItems from './store-items'

import {useState} from 'react'

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
  const [cart,updateCart] = useState([])

  const addItemToCart = item => {
    const itemToAdd = cart.find(cartItem => cartItem.id === item.id)
    if (itemToAdd) updateCart(cart => cart.map(cartItem => cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity+1} : cartItem))
    else updateCart(cart => [...cart, {...item, ["quantity"]: 1}])
  }

  const changeCartQuantity = (id,func) => {
    const update = cart => cart.map(cartItem => cartItem.id === id ? {...cartItem, quantity: func(cartItem.quantity)} : cartItem)
    updateCart(update)
  }

  const calcTotal = cart => cart.reduce((a,b)=>a+(b.price*b.quantity),0.00)

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {initialStoreItems.map(item => <StoreItem item={item} addItem={addItemToCart}/>)}
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {cart.map(item => item.quantity > 0 && <CartItem item={item} changeQuantity={changeCartQuantity}/>)}
          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">{`£${calcTotal(cart).toFixed(2)}`}</span>
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
