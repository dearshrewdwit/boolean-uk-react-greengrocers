import { useState } from 'react'
import "./Header.css"
import SortAndFilter from "./SortAndFilter/SortAndFilter.jsx"
import ProductView from "./ProductView/ProductView.jsx"
import PropTypes from 'prop-types'

const Header = ({storeItems, addFunction}) => {
    const [filteredItems, setFilteredItems] = useState(storeItems)
    const [detailView, setDetailView] = useState(undefined)

    const capitalizeString = (string) => {
        return (string.substring(0,1).toUpperCase() + string.substring(1,string.length))
    }

    return (
        <header id="store">
        <h1>Greengrocers</h1>
        <SortAndFilter storeItems={storeItems} setFilteredItems={setFilteredItems}/>
        {detailView && <ProductView product={detailView} setDetailView={setDetailView}/>}
        <ul className="item-list store--item-list">
            {filteredItems.map((entry, index) => 
                <li key={index}>
                    <img 
                        className="store--item-icon" 
                        src={"/assets/icons/"+entry.id+".svg"} 
                        onClick={() => setDetailView(entry)}
                    />
                    <p>{capitalizeString(entry.name)}</p>
                    <button onClick={() => addFunction(entry.id)}>add to cart</button>
                </li>
            )}
        </ul>
      </header>
    )
}

Header.propTypes = {
    storeItems: PropTypes.arrayOf(PropTypes.object),
    addFunction: PropTypes.func,
}

export default Header