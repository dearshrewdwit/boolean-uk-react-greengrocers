import initialStoreItems from './store-items'
console.log(initialStoreItems)

export default function Cart (props) {
return (
    <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {props.cartItems.map(cartItem => {
              return (
                <li key={cartItem.id}>
                  <img
                    className="cart--item-icon"
                    src={`assets/icons/${cartItem.id}.svg`}
                    alt={cartItem.name}
                  />
                  <p>{cartItem.name}</p>
                  <button
                    onClick={() => props.decreaseButton(cartItem)}
                    className="quantity-btn remove-btn center"
                  >
                    -
                  </button>
                  <span className="quantity-text center">
                    {cartItem.quantity}
                  </span>
                  <button
                    onClick={() => props.increaseButton(cartItem)}
                    className="quantity-btn add-btn center"
                  >
                    +
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
)
}