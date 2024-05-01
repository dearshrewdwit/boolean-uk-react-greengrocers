/* eslint-disable react/prop-types */

function Filter({onChangeFilter}) {
    return <>
        <div className="item-filter-container">
            <p>Filter by:</p>
            <select className="item-filter" onChange={onChangeFilter}>
                <option value="all">All</option>
                <option value="vegetable">Vegetables</option>
                <option value="fruit">Fruit</option>
                <option value="berry">Berries</option>
            </select>
        </div>
    </>
}

export default Filter