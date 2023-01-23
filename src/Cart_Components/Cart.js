import CartItem from "./CartItem"

const Cart = ({cartItems, decreaseQuant, increaseQuant}) => {
    return (
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {cartItems.map((item, index) => {
                return (
                    <CartItem 
                      key={index} 
                      item={item}
                      decreaseQuant={decreaseQuant} 
                      increaseQuant={increaseQuant}
                    />
                )
            })}
          </ul>
        </div>
    )
}

export default Cart



