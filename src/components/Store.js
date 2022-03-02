import { useState } from 'react'
import initialStoreItems from '../data/StoreItems'

// const [storeItems, setStoreItems] = useState(initialStoreItems)

const Store = () => {
  const [cartItems, setCartItems] = useState([])

  return (
    <header id="store">
      <h1>Greengrocers</h1>
      <ul className="item-list store--item-list">
        {initialStoreItems.map(item => (
          <li key={item.id}>
            <section>
              <p>{item.name}</p>
              <p>{item.price}</p>
            </section>
            <div className="store--item-icon">
              <img src={`../assets/icons/${item.id}.svg`} alt={item.name} />
            </div>
            <button className="btn">Add to cart</button>
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Store
// onClick={() => addToCartHandler()}
