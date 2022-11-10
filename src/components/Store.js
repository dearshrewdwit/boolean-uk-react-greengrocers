import StoreItem from './StoreItem'
import initialStoreItems from '../store-items'

function Store({ addToCart }) {
  return (
    <header id="store">
      <h1>Greengrocers</h1>
      <ul className="item-list store--item-list">
        {initialStoreItems.map(product => {
          return (
            <StoreItem
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          )
        })}
      </ul>
    </header>
  )
}

export default Store
