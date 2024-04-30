function Sort({ setSortedItems }) {
    function sortProducts(e) {
        setSortedItems(e.target.value)
    }

    return (
        <div>
            <label htmlFor="sort">Sort </label>
            <select name="sort" id="sort" onChange={sortProducts}>
                <option value="default">Select sorting</option>
                <option value="alphabetically">Alphabetically</option>
                <option value="price">Price (Low - High)</option>
            </select>
        </div>
    )
}

export default Sort