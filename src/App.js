import './styles/reset.css'
import './styles/index.css'
import { useState } from 'react'
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
// console.log(initialStoreItems)
// UPDATE THE STATE
// function addItemToCart(item) {
//   const cartQntCtrl = state.cart.find(function (cartItem) {
//     return cartItem.item === item
//   })
//   if (cartQntCtrl === undefined) {
//     state.cart.push({
//       item: item,
//       quantity: 1
//     })
//   } else {
//     cartQntCtrl.quantity++
//   }}
export default function App() {
  // Setup state here...
  const [storeItems, setStoreItems] = useState(initialStoreItems)
  const [cartItems, setCartItems] = useState([])
  // console.log('test Cart', cartItems)

  // const addToCart = item => {
  //   console.log(item)
  //   item.quantity = 0

  //   const newCartItem = [...cartItems]
  //   newCartItem.filter(i => {})
  //   newCartItem.push(item)
  //   return setCartItems(newCartItem)
  // }

  function addToCart(item) {
    // console.log(item)
    item.quantity = 0

    const newCartItem = [...cartItems]

    const addToQty = newCartItem.filter(cartItem => {
      return cartItem.name === item
    })

    if (addToQty === undefined) {
      newCartItem.push(item)
    } else {
      addToQty.quantity + 1
    }

    return setCartItems(newCartItem)
  }

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {storeItems.map(item => {
            // console.log(i)

            return (
              <li>
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
            {cartItems.map(item => {
              console.log('Item is added to Cart', cartItems)
              return (
                <li>
                  <img
                    class="cart--item-icon"
                    alt="beetroot"
                    src={`/assets/icons/${item.id}.svg`}
                  />

                  <p>{item.name}</p>
                  <button class="quantity-btn remove-btn center">-</button>
                  <span class="quantity-text center">1</span>
                  <button
                    onClick={() => addToCart(item)}
                    class="quantity-btn add-btn center"
                  ></button>
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
