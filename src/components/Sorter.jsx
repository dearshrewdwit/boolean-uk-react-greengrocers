/* eslint-disable react/prop-types */

function Sorter({onChangeSort}) {
    return <>
        <div className="item-sort-container">
            <p>Sort by:</p>
            <select className="item-sort" onChange={onChangeSort}>
                <option value="alpha">Alphabetical</option>
                <option value="price-asc">Price low to high</option>
                <option value="price-desc">Price high to low</option>
            </select>
        </div>
    </>
}
export default Sorter