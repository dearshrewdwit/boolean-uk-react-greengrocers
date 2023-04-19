import './styles/reset.css'
import './styles/index.css'

import initialStoreItems from './store-items'
import { useEffect, useState } from 'react'
import StoreItem from './components/StoreItem'
import CardItem from './components/CardItem'

/*
Here's what a store item should look like
{
  id: '001-beetroot',
  name: 'beetroot',
  price: 0.35
}

What should a cart item look like? 🤔

*/

// console.log(parseInt(initialStoreItems[0].id.slice(0, 3)))
// const ids = initialStoreItems.map(item => parseInt(item.id.slice(0, 3)))
// console.log(ids)
// console.log(initialStoreItems)
export default function App() {
  // Setup state here...
  const [total, setTotal] = useState(0.0)
  const [yourCart, setYourCart] = useState([])

  useEffect(() => {
    let sum = 0
    yourCart.forEach(item => {
      sum += item.quantity * item.price
    })
    setTotal(sum.toFixed(2))
  }, [yourCart])

  const hadleAddToCartButton = newItem => {
    const alreadyExisted =
      yourCart.filter(item => item.id === newItem.id).length === 1
    if (alreadyExisted) {
      yourCart.filter(item => item.id === newItem.id)[0].quantity += 1
      setYourCart([...yourCart])
    } else {
      const newCartItem = { ...newItem, quantity: 1 }
      setYourCart([...yourCart, newCartItem])
    }
  }

  const handleMinus = updateItem => {
    yourCart.filter(item => item.id === updateItem.id)[0].quantity -= 1
    const remaingCart = yourCart.filter(item => item.quantity !== 0)
    setYourCart([...remaingCart])
  }
  const handlePlus = updateItem => {
    yourCart.filter(item => item.id === updateItem.id)[0].quantity += 1
    const remaingCart = yourCart.filter(item => item.quantity !== 0)
    setYourCart([...remaingCart])
  }

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {initialStoreItems.map((item, key) => (
            <StoreItem
              key={key}
              item={item}
              hadleAddToCartButton={hadleAddToCartButton}
            />
          ))}
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {yourCart.map((item, key) => (
              <CardItem
                key={key}
                item={item}
                handleMinus={handleMinus}
                handlePlus={handlePlus}
              />
            ))}
          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">£{total}</span>
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
