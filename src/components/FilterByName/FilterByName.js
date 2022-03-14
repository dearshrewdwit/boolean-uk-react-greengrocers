function FilterByName({ setCurrentSorter }) {
  return (
    <>
      <label htmlFor="filter" className="filters-label">
        Sort products:
      </label>
      <select
        name="product"
        id="sort-products"
        onChange={e => setCurrentSorter(e.target.value)}
      >
        <option value="sort-by">Sort by:</option>
        <option value="alphabet">A-Z</option>
        <option value="price">Price - Ascending</option>
      </select>
    </>
  )
}

export default FilterByName
