function FilterByType({ setCurrentFilter }) {
  return (
    <>
      <label htmlFor="filter" className="filters-label">
        Filter products:
      </label>
      <select
        name="product"
        id="select-products"
        onChange={e => setCurrentFilter(e.target.value)}
      >
        <option value="show-all">Show all</option>
        <option value="fruit">Fruit</option>
        <option value="veg">Vegetables</option>
      </select>
    </>
  )
}

export default FilterByType
