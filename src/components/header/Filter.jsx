function Filter({ storeItems, setFilteredItems}) {
    function filterProducts(e) {
        if(e.target.value === 'default') {
            setFilteredItems(storeItems)
        } else {
            setFilteredItems(storeItems.filter((i) => i.type === e.target.value))
        }
    }

    return (
        <div>
            <label htmlFor="filter">Filter </label>
            <select name="filter" id="filter" onChange={filterProducts}>
                <option value="default">Select type</option>
                <option value="vegetable">Vegetable</option>
                <option value="fruit">Fruit</option>
            </select>
        </div>
    )
}

export default Filter