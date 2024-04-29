/* eslint-disable react/prop-types */
export default function TypeFilter ( {setFilter}) {
    
    function handleChange (e) {
        setFilter(e.target.value)
    }

    return (
        <div className="filter-form">
        <label htmlFor="type-filter">Filter by type: </label>
        <select onChange={(e) => handleChange(e)} name="type-filter">
            <option value="all">All</option>
            <option value="vegetable">Vegetables</option>
            <option value="fruit">Fruit</option>
        </select>
        </div>
    )
}