import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import "./SortAndFilter.css"
import FilterProduce from "./FilterProduce/FilterProduce.jsx"

const SortAndFilter = ({storeItems, setFilteredItems}) => {
    const [sortAsc, setSortAsc] = useState(true)
    const [typeFilter, setTypeFilter] = useState({
        fruit: false,
        vegetable: false,
    })
    
    const toggleFilter = (type) => {
        setTypeFilter({...typeFilter, [type]: !typeFilter[type]})
    }

    useEffect(() => {
        setFilteredItems(
            [...storeItems.filter((item) => !typeFilter[item.type])
                .sort((a,b) => sortAsc ? 
                    a.name.localeCompare(b.name) : 
                    b.name.localeCompare(a.name)
                )
            ]
        )
    },[typeFilter, storeItems, sortAsc, setFilteredItems])


    return (
        <div className="filter-and-sort-container">
            <p>Show categories:</p>
            <FilterProduce typeFilter={typeFilter} toggleFilter={toggleFilter}/>
            <p>Sort produce:</p>
            <div className="sort">
                <button onClick={() => setSortAsc(!sortAsc)}>
                    {sortAsc ? "↑ ALPH ↑" : "↓ ALPH ↓"}
                </button>
            </div>
        </div>
    )
}

SortAndFilter.propTypes = {
    storeItems: PropTypes.arrayOf(PropTypes.object),
    setFilteredItems: PropTypes.func,
}

export default SortAndFilter