import StoreItem from './StoreItem'
import initialStoreItems from '../store-items'

function Store({ addToCart }) {
  let filteredStoreItems = initialStoreItems

  return (
    <header id="store">
      <h1>Greengrocers</h1>
      <ul className="item-list store--item-list">
        {filteredStoreItems.map(product => {
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
