import PropTypes from 'prop-types'

function BasketItem({basketItem, increaseQuantity, decreaseQuantity}) {

    return (
        <li>
            <img
                className="cart--item-icon"
                src={`assets/icons/${basketItem.id}.svg`}
                alt="beetroot"
            />
            <p>{basketItem.name}</p>
            <button className="quantity-btn remove-btn center" onClick={() => decreaseQuantity(basketItem)}>-</button>
            <span className="quantity-text center">{basketItem.quantity}</span>
            <button className="quantity-btn add-btn center" onClick={() => increaseQuantity(basketItem)}>+</button>
        </li>
    )
}

BasketItem.propTypes = {
    basketItem: PropTypes.object,
    increaseQuantity: PropTypes.func,
    decreaseQuantity: PropTypes.func,
}

export default BasketItem