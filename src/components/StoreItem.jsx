import PropTypes from 'prop-types'

function StoreItem({storeItem, addToBasket}) {

    return (
        <li>
            <div className="store--item-icon">
                <img src={`assets/icons/${storeItem.id}.svg`} alt={storeItem.name} />
            </div>
            <button onClick={() => addToBasket(storeItem)}>Add to cart</button>
        </li>
    )
}

StoreItem.propTypes = {
    storeItem: PropTypes.object,
    addToBasket: PropTypes.func,
}

export default StoreItem