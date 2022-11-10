import CartItem from './CartItem.js'

function Cart ({handlePlus, handleMinus, cartItems}) {

    return (
        <>
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {
              cartItems.map((cartItem)=>   
              <CartItem cartItem={cartItem} handleMinus={handleMinus} handlePlus={handlePlus}/>   
              )
            }
          </ul>
        </div>
        </>
    )
}
export default Cart