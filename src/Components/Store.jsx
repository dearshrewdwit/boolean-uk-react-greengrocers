import { useState } from 'react'
import initialStoreItems from '../store-items'
import StoreItem from "./StoreItem"

export default function Store({  cartProds, setCartProds }) {
  const [products, setProducts] = useState(initialStoreItems)
    return (
        <ul className="item-list store--item-list">
          <StoreItem products={products} cartProds={cartProds} setCartProds={setCartProds} />
        </ul>
    )
}