export default function TypeFilter () {
    return (
        <div className="filter-form">
        <label htmlFor="type-filter">Filter by type: </label>
        <select name="type-filter">
            <option value="all">All</option>
            <option value="vegetables">Vegetables</option>
            <option value="fruit">Fruit</option>
        </select>
        </div>
    )
}