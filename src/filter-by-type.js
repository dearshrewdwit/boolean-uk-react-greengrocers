
function FilterByType(props) {
    
    return (
        <div>
            <label htmlFor="sort-by price">Sort by Price</label>

            <select name="sort-by-price" id="price" onChange={() => props.sort()}>
                <option value=''></option>
                <option value="price-decending">High - Low</option>
                <option value="price-accending">Low - High</option>
            </select>
            <label htmlFor="sort-by-type">Select fruit or Veg</label>
            <select name="sort-by-type" id="fruitORVeg" onChange={(event) => props.filter()}>
                <option value="all" >All</option>
                <option value="Fruit">Fruit</option>
                <option value="Veg">Vegatables</option>
            </select>
        </div>
    )
}
export default FilterByType;