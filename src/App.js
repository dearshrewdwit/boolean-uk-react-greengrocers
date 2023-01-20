import './styles/reset.css'
import './styles/index.css'
import { useState } from 'react'
import initialStoreItems from './store-items'
import Header from './Header.js'

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
    const [cartItem, setCartItem] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
  
    let totalFixed = totalPrice.toFixed(2)
    function priceUpdate(price) {
        let total = totalPrice
        total += price
        setTotalPrice(total)
    } 

    return (
        <>
        <Header 
        cartItem={cartItem}
        setCartItem={setCartItem}
        priceUpdate={priceUpdate} 
        />
        <main id="cart">
            <h2>Your Cart</h2>
            <div className="cart--item-list-container">
                <ul className="item-list cart--item-list">
                    {cartItem.map((item, index) => {
                        return (
                            <li key={index}>
                                <img
                                className="cart--item-icon"
                                src={`/assets/icons/${item.id}.svg`}
                                alt={item.name}
                                />
                                <p>{item.name}</p>
                                <button 
                                className="quantity-btn remove-btn center"
                                onClick={() => {
                                    item.quantity--
                                    if(item.quantity === 0) {
                                        const updateCart = cartItem.filter((cart) => cart.quantity > 0)
                                        setCartItem(updateCart)
                                    } else {
                                        const updateCart = [...cartItem]
                                        setCartItem(updateCart)
                                    }
                                    priceUpdate(item.price)
                                }}
                                >-</button>
                                <span className="quantity-text center">{item.quantity}</span>
                                <button 
                                className="quantity-btn add-btn center"
                                onClick={() => {
                                    item.quantity++
                                    const updateCart = [...cartItem]
                                    setCartItem(updateCart)
                                    priceUpdate(item.price)
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
                <span className="total-number">{`£${totalFixed}`}</span>
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
