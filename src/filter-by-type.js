
function FilterByType(props) {
    
    return (
        <div>
            
            <label htmlFor="sort-by-type">Select fruit or Veg</label>

            <select name="sort-by-type" id="fruitORVeg" onChange={(event) => props.filter()}>
                <option defaultValue='all' >Choose</option>
                <option value="all">All</option>
                <option value="Fruit">Fruit</option>
                <option value="Veg">Vegatables</option>
            </select>
        </div>
    )
}
export default FilterByType;