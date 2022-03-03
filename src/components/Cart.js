function Cart(props){
    return (
        <li>
                <img
                  class="cart--item-icon"
                  src={`assets/icons/${props.addedItems.id}.svg`}
                  alt={`${props.addedItems.name}`}
                />
                <p>{`${props.addedItems.name}`}</p>
                <button class="quantity-btn remove-btn center" onClick={() => props.onDecreaseClick(props.addedItems)}>-</button>
                <span class="quantity-text center">{props.addedItems.quantity}</span>
                <button class="quantity-btn add-btn center" onClick={() => props.onIncreaseClick(props.addedItems)}>+</button>
              </li>
        )
}

export default Cart