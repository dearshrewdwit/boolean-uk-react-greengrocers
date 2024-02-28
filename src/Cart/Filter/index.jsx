import './style.css'

function Filter(props) {
    return (
        <>
        <div id="filter-by--list">
        <h5 id="filter-by--title">
        Filter by
        </h5>
        {props.storeItems.map((item, index) => 
            <>
            <input
            key={index}
            className="filter-by--items"
            type="checkbox"
            id={`item-box--${item.name}`}
            onClick={() => props.handleSelect(item)}
            >
            </input>
            <label htmlFor={`item-box--${item.name}`}>{item.name}</label>
            </>
        )}
        </div>
        </>
    )
}

export default Filter