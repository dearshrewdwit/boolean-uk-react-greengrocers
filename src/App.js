import { useState } from 'react'
import './styles/reset.css'
import './styles/index.css'
import StoreSection from './StoreItems'

import cart from './cart-items.js'
import storeItems from './StoreItems.js'
import InsideCart from './InsideCart.js'


export default function App() {
  // Setup state here...

  const [cartItem, setCartItem] = useState(0);

  // function handleRenderCartItem() {
  //  return( cart.map((item) =>
  //       <li>
  //         <img
  //           className="cart--item-icon"
  //           src={`/assets/icons/${item.id}.svg`}
  //           alt={item.name}
  //         />
  //         <p>{item.name}</p>
  //         <button className="quantity-btn remove-btn center">-</button>
  //         <span className="quantity-text center">1</span>
  //         <button className="quantity-btn add-btn center">+</button>
  //       </li>
  //     )
  //  )
  // }
 
  return (
    <>
      <StoreSection setCartItem={setCartItem} cartItem={cartItem} cart={cart}/>

      <InsideCart cart={cart} cartItem={cartItem} />

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