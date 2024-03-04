import PropTypes from 'prop-types'
import "./FilterProduce.css"

const FilterProduce = ({typeFilter, toggleFilter}) => {
    return (
        <div className="filter-type">
            <label>
                <input 
                    type="checkbox" 
                    checked={!typeFilter["vegetable"]}
                    onChange={(e) => toggleFilter(e.target.parentNode.innerText.toLowerCase())}/>
                Vegetable
            </label> 
            <br/>
            <label>
                <input 
                    type="checkbox" 
                    checked={!typeFilter["fruit"]}
                    onChange={(e) => toggleFilter(e.target.parentNode.innerText.toLowerCase())}/>
                Fruit
            </label>
        </div>
    )
}

FilterProduce.propTypes = {
    typeFilter: PropTypes.object,
    toggleFilter: PropTypes.func,
}

export default FilterProduce