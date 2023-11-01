function FilterSort({setSort, setFilter}) {

    return (
        <div className="sort-filter-container">
            <div className="filter-container">
                <h2>Filter</h2>
                <button onClick={() => setFilter('none')}>No Filter</button>
                <button onClick={() => setFilter('fruit')}>Fruit</button>
                <button onClick={() => setFilter('veg')}>Vegetables</button>
            </div>
            <div className="sort-container">
                <h2>Sort</h2>
                <button onClick={() => setSort('none')}>No Sort</button>
                <button onClick={() => setSort('AToZ')}>A-Z</button>
                <button onClick={() => setSort('ZToA')}>Z-A</button>
            </div>
        </div>
    )
}

export default FilterSort