import StoreItem from './StoreItem'

function Store(props) {
  // console.log('props.store: ', props.store)
  return (
    <header id="store">
      <h1>Greengrocers</h1>
      <ul className="item-list store--item-list">
        {/* Have a map here with the <StoreItem /> component inside. Don't forget key={index} */}
        {/* props.filteredStoreItems.map((storeItem, index)) */}
        {props.store.map((storeItem, index) => (
          <StoreItem storeItem={storeItem} key={index} />
        ))}
      </ul>
    </header>
  )
}

export default Store
