import StoreList from '../StoreList/StoreList'
import FilterByName from '../FilterByName/FilterByName'
import FilterByType from '../FilterByType/FilterByType'

function Header({
  filteredItems,
  addItemToCart,
  setCurrentSorter,
  setCurrentFilter
}) {
  return (
    <header id="store">
      <h1>Greengrocers</h1>
      <FilterByName setCurrentSorter={setCurrentSorter}/>
      <FilterByType setCurrentFilter={setCurrentFilter}/>
      <ul className="item-list store--item-list">
        <StoreList
          filteredItems={filteredItems}
          addItemToCart={addItemToCart}
        />
      </ul>
    </header>
  )
}

export default Header
