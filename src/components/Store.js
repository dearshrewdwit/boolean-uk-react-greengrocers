import storeItems from '../store-items.js'
import StoreItemList from './StoreItemList'

function Store(props) {

  // placeholders for applying filters

  const filteredStoreItems = storeItems

  return (
    <header id="store">
        <h1>Greengrocers</h1>
          <StoreItemList
            storeItems={filteredStoreItems} addItemToCart={props.addItemToCart}
          />
          
      </header>
  )
}

export default Store