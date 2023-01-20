import './styles/reset.css'
import './styles/index.css'
import { useState } from 'react'
import Header from './Header.js'
import Main from './Main.js'

export default function App() {
    const [cartItem, setCartItem] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
  
    
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
        <Main 
        cartItem={cartItem}
        setCartItem={setCartItem}
        priceUpdate={priceUpdate}
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
        />
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
