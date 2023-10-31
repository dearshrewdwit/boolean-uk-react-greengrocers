import './styles/reset.css'
import './styles/index.css'
import Cart from './components/Cart'


import initialStoreItems from './store-items'
import { useState } from 'react'

/*
 Here's what a store item should look like
 {
 id: '001-beetroot',
 name: 'beetroot',
 price: 0.35
 }

 What should a cart item look like? 🤔
 */

console.log(initialStoreItems)

export default function App() {
  // Setup state here...
const [items, setItems] = useState(initialStoreItems)
return (
  <>
    <header id="store">
                <h1>Greengrocers</h1>
                <ul className="item-list store--item-list"> 
                {items.map(element =>  (
                  <>
                        <li>
                  
                        <div className="store--item-icon">
                            <img src={`../public/assets/icons/${element.id}.svg `} alt={element.name} />
                        </div>
                            <button>Add to cart</button>
                        </li>

                    </>
                ))}
            </ul> 
            </header>
    <Cart></Cart>
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
